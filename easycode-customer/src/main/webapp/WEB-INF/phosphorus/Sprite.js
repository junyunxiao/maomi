var Sprite = function (stage) {
    this.stage = stage;

    Sprite.parent.call(this);

    this.direction = 90;
    this.indexInLibrary = -1;
    this.isDraggable = false;
    this.isDragging = false;
    this.rotationStyle = 'normal';
    this.scale = 1;
    this.scratchX = 0;
    this.scratchY = 0;
    this.spriteInfo = {};
    this.visible = true;

    this.Hue = 240;
    this.penHue = 250;
    this.penSaturation = 100;
    this.penLightness = 50;

    this.penSize = 1;
    this.isPenDown = false;
    this.isSprite = true;
    this.bubble = null;
    this.saying = false;
    this.thinking = false;
    this.sayId = 0;
};
inherits(Sprite, Base);

Sprite.prototype.fromJSON = function (data) {

    Sprite.parent.prototype.fromJSON.call(this, data);

    this.direction = data.direction;
    this.indexInLibrary = data.indexInLibrary;
    this.isDraggable = data.isDraggable;
    this.rotationStyle = data.rotationStyle;
    this.scale = data.scale;
    this.scratchX = data.scratchX;
    this.scratchY = data.scratchY;
    this.spriteInfo = data.spriteInfo;
    this.visible = data.visible;

    return this;
};

Sprite.prototype.clone = function () {
    var c = new Sprite(this.stage);

    c.isClone = true;
    c.costumes = this.costumes;
    c.currentCostumeIndex = this.currentCostumeIndex;
    c.objName = this.objName;
    c.soundRefs = this.soundRefs;
    c.sounds = this.sounds;

    var keys = Object.keys(this.vars);
    for (var i = keys.length; i--;) {
        var k = keys[i];
        c.vars[k] = this.vars[k];
    }

    var keys = Object.keys(this.lists);
    for (var i = keys.length; i--;) {
        var k = keys[i];
        c.lists[k] = this.lists[k].slice(0);
    }

    c.procedures = this.procedures;
    c.listeners = this.listeners;
    c.fns = this.fns;
    c.scripts = this.scripts;

    c.filters = {
        color: this.filters.color,
        fisheye: this.filters.fisheye,
        whirl: this.filters.whirl,
        pixelate: this.filters.pixelate,
        mosaic: this.filters.mosaic,
        brightness: this.filters.brightness,
        ghost: this.filters.ghost
    };

    c.direction = this.direction;
    c.indexInLibrary = this.indexInLibrary;
    c.isDraggable = this.isDraggable;
    c.rotationStyle = this.rotationStyle;
    c.scale = this.scale;
    c.volume = this.volume;
    c.scratchX = this.scratchX;
    c.scratchY = this.scratchY;
    c.visible = this.visible;
    c.penColor = this.penColor;
    c.penCSS = this.penCSS;
    c.penHue = this.penHue;
    c.penSaturation = this.penSaturation;
    c.penLightness = this.penLightness;
    c.penSize = this.penSize;
    c.isPenDown = this.isPenDown;

    return c;
};

Sprite.prototype.mouseDown = function () {
    this.dragStartX = this.scratchX;
    this.dragStartY = this.scratchY;
    this.dragOffsetX = this.scratchX - this.stage.mouseX;
    this.dragOffsetY = this.scratchY - this.stage.mouseY;
    this.isDragging = true;
};

Sprite.prototype.mouseUp = function () {
    if (this.isDragging && this.scratchX === this.dragStartX && this.scratchY === this.dragStartY) {
        this.stage.triggerFor(this, 'whenClicked');
    }
    this.isDragging = false;
};

Sprite.prototype.forward = function (steps) {
    var d = (90 - this.direction) * Math.PI / 180;
    this.moveTo(this.scratchX + steps * Math.cos(d), this.scratchY + steps * Math.sin(d));
};

