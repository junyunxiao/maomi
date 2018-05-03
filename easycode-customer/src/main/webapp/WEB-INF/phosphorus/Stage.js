var Stage = function () {
    this.stage = this;

    Stage.parent.call(this);

    this.children = [];
    this.defaultWatcherX = 10;
    this.defaultWatcherY = 10;

    this.info = {};
    this.answer = '';
    this.promptId = 0;
    this.nextPromptId = 0;
    this.tempoBPM = 60;
    this.videoAlpha = 1;
    this.zoom = 1;
    this.maxZoom = SCALE;
    this.baseNow = 0;
    this.baseTime = 0;
    this.timerStart = 0;

    this.keys = []
    this.keys[128] = 0;
    this.rawMouseX = 0;
    this.rawMouseY = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mousePressed = false;

    this.root = document.createElement('div');
    //this.root.style.position = 'absolute';
    this.root.style.overflow = 'hidden';
    this.root.style.width = w + 'px';
    this.root.style.height = h + 'px';
    this.root.style.fontSize = '1px';
    this.root.style.background = '#fff';
    this.root.style.WebkitUserSelect =
        this.root.style.MozUserSelect =
            this.root.style.MSUserSelect =
                this.root.style.WebkitUserSelect = 'none';

    this.backdropCanvas = document.createElement('canvas');
    this.root.appendChild(this.backdropCanvas);
    this.backdropCanvas.width = SCALE * w;
    this.backdropCanvas.height = SCALE * h;
    this.backdropContext = this.backdropCanvas.getContext('2d');

    this.penCanvas = document.createElement('canvas');
    this.root.appendChild(this.penCanvas);
    this.penCanvas.width = SCALE * w;
    this.penCanvas.height = SCALE * h;
    this.penContext = this.penCanvas.getContext('2d');
    this.penContext.lineCap = 'round';
    this.penContext.scale(SCALE, SCALE);

    this.canvas = document.createElement('canvas');
    this.root.appendChild(this.canvas);
    this.canvas.width = SCALE * w;
    this.canvas.height = SCALE * h;
    this.context = this.canvas.getContext('2d');

    this.canvas.tabIndex = 0;
    this.canvas.style.outline = 'none';
    this.backdropCanvas.style.position =
        this.penCanvas.style.position =
            this.canvas.style.position = 'absolute';
    this.backdropCanvas.style.width =  w + 'px';
    this.penCanvas.style.width =  w + 'px';
    this.canvas.style.width =  w + 'px';
    this.backdropCanvas.style.height =  h + 'px';
    this.penCanvas.style.height =  h + 'px';
    this.canvas.style.height = h + 'px';
    // hardware acceleration
    this.root.style.WebkitTransform = 'translateZ(0)';

    var throttle = function (fn, delay, mustRunDelay) {
        var timer = null;
        var t_start;
        return function () {
            var context = this, args = arguments, t_curr = +new Date();
            clearTimeout(timer);
            if(!t_start) {
                t_start = t_curr;
            }
            if(t_curr - t_start >= mustRunDelay) {
                fn.apply(context, args);
                t_start = t_curr;
            } else {
                timer = setTimeout(function(){
                    fn.apply(context, args);
                }, delay)

            }
        }

    };

    this.root.addEventListener('keydown', function (e) {
        if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode === 27) {
            return;
        }
        if (!this.keys[e.keyCode]) this.keys[128]++
        this.keys[e.keyCode] = true;
        e.stopPropagation();
        if (e.target === this.canvas) {
            e.preventDefault();
            this.trigger('whenKeyPressed', e.keyCode);
        }
    }.bind(this));

    this.root.addEventListener('keyup', function (e) {
        if (this.keys[e.keyCode]) this.keys[128]--
        this.keys[e.keyCode] = false;
        e.stopPropagation();
        if (e.target === this.canvas) {
            e.preventDefault();
        }
    }.bind(this));

    //Changed this to include both event listeners, otherwise Hybrid laptops may not work. Possibly add extra option for hybrids instead.
    //if (hasTouchEvents) {

    document.addEventListener('touchstart', function (e) {
        this.mousePressed = true;
        for (var i = 0; i < e.changedTouches.length; i++) {
            this.updateMouse(e.changedTouches[i]);
            if (e.target === this.canvas) {
                this.clickMouse();
            }
        }
        if (e.target === this.canvas) e.preventDefault();
    }.bind(this));

    document.addEventListener('touchmove', function (e) {
        this.updateMouse(e.changedTouches[0]);
    }.bind(this));

    document.addEventListener('touchend', function (e) {
        this.releaseMouse();
    }.bind(this));

    //} else {

    document.addEventListener('mousedown', function (e) {
        this.updateMouse(e);
        this.mousePressed = true;

        if (e.target === this.canvas) {
            this.clickMouse();
            e.preventDefault();
            this.canvas.focus();
        }
    }.bind(this));

    document.addEventListener('mousemove', function (e) {
        this.updateMouse(e);
    }.bind(this));

    document.addEventListener('mouseup', function (e) {
        this.updateMouse(e);
        this.releaseMouse();
    }.bind(this));
    //}

    this.prompter = document.createElement('div');
    this.root.appendChild(this.prompter);
    this.prompter.style.position = 'absolute';
    this.prompter.style.left =
        this.prompter.style.right = '14px';
    this.prompter.style.bottom = '4px';
    this.prompter.style.padding = '4px 4px 4px 4px';
    this.prompter.style.border = '3px solid rgb(46, 174, 223)';
    this.prompter.style.borderRadius = '8px';
    this.prompter.style.background = '#fff';
    this.prompter.style.display = 'none';

    this.promptTitle = document.createElement('div');
    this.prompter.appendChild(this.promptTitle);
    this.promptTitle.textContent = '';
    this.promptTitle.style.cursor = 'default';
    this.promptTitle.style.font = 'bold 26px sans-serif';
    this.promptTitle.style.margin = '0 ' + (-25)*2 + 'px ' + (5)*2 + 'px 0';
    this.promptTitle.style.whiteSpace = 'pre';
    this.promptTitle.style.overflow = 'hidden';
    this.promptTitle.style.textOverflow = 'ellipsis';

    this.prompt = document.createElement('input');
    this.prompter.appendChild(this.prompt);
    this.prompt.style.border = '0';
    this.prompt.style.background = '#eee';
    this.prompt.style.MozBoxSizing =
        this.prompt.style.boxSizing = 'border-box';
    this.prompt.style.font = '13px sans-serif';
    this.prompt.style.padding = '0 ' + (3)*2 + 'px';
    this.prompt.style.outline = '0';
    this.prompt.style.margin = '0';
    this.prompt.style.width = '92%';
    this.prompt.style.height = '' + 20 + 'px';
    this.prompt.style.display = 'block';
    this.prompt.style.WebkitBorderRadius =
        this.prompt.style.borderRadius = '0';
    this.prompt.style.WebkitBoxShadow =
        this.prompt.style.boxShadow = 'inset ' + (1)*2 + 'px ' + (1)*2 + 'px ' + (2)*2 + 'px rgba(0, 0, 0, .2), inset ' + (-1)*2 + 'px ' + (-1)*2 + 'px ' + (1)*2 + 'px rgba(255, 255, 255, .2)';
    this.prompt.style.WebkitAppearance = 'none';
    this.prompt.style.WebkitUserSelect = 'auto';

    this.promptButton = document.createElement('div');
    this.prompter.appendChild(this.promptButton);
    this.promptButton.style.width = '22px';
    this.promptButton.style.height = '22px';
    this.promptButton.style.position = 'absolute';
    this.promptButton.style.right = '4px';
    this.promptButton.style.bottom = '4px';
    this.promptButton.style.background = 'url(http://kw.stu.126.net/res/icon/svg/icons.svg) -165px -37px';
    this.promptButton.style.backgroundSize = '320px 96px';

    this.prompt.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            this.submitPrompt();
        }
    }.bind(this));

    this.promptButton.addEventListener(hasTouchEvents ? 'touchstart' : 'mousedown', this.submitPrompt.bind(this));

    this.initRuntime();
};
inherits(Stage, Base);