Sprite.prototype.moveTo = function (x, y) {
    var ox = this.scratchX;
    var oy = this.scratchY;
    var bounds = this.rotatedBounds();
    var width = bounds.right - bounds.left;
    var height = bounds.top - bounds.bottom;
    var flag = false;
    var offset = 18;
    if (ox === x && oy === y && !this.isPenDown) return;
    if( x <= (-240 - width / 2)) {
        x = -240 - width / 2 + offset;
        flag = true;
    }
    if(x >= (240 + width / 2)) {
        x = 240 + width / 2 - offset;
        flag = true;
    }
    if(y >= (180 + height / 2)) {
        y = 180 + height / 2 - offset;
        flag = true;
    }
    if(y <= (-180 - height / 2)) {
        y = -180 - height / 2.1 + offset;
        flag = true;
    }
    // if( flag ) {
    //     return;
    // }
    this.scratchX = x;
    this.scratchY = y;
    //this.keepOnStage(bounds,ox,oy);
    if (this.isPenDown && !this.isDragging) {
        var context = this.stage.penContext;
        if (this.penSize % 2 > .5 && this.penSize % 2 < 1.5) {
            ox -= .5;
            oy -= .5;
            x -= .5;
            y -= .5;
        }

        context.strokeStyle = this.penCSS || 'hsl(' + this.penHue + ',' + this.penSaturation + '%,' + (this.penLightness > 100 ? 200 - this.penLightness : this.penLightness) + '%)';
        context.lineWidth = this.penSize;
        context.beginPath();
        context.moveTo(240 + ox, 180 - oy);
        context.lineTo(240 + x, 180 - y);
        context.stroke();
    }
    if (this.saying) {
        this.updateBubble();
    }
};

Sprite.prototype.keepOnStage = function (myBox,ox,oy) {
    myBox.width = myBox.right - myBox.left;
    myBox.height = myBox.top - myBox.bottom;
    var scratchX = this.scratchX;
    var scratchY = this.scratchY;
    var edgeBox = {};
    var inset = Math.min(18, Math.min(myBox.width, myBox.height) / 2);
    edgeBox.x = edgeBox.y = inset;
    edgeBox.left = -240 + inset;
    edgeBox.right = 240 - inset;
    edgeBox.bottom = -180 + inset;
    edgeBox.top = 180 - inset;
    inset += inset;
    edgeBox.width = 480 - inset;
    edgeBox.height = 360 - inset;

    //if( myBox.left >= -240 && myBox.right <= 240 && myBox.top <= 180 && myBox.bottom >= -180) return;
    //if( !(myBox.left > edgeBox.right || myBox.right < edgeBox.left || myBox.top < edgeBox.bottom && myBox.bottom > edgeBox.top)) return;
    if (this.scratchX < edgeBox.left)
        scratchX = Math.ceil(scratchX + (edgeBox.left - myBox.right));
    if (ox > edgeBox.right)
        scratchX = ox;
    if (this.scratchY > edgeBox.top)
        scratchY = Math.floor(scratchY - (myBox.bottom - edgeBox.top));
    if (this.scratchY < edgeBox.bottom)
        scratchY = Math.ceil(scratchY - (myBox.top - edgeBox.bottom));
    this.scratchX = scratchX;
    this.scratchY = scratchY;
}

Sprite.prototype.dotPen = function () {
    var context = this.stage.penContext;
    var x = this.scratchX;
    var y = this.scratchY;
    //@fix dot bug
    if(this.isPenDown && !this.isDragging) {
        context.fillStyle = this.penCSS || 'hsl(' + this.penHue + ',' + this.penSaturation + '%,' + (this.penLightness > 100 ? 200 - this.penLightness : this.penLightness) + '%)';
        if(this.penSize <= 2 * w / this.stage.penCanvas.width){
            context.fillRect(240 + x - this.penSize, 180 - y, this.penSize, this.penSize);
        }
        else{
            context.beginPath();
            context.arc(240 + x, 180 - y, this.penSize / 2, 0, 2 * Math.PI, false);
            context.fill();
        }
    }
};

Sprite.prototype.draw = function (context, noEffects) {
    var costume = this.costumes[this.currentCostumeIndex];

    //@fix add color effect
    function colorTransform(binaryData, l, redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {

        for (var i = 0; i < l; i += 4) {
            var r = binaryData[i];
            var g = binaryData[i + 1];
            var b = binaryData[i + 2];
            var alpha = binaryData[i + 3];
            binaryData[i] = r * redMultiplier + redOffset;
            binaryData[i + 1] = g * greenMultiplier + greenOffset;
            binaryData[i + 2] = b * blueMultiplier + blueOffset;
            binaryData[i + 3] = alpha * alphaMultiplier + alphaOffset;
            binaryData[i] = binaryData[i] < 0 ? 0 : (binaryData[i] > 255 ? 255 : binaryData[i]);
            binaryData[i + 1] = binaryData[i + 1] < 0 ? 0 : (binaryData[i + 1] > 255 ? 255 : binaryData[i + 1]);
            binaryData[i + 2] = binaryData[i + 2] < 0 ? 0 : (binaryData[i + 2] > 255 ? 255 : binaryData[i + 2]);
            binaryData[i + 3] = binaryData[i + 3] < 0 ? 0 : (binaryData[i + 3] > 255 ? 255 : binaryData[i + 3]);
        }
    }

    function colorFilter(binaryData, l, hueShift, brightnessShift) {
        function rgb(i, r, g, b) {
            // magic:255
            binaryData[i] = r * 255;
            binaryData[i + 1] = g * 255;
            binaryData[i + 2] = b * 255;
        }

        for (var i = 0; i < l; i += 4) {
            var r = binaryData[i];
            var g = binaryData[i + 1];
            var b = binaryData[i + 2];
            // compute h, s, v
            var h, s;
            var v = Math.max(r, Math.max(g, b));
            var span = v - Math.min(r, Math.min(g, b));
            if (span == 0) {
                h = s = 0; // grayscale
            } else {
                if (r == v) h = 60.0 * ((g - b) / span);
                else if (g == v) h = 120.0 + (60.0 * ((b - r) / span));
                else if (b == v) h = 240.0 + (60.0 * ((r - g) / span));
                s = span / v;
            }

            if (hueShift != 0.0) {
                // this code forces grayscale values to be slightly saturated
                // so that some slight change of hue will be visible
                if (v < 0.11) {
                    v = 0.11;
                    s = 1.0;
                } // force black to dark gray, fully-saturated
                if (s < 0.09) s = 0.09; // make saturation at least 0.09
                if ((v == 0.11) || (s == 0.09)) h = 0.0; // use same tint for all grays
            }


            // apply h, s, v shifts
            h = (h + hueShift) % 360;
            if (h < 0.0) h += 360.0;
            s = Math.max(0.0, Math.min(s, 1.0));
            v = Math.max(0.0, Math.min(v + (brightnessShift / 100.0), 1.0));

            // convert hsv to rgb and save pixel
            var j = Math.floor(h / 60.0);
            var f = (h / 60.0) - j;
            var p = v * (1.0 - s);
            var q = v * (1.0 - (s * f));
            var t = v * (1.0 - (s * (1.0 - f)));

            if ((j == 0) || (j == 6)) rgb(i, v, t, p);
            else if (j == 1) rgb(i, q, v, p);
            else if (j == 2) rgb(i, p, v, t);
            else if (j == 3) rgb(i, p, q, v);
            else if (j == 4) rgb(i, t, p, v);
            else if (j == 5) rgb(i, v, p, q);
        }
    }

    if (this.isDragging) {
        this.moveTo(this.dragOffsetX + this.stage.mouseX, this.dragOffsetY + this.stage.mouseY);
    }

    if (costume) {
        context.save();

        var z = this.stage.zoom * SCALE;
        context.translate(((this.scratchX + 240) * z | 0) / z, ((180 - this.scratchY) * z | 0) / z);
        if (this.rotationStyle === 'normal') {
            context.rotate((this.direction - 90) * Math.PI / 180);
        } else if (this.rotationStyle === 'leftRight' && this.direction < 0) {
            context.scale(-1, 1);
        }
        context.scale(this.scale, this.scale);
        context.scale(costume.scale, costume.scale);
        context.translate(-costume.rotationCenterX, -costume.rotationCenterY);

        if (!noEffects) context.globalAlpha = Math.max(0, Math.min(1, 1 - this.filters.ghost / 100));

        //TODO: General Optimization
        //@fix add color effect
        if (this.filters.color !== 0) {
            var n = Math.max(0, Math.min(this.filters.ghost, 100));
            var alphaMultiplier = 1.0 - (n / 100.0);
            n = 255 * Math.max(-100, Math.min(this.filters.brightness, 100)) / 100;
            var redOffset = n;
            var greenOffset = n;
            var blueOffset = n;

            var costume = this.costumes[this.currentCostumeIndex];
            var img = costume.image;
            var len = img.width * img.height * 4;
            var canvasData = costume.context.getImageData(0, 0, img.width, img.height);
            var binaryData = canvasData.data;
            n = ((360.0 * this.filters.color) / 200.0) % 360.0;
            colorFilter(binaryData, len, n, 0);
            colorTransform(binaryData, len, 1.0, 1.0, 1.0, alphaMultiplier, redOffset, greenOffset, blueOffset, 0);
            costume.context.putImageData(canvasData, 0, 0);
            this.filters.color = 0;
        }

        if (this.filters.pixelate !== 0 || this.filters.mosaic !== 0 || this.filters.brightness !== 0) {

            var effectsCanvas = document.createElement('canvas');
            effectsCanvas.width = costume.image.width;
            effectsCanvas.height = costume.image.height;
            var effectsContext = effectsCanvas.getContext('2d');
            document.body.appendChild(effectsCanvas);

            effectsContext.drawImage(costume.image, 0, 0, effectsCanvas.width, effectsCanvas.height);

            /*
             //color
             //I don't know how to do this (yet).

             //canvas for color overlay
             var colorCanvas = document.createElement('canvas');
             colorCanvas.width = 1;
             colorCanvas.height = 1;
             var colorContext = colorCanvas.getContext('2d');
             document.body.appendChild(colorCanvas);

             var costumeCanvas = document.createElement('canvas');
             costumeCanvas.width = costume.image.width;
             costumeCanvas.height = costume.image.height;
             var costumeContext = costumeCanvas.getContext('2d');
             document.body.appendChild(costumeCanvas);

             //create new object instead of reading?
             var imgData = colorContext.getImageData(0, 0, 1, 1);

             var colorVal = this.filters.color/200;

             imgData.data[0] = (Math.min(2, Math.max(1, Math.abs((colorVal%1)*2-1)*3))-1)*255;
             imgData.data[1] = (Math.min(2, Math.max(1, Math.abs(((colorVal+2/3)%1)*2-1)*3))-1)*255;
             imgData.data[2] = (Math.min(2, Math.max(1, Math.abs(((colorVal+1/3)%1)*2-1)*3))-1)*255;
             imgData.data[3] = 255;

             colorContext.putImageData(imgData, 0, 0);

             costumeContext.drawImage(costume.image, 0, 0);
             costumeContext.globalCompositeOperation = 'color';
             costumeContext.drawImage(colorCanvas, 0, 0, 1000, 1000);
             costumeContext.globalCompositeOperation = 'destination-in';
             costumeContext.drawImage(costume.image, 0, 0);

             context.drawImage(costumeCanvas, 0, 0);

             colorCanvas.parentNode.removeChild(colorCanvas);
             costumeCanvas.parentNode.removeChild(costumeCanvas);
             */


            if (this.filters.pixelate !== 0) {

                var pixelCanvas = document.createElement('canvas');
                pixelCanvas.width = 10 * effectsCanvas.width / (this.filters.pixelate + effectsCanvas.width / 10);
                pixelCanvas.height = 10 * effectsCanvas.height / (this.filters.pixelate + effectsCanvas.height / 10);
                var pixelContext = pixelCanvas.getContext('2d');
                document.body.appendChild(pixelCanvas);

                var costumeCanvas = document.createElement('canvas');
                costumeCanvas.width = effectsCanvas.width;
                costumeCanvas.height = effectsCanvas.height;
                var costumeContext = costumeCanvas.getContext('2d');
                document.body.appendChild(costumeCanvas);

                pixelContext.drawImage(effectsCanvas, 0, 0, pixelCanvas.width, pixelCanvas.height);

                costumeContext.imageSmoothingEnabled = false;
                costumeContext.mozImageSmoothingEnabled = false;
                costumeContext.drawImage(pixelCanvas, 0, 0, costumeCanvas.width, costumeCanvas.height);

                effectsContext.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
                effectsContext.drawImage(costumeCanvas, 0, 0);

                pixelCanvas.parentNode.removeChild(pixelCanvas);
                costumeCanvas.parentNode.removeChild(costumeCanvas);
                this.filters.pixelate = 0;
            }

            ///////

            if (this.filters.mosaic !== 0) {
                var costumeCanvas = document.createElement('canvas');
                costumeCanvas.width = effectsCanvas.width;
                costumeCanvas.height = effectsCanvas.height;
                var costumeContext = costumeCanvas.getContext('2d');
                document.body.appendChild(costumeCanvas);

                var mosaicVal = Math.floor((Math.abs(this.filters.mosaic) + 5) / 10) + 1;

                var lineCanvas = document.createElement('canvas');
                lineCanvas.width = effectsCanvas.width / mosaicVal;
                lineCanvas.height = effectsCanvas.height;
                var lineContext = lineCanvas.getContext('2d');
                document.body.appendChild(lineCanvas);

                for (var i = 0; i < mosaicVal; i++) {
                    lineContext.drawImage(effectsCanvas, 0, i * costumeCanvas.height / mosaicVal, costumeCanvas.width / mosaicVal, costumeCanvas.height / mosaicVal);
                }

                for (var i = 0; i < mosaicVal; i++) {
                    costumeContext.drawImage(lineCanvas, i * costumeCanvas.width / mosaicVal, 0, costumeCanvas.width / mosaicVal, costumeCanvas.height);
                }

                effectsContext.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
                effectsContext.drawImage(costumeCanvas, 0, 0);

                costumeCanvas.parentNode.removeChild(costumeCanvas);
                lineCanvas.parentNode.removeChild(lineCanvas);
                this.filters.mosaic = 0;
            }

            ///////

            if (this.filters.brightness !== 0) {
                //canvas for brightness overlay
                //TODO: Find out why brightness doesn't always match scratch.
                var brightnessCanvas = document.createElement('canvas');
                brightnessCanvas.width = 1;
                brightnessCanvas.height = 1;
                var brightnessContext = brightnessCanvas.getContext('2d');
                document.body.appendChild(brightnessCanvas);

                var costumeCanvas = document.createElement('canvas');
                costumeCanvas.width = effectsCanvas.width;
                costumeCanvas.height = effectsCanvas.height;
                var costumeContext = costumeCanvas.getContext('2d');
                document.body.appendChild(costumeCanvas);

                var imgData = brightnessContext.getImageData(0, 0, 1, 1);

                var brightnessVal = this.filters.brightness * 255 / 101;

                if (brightnessVal < 0) brightnessVal = -255 - brightnessVal;

                imgData.data[0] =
                    imgData.data[1] =
                        imgData.data[2] = Math.abs(brightnessVal);
                imgData.data[3] = 255;

                brightnessContext.putImageData(imgData, 0, 0);

                if (brightnessVal < 0) {
                    costumeContext.drawImage(brightnessCanvas, 0, 0, costumeCanvas.width, costumeCanvas.height);
                    costumeContext.globalCompositeOperation = 'destination-in';
                    costumeContext.drawImage(effectsCanvas, 0, 0);
                    costumeContext.globalCompositeOperation = 'multiply';
                    costumeContext.drawImage(effectsCanvas, 0, 0);
                }
                else {
                    costumeContext.drawImage(effectsCanvas, 0, 0);
                    costumeContext.globalCompositeOperation = 'lighter';
                    costumeContext.drawImage(brightnessCanvas, 0, 0, costumeCanvas.width, costumeCanvas.height);
                    costumeContext.globalCompositeOperation = 'destination-in';
                    costumeContext.drawImage(effectsCanvas, 0, 0);
                }
                effectsContext.drawImage(costumeCanvas, 0, 0);

                brightnessCanvas.parentNode.removeChild(brightnessCanvas);
                costumeCanvas.parentNode.removeChild(costumeCanvas);
                this.filters.brightness = 0;
            }

            context.drawImage(effectsCanvas, 0, 0, costume.image.width / costume.resScale, costume.image.height / costume.resScale);

            effectsCanvas.parentNode.removeChild(effectsCanvas);
        }
        else context.drawImage(costume.image, 0, 0, costume.image.width / costume.resScale, costume.image.height / costume.resScale);

        context.restore();
    }
};

Sprite.prototype.setDirection = function (degrees) {
    var d = degrees % 360;
    if (d > 180) d -= 360;
    if (d <= -180) d += 360;
    this.direction = d;
    if (this.saying) this.updateBubble();
};

var collisionCanvas = document.createElement('canvas');
var collisionContext = collisionCanvas.getContext('2d');

Sprite.prototype.touching = function (thing) {
    var costume = this.costumes[this.currentCostumeIndex];

    if (thing === '_mouse_') {
        var bounds = this.rotatedBounds();
        var x = this.stage.rawMouseX;
        var y = this.stage.rawMouseY;
        if (x < bounds.left || y < bounds.bottom || x > bounds.right || y > bounds.top) {
            return false;
        }
        var cx = (x - this.scratchX) / this.scale
        var cy = (this.scratchY - y) / this.scale
        if (this.rotationStyle === 'normal' && this.direction !== 90) {
            var d = (90 - this.direction) * Math.PI / 180
            var ox = cx
            var s = Math.sin(d), c = Math.cos(d)
            cx = c * ox - s * cy
            cy = s * ox + c * cy
        } else if (this.rotationStyle === 'leftRight' && this.direction < 0) {
            cx = -cx
        }
        var d = costume.context.getImageData(cx * costume.resScale * costume.bitmapResolution + costume.rotationCenterX * costume.resScale, cy * costume.resScale * costume.bitmapResolution + costume.rotationCenterY * costume.resScale, 1, 1).data;
        return d[3] !== 0;
    } else if (thing === '_edge_') {
        var bounds = this.rotatedBounds();
        return bounds.left <= -240 || bounds.right >= 240 || bounds.top >= 180 || bounds.bottom <= -180;
    } else {
        if (!this.visible) return false;
        var sprites = this.stage.getObjects(thing);
        for (var i = sprites.length; i--;) {
            var sprite = sprites[i];
            if (!sprite.visible) continue;

            var mb = this.rotatedBounds();
            var ob = sprite.rotatedBounds();

            if (mb.bottom >= ob.top || ob.bottom >= mb.top || mb.left >= ob.right || ob.left >= mb.right) {
                continue;
            }

            var left = Math.max(mb.left, ob.left);
            var top = Math.min(mb.top, ob.top);
            var right = Math.min(mb.right, ob.right);
            var bottom = Math.max(mb.bottom, ob.bottom);

            collisionCanvas.width = right - left;
            collisionCanvas.height = top - bottom;

            collisionContext.save();
            collisionContext.translate(-(left + 240), -(180 - top));

            this.draw(collisionContext, true);
            collisionContext.globalCompositeOperation = 'source-in';
            sprite.draw(collisionContext, true);

            collisionContext.restore();
            try {
                var data = collisionContext.getImageData(0, 0, right - left, top - bottom).data;

                var length = (right - left) * (top - bottom) * 4;
                for (var j = 0; j < length; j += 4) {
                    if (data[j + 3]) {
                        return true;
                    }
                }
            } catch (e) {

            }

        }
        return false;
    }
};

Sprite.prototype.touchingColor = function (rgb) {
    var b = this.rotatedBounds();
    collisionCanvas.width = b.right - b.left;
    collisionCanvas.height = b.top - b.bottom;

    collisionContext.save();
    collisionContext.translate(-(240 + b.left), -(180 - b.top));

    this.stage.drawAllOn(collisionContext, this);
    collisionContext.globalCompositeOperation = 'destination-in';
    this.draw(collisionContext, true);

    collisionContext.restore();

    var data = collisionContext.getImageData(0, 0, b.right - b.left, b.top - b.bottom).data;

    rgb = rgb & 0xffffff;
    var length = (b.right - b.left) * (b.top - b.bottom) * 4;

    var r = (rgb & 0xff0000) >> 16;
    var g = (rgb & 0x00ff00) >> 8;
    var b = rgb & 0x0000ff;

    for (var i = 0; i < length; i += 4) {
        // if ((data[i] << 16 | data[i + 1] << 8 | data[i + 2]) === rgb ) {
        //     return true;
        // }
        if(data[i + 3] && this.similar(data[i], data[i + 1], data[i + 2], r, g, b)) {
            return true;
        }
    }
    return false;
};


Sprite.prototype.colorTouchingColor = function (mask, rgb) {
    var b = this.rotatedBounds();
    collisionCanvas.width = b.right - b.left;
    collisionCanvas.height = b.top - b.bottom;

    collisionContext.save();
    collisionContext.translate(-(240 + b.left), -(180 - b.top));

    this.stage.drawAllOn(collisionContext, this);
    collisionContext.globalCompositeOperation = 'destination-in';
    this.draw(collisionContext, true);

    collisionContext.restore();

    var data1 = collisionContext.getImageData(0, 0, b.right - b.left, b.top - b.bottom).data;

    var b = this.rotatedBounds();
    collisionCanvas.width = b.right - b.left;
    collisionCanvas.height = b.top - b.bottom;

    collisionContext.save();
    collisionContext.translate(-(240 + b.left), -(180 - b.top));

    this.stage.drawAllOn(collisionContext, this);
    collisionContext.globalCompositeOperation = 'source-in';
    this.draw(collisionContext, true);

    collisionContext.restore();

    var data2 = collisionContext.getImageData(0, 0, b.right - b.left, b.top - b.bottom).data;

    rgb = rgb & 0xffffff;
    var length = (b.right - b.left) * (b.top - b.bottom) * 4;

    var r = (rgb & 0xff0000) >> 16;
    var g = (rgb & 0x00ff00) >> 8;
    var b = rgb & 0x0000ff;

    mask = mask & 0xffffff;

    var mr = (mask & 0xff0000) >> 16;
    var mg = (mask & 0x00ff00) >> 8;
    var mb = mask & 0x0000ff;

    for (var i = 0; i < length; i += 4) {
        if(data1[i + 3] && this.similar(data1[i], data1[i + 1], data1[i + 2], r, g, b) && this.similar(data2[i], data2[i + 1], data2[i + 2], mr, mg, mb)) {
            return true;
        }
    }
    return false;
};

Sprite.prototype.similar = function (r0,g0,b0, r1,g1,b1) {
    var threshold = 10;
    var absR = Math.abs(r0 - r1);
    var absG = Math.abs(g0 - g1);
    var absB = Math.abs(b0 - b1);
    if(absR < threshold && absG < threshold && absB < threshold) {
        return true;
    }
    return false;
};


Sprite.prototype.bounceOffEdge = function () {
    var b = this.rotatedBounds();
    var dl = 240 + b.left;
    var dt = 180 - b.top;
    var dr = 240 - b.right;
    var db = 180 + b.bottom;

    var d = Math.min(dl, dt, dr, db);
    if (d > 0) return;

    var dir = this.direction * Math.PI / 180;
    var dx = Math.sin(dir);
    var dy = -Math.cos(dir);

    switch (d) {
        case dl:
            dx = Math.max(0.2, Math.abs(dx));
            break;
        case dt:
            dy = Math.max(0.2, Math.abs(dy));
            break;
        case dr:
            dx = -Math.max(0.2, Math.abs(dx));
            break;
        case db:
            dy = -Math.max(0.2, Math.abs(dy));
            break;
    }

    this.direction = Math.atan2(dy, dx) * 180 / Math.PI + 90;
    if (this.saying) this.updateBubble();

    b = this.rotatedBounds();
    var x = this.scratchX;
    var y = this.scratchY;
    if (b.left < -240) x += -240 - b.left;
    if (b.top > 180) y += 180 - b.top;
    if (b.right > 240) x += 240 - b.left;
    if (b.bottom < -180) y += -180 - b.top;
};

Sprite.prototype.rotatedBounds = function () {
    var costume = this.costumes[this.currentCostumeIndex];

    var s = costume.scale * this.scale;
    var left = -costume.rotationCenterX * s;
    var top = costume.rotationCenterY * s;
    var right = left + costume.image.width * s;
    var bottom = top - costume.image.height * s;

    if (this.rotationStyle !== 'normal') {
        if (this.rotationStyle === 'leftRight' && this.direction < 0) {
            right = -left;
            left = right - costume.image.width * costume.scale * this.scale;
        }
        return {
            left: this.scratchX + left,
            right: this.scratchX + right,
            top: this.scratchY + top,
            bottom: this.scratchY + bottom
        };
    }

    var mSin = Math.sin(this.direction * Math.PI / 180);
    var mCos = Math.cos(this.direction * Math.PI / 180);

    var tlX = mSin * left - mCos * top;
    var tlY = mCos * left + mSin * top;

    var trX = mSin * right - mCos * top;
    var trY = mCos * right + mSin * top;

    var blX = mSin * left - mCos * bottom;
    var blY = mCos * left + mSin * bottom;

    var brX = mSin * right - mCos * bottom;
    var brY = mCos * right + mSin * bottom;

    return {
        left: this.scratchX + Math.min(tlX, trX, blX, brX),
        right: this.scratchX + Math.max(tlX, trX, blX, brX),
        top: this.scratchY + Math.max(tlY, trY, blY, brY),
        bottom: this.scratchY + Math.min(tlY, trY, blY, brY)
    };
};

Sprite.prototype.showRotatedBounds = function () {
    var bounds = this.rotatedBounds();
    var div = document.createElement('div');
    div.style.outline = '1px solid red';
    div.style.position = 'absolute';
    div.style.left = (240 + bounds.left) + 'px';
    div.style.top = (180 - bounds.top) + 'px';
    div.style.width = (bounds.right - bounds.left) + 'px';
    div.style.height = (bounds.top - bounds.bottom) + 'px';
    this.stage.canvas.parentNode.appendChild(div);
};

Sprite.prototype.distanceTo = function (thing) {
    if (thing === '_mouse_') {
        var x = this.stage.mouseX;
        var y = this.stage.mouseY;
    } else {
        var sprite = this.stage.getObject(thing);
        if (!sprite) return 0;
        x = sprite.scratchX;
        y = sprite.scratchY;
    }
    return Math.sqrt((this.scratchX - x) * (this.scratchX - x) + (this.scratchY - y) * (this.scratchY - y));
};

Sprite.prototype.gotoObject = function (thing) {
    if (thing === '_mouse_') {
        this.moveTo(this.stage.mouseX, this.stage.mouseY);
    } else if (thing === '_random_') {
        var x = Math.round(w * Math.random() - 240);
        var y = Math.round(h * Math.random() - 180);
        this.moveTo(x, y);
    } else {
        var sprite = this.stage.getObject(thing);
        if (!sprite) return 0;
        this.moveTo(sprite.scratchX, sprite.scratchY);
    }
};

Sprite.prototype.pointTowards = function (thing) {
    if (thing === '_mouse_') {
        var x = this.stage.mouseX;
        var y = this.stage.mouseY;
    } else {
        var sprite = this.stage.getObject(thing);
        if (!sprite) return 0;
        x = sprite.scratchX;
        y = sprite.scratchY;
    }
    var dx = x - this.scratchX;
    var dy = y - this.scratchY;
    this.direction = dx === 0 && dy === 0 ? 90 : Math.atan2(dx, dy) * 180 / Math.PI;
    if (this.saying) this.updateBubble();
};

Sprite.prototype.say = function (text, thinking) {
    text = '' + text;
    if (!text) {
        this.saying = false;
        if (!this.bubble) return;
        this.bubble.style.display = 'none';
        return ++this.sayId;
    }
    this.saying = true;
    this.thinking = thinking;
    if (!this.bubble) {
        this.bubble = document.createElement('div');
        this.bubble.style.maxWidth = '' + (127 / 14) + 'em';
        this.bubble.style.minWidth = '' + (48 / 14) + 'em';
        this.bubble.style.padding = '' + (8 / 14) + 'em ' + (10 / 14) + 'em';
        this.bubble.style.border = '' + (3 / 14) + 'em solid rgb(160, 160, 160)';
        this.bubble.style.borderRadius = '' + (10 / 14) + 'em';
        this.bubble.style.background = '#fff';
        this.bubble.style.position = 'absolute';
        this.bubble.style.font = 'bold 14em sans-serif';
        this.bubble.style.whiteSpace = 'pre-wrap';
        this.bubble.style.wordWrap = 'break-word';
        this.bubble.style.textAlign = 'center';
        this.bubble.style.cursor = 'default';
        this.bubble.appendChild(this.bubbleText = document.createTextNode(''));
        this.bubble.appendChild(this.bubblePointer = document.createElement('div'));
        this.bubblePointer.style.position = 'absolute';
        this.bubblePointer.style.height = '' + (21 / 14) + 'em';
        this.bubblePointer.style.width = '' + (44 / 14) + 'em';
        this.bubblePointer.style.background = 'url(http://kw.stu.126.net/res/icon/svg/icons.svg) ' + (-195 / 14) + 'em ' + (-4 / 14) + 'em';
        this.bubblePointer.style.backgroundSize = '' + (320 / 14) + 'em ' + (96 / 14) + 'em';
        this.stage.root.appendChild(this.bubble);
    }
    this.bubblePointer.style.backgroundPositionX = ((thinking ? -259 : -195) / 14) + 'em';
    this.bubble.style.display = 'block';
    this.bubbleText.nodeValue = text;
    this.updateBubble();
    return ++this.sayId;
};

Sprite.prototype.updateBubble = function () {
    if (!this.visible || !this.saying) {
        this.bubble.style.display = 'none';
        return;
    }
    var b = this.rotatedBounds();
    var left = 240 + b.right;
    var bottom = 180 + b.top;
    var width = this.bubble.offsetWidth / this.stage.zoom;
    var height = this.bubble.offsetHeight / this.stage.zoom;
    this.bubblePointer.style.top = ((height - 6) / 14) + 'em';
    if (left + width + 2 > w) {
        this.bubble.style.right = ((240 - b.left) / 14) + 'em';
        this.bubble.style.left = 'auto';
        this.bubblePointer.style.right = (3 / 14) + 'em';
        this.bubblePointer.style.left = 'auto';
        this.bubblePointer.style.backgroundPositionY = (-36 / 14) + 'em';
    } else {
        this.bubble.style.left = (left / 14) + 'em';
        this.bubble.style.right = 'auto';
        this.bubblePointer.style.left = (3 / 14) + 'em';
        this.bubblePointer.style.right = 'auto';
        this.bubblePointer.style.backgroundPositionY = (-4 / 14) + 'em';
    }
    if (bottom + height + 2 > h) {
        bottom = h - height - 2;
    }
    if (bottom < 19) {
        bottom = 19;
    }
    this.bubble.style.bottom = (bottom / 14) + 'em';
};

Sprite.prototype.remove = function () {
    if (this.bubble) {
        this.stage.root.removeChild(this.bubble);
        this.bubble = null;
    }
    if (this.node) {
        this.node.disconnect();
        this.node = null;
    }
};