Stage.prototype.isStage = true;

Stage.prototype.fromJSON = function (data) {
    Stage.parent.prototype.fromJSON.call(this, data);

    data.children.forEach(function (d) {
        if (d.listName) return;
        this.children.push(new (d.cmd ? Watcher : Sprite)(this).fromJSON(d));
    }, this);

    this.children.forEach(function (child) {
        if (child.resolve) child.resolve();
    }, this);

    P.compile(this);

    return this;
};

Stage.prototype.focus = function () {
    if (this.promptId < this.nextPromptId) {
        this.prompt.focus();
    } else {
        this.canvas.focus();
    }
};

Stage.prototype.updateMouse = function (e) {
    var bb = this.canvas.getBoundingClientRect();
    var x = (e.clientX - bb.left) / this.zoom - 240;
    var y = 180 - (e.clientY - bb.top) / this.zoom;
    this.rawMouseX = x;
    this.rawMouseY = y;
    if (x < -240) x = -240;
    if (x > 240) x = 240;
    if (y < -180) y = -180;
    if (y > 180) y = 180;
    this.mouseX = x;
    this.mouseY = y;
};

Stage.prototype.updateBackdrop = function () {
    this.backdropCanvas.width = this.zoom * SCALE * w;
    this.backdropCanvas.height = this.zoom * SCALE * h;
    var costume = this.costumes[this.currentCostumeIndex];
    this.backdropContext.save();
    var s = this.zoom * SCALE * costume.scale;
    this.backdropContext.scale(s, s);
    this.backdropContext.drawImage(costume.image, 0, 0, costume.image.width / costume.resScale, costume.image.height / costume.resScale);
    this.backdropContext.restore();
};

Stage.prototype.updateFilters = function () {
    this.backdropCanvas.style.opacity = Math.max(0, Math.min(1, 1 - this.filters.ghost / 100));
};

Stage.prototype.setZoom = function (zoom) {
    if (this.zoom === zoom) return;
    if (this.maxZoom < zoom * SCALE) {
        this.maxZoom = zoom * SCALE;
        var canvas = document.createElement('canvas');
        canvas.width = this.penCanvas.width;
        canvas.height = this.penCanvas.height;
        canvas.getContext('2d').drawImage(this.penCanvas, 0, 0);
        this.penCanvas.width = w * zoom * SCALE;
        this.penCanvas.height = h * zoom * SCALE;
        this.penContext.drawImage(canvas, 0, 0, w * zoom * SCALE, h * zoom * SCALE);
        this.penContext.scale(this.maxZoom, this.maxZoom);
        this.penContext.lineCap = 'round';
    }
    this.root.style.width =
        this.canvas.style.width =
            this.backdropCanvas.style.width =
                this.penCanvas.style.width = (w * zoom | 0) + 'px';
    this.root.style.height =
        this.canvas.style.height =
            this.backdropCanvas.style.height =
                this.penCanvas.style.height = (h * zoom | 0) + 'px';
    this.root.style.fontSize = zoom + 'px';
    this.zoom = zoom;
    this.updateBackdrop();
};

Stage.prototype.clickMouse = function () {
    this.mouseSprite = undefined;
    for (var i = this.children.length; i--;) {
        var c = this.children[i];
        if (c.isSprite && c.visible && c.filters.ghost < 100 && c.touching('_mouse_')) {
            if (c.isDraggable) {
                this.mouseSprite = c;
                c.mouseDown();
            } else {
                this.triggerFor(c, 'whenClicked');
            }
            return;
        }
    }
    this.triggerFor(this, 'whenClicked');
};

Stage.prototype.releaseMouse = function () {
    this.mousePressed = false;
    if (this.mouseSprite) {
        this.mouseSprite.mouseUp();
        this.mouseSprite = undefined;
    }
};

Stage.prototype.stopAllSounds = function () {
    for (var children = this.children, i = children.length; i--;) {
        if (children[i].isSprite) {
            children[i].stopSounds();
        }
    }
    this.stopSounds();
};

Stage.prototype.removeAllClones = function () {
    var i = this.children.length;
    while (i--) {
        if (this.children[i].isClone) {
            this.children[i].remove();
            this.children.splice(i, 1);
        }
    }
};

Stage.prototype.getObject = function (name) {
    name = (name || '').toString();

    for (var i = 0; i < this.children.length; i++) {
        var c = this.children[i];
        if (c.objName === name && !c.isClone) {
            return c;
        }
    }
    if (name === '_stage_' || name === this.objName) {
        return this;
    }
};

Stage.prototype.getObjects = function (name) {
    name = (name || '').toString();

    var result = [];
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].objName === name) {
            result.push(this.children[i]);
        }
    }
    return result;
};

Stage.prototype.draw = function () {
    var context = this.context;

    this.canvas.width = w * this.zoom * SCALE; // clear
    this.canvas.height = h * this.zoom * SCALE;

    context.scale(this.zoom * SCALE, this.zoom * SCALE);
    this.drawOn(context);

    if (this.hidePrompt) {
        this.hidePrompt = false;
        this.prompter.style.display = 'none';
        this.canvas.focus();
    }
};

Stage.prototype.drawOn = function (context, except) {
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].visible && this.children[i] !== except) {
            this.children[i].draw(context);
        }
    }
};

Stage.prototype.drawAllOn = function (context, except) {
    var costume = this.costumes[this.currentCostumeIndex];
    context.save();
    context.scale(costume.scale, costume.scale);
    context.globalAlpha = Math.max(0, Math.min(1, 1 - this.filters.ghost / 100));
    context.drawImage(costume.image, 0, 0);
    context.restore();

    context.save();
    context.scale(1 / this.maxZoom, 1 / this.maxZoom);
    context.drawImage(this.penCanvas, 0, 0);
    context.restore();

    this.drawOn(context, except);
};

Stage.prototype.moveTo = function () {
};

Stage.prototype.submitPrompt = function () {
    if (this.promptId < this.nextPromptId) {
        this.answer = this.prompt.value;
        this.promptId += 1;
        if (this.promptId >= this.nextPromptId) {
            this.hidePrompt = true;
        }
    }
};
