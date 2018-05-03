var Watcher = function (stage) {
    this.stage = stage;

    this.cmd = 'getVar:';
    this.color = '#ee7d16';
    this.isDiscrete = true;
    this.label = 'watcher';
    this.mode = 1;
    this.param = 'var';
    this.sliderMax = 100;
    this.sliderMin = 0;
    this.target = undefined;
    this.visible = true;
    this.x = 0;
    this.y = 0;
};

Watcher.prototype.fromJSON = function (data) {
    this.cmd = data.cmd || 'getVar:';
    if (data.color) {
        var c = (data.color < 0 ? data.color + 0x1000000 : data.color).toString(16);
        this.color = '#000000'.slice(0, -c.length) + c;
    }
    this.isDiscrete = data.isDiscrete == null ? true : data.isDiscrete;
    this.label = data.label || '';
    this.mode = data.mode || 1;
    this.param = data.param;
    this.sliderMax = data.sliderMax == null ? 100 : data.sliderMax;
    this.sliderMin = data.sliderMin || 0;
    this.targetName = data.target;
    this.visible = data.visible == null ? true : data.visible;
    this.x = data.x || 0;
    this.y = data.y || 0;

    return this;
};

Watcher.prototype.resolve = function () {
    this.target = this.stage.getObject(this.targetName);
    if (this.target && this.cmd === 'getVar:') {
        this.target.watchers[this.param] = this;
    }
    if (!this.label) {
        this.label = this.getLabel();
        if (this.target.isSprite) this.label = this.target.objName + ': ' + this.label;
    }
};

var WATCHER_LABELS = {
    'costumeIndex': 'costume #',
    'xpos': 'x position',
    'ypos': 'y position',
    'heading': 'direction',
    'scale': 'size',
    'backgroundIndex': 'background #',
    'sceneName': 'background name',
    'tempo': 'tempo',
    'volume': 'volume',
    'answer': 'answer',
    'timer': 'timer',
    'soundLevel': 'loudness',
    'isLoud': 'loud?',
    'xScroll': 'x scroll',
    'yScroll': 'y scroll'
};

Watcher.prototype.getLabel = function () {
    switch (this.cmd) {
        case 'getVar:':
            return this.param;
        case 'sensor:':
            return this.param + ' sensor value';
        case 'sensorPressed':
            return 'sensor ' + this.param + '?';
        case 'timeAndDate':
            return this.param;
        case 'senseVideoMotion':
            return 'video ' + this.param;
    }
    return WATCHER_LABELS[this.cmd] || '';
};

Watcher.prototype.draw = function (context) {
    var value = 0;
    if (!this.target) return;
    switch (this.cmd) {
        case 'answer':
            value = this.stage.answer;
            break;
        case 'backgroundIndex':
            value = this.stage.currentCostumeIndex + 1;
            break;
        case 'costumeIndex':
            value = this.target.currentCostumeIndex + 1;
            break;
        case 'getVar:':
            value = this.target.vars[this.param];
            if (this.mode === 3 && this.stage.mousePressed) {
                var x = this.stage.mouseX + 240 - this.x - 5;
                var y = 180 - this.stage.mouseY - this.y - 20;
                if (x >= 0 && y >= 0 && x <= this.width - 5 - 5 && y <= 9) {
                    value = this.sliderMin + Math.max(0, Math.min(1, (x - 2.5) / (this.width - 5 - 5 - 5))) * (this.sliderMax - this.sliderMin);
                    value = this.isDiscrete ? Math.round(value) : Math.round(value * 100) / 100;
                    this.target.vars[this.param] = value;
                }
            }
            break;
        case 'heading':
            value = this.target.direction;
            break;
        case 'scale':
            value = this.target.scale * 100;
            break;
        case 'sceneName':
            value = this.stage.getCostumeName();
            break;
        case 'senseVideoMotion':
            // TODO
            break;
        case 'soundLevel':
            // TODO
            break;
        case 'tempo':
            value = this.stage.tempoBPM;
            break;
        case 'timeAndDate':
            value = this.timeAndDate(this.param);
            break;
        case 'timer':
            value = Math.round((this.stage.now() - this.stage.timerStart) / 100) / 10;
            break;
        case 'volume':
            value = this.target.volume * 100;
            break;
        case 'xpos':
            value = this.target.scratchX;
            break;
        case 'ypos':
            value = this.target.scratchY;
            break;
    }
    if (typeof value === 'number' && (value < 0.001 || value > 0.001)) {
        value = Math.round(value * 1000) / 1000;
    }
    value = '' + value;

    if (this.labelWidth == null) {
        context.font = 'bold 11px sans-serif';
        this.labelWidth = context.measureText(this.label).width;
    }

    context.save();
    context.translate(this.x, this.y);

    //drawing variables in here?
    if (this.mode === 1 || this.mode === 3) {
        context.font = 'bold 11px sans-serif';

        var dw = Math.max(41, 5 + context.measureText(value).width + 5);
        var r = 5;
        var w = this.width = 5 + this.labelWidth + 5 + dw + 5;
        var h = this.mode === 1 ? 21 : 32;

        context.strokeStyle = 'rgb(148, 145, 145)';
        context.fillStyle = 'rgb(193, 196, 199)';
        context.lineWidth = 2;
        context.beginPath();
        context.arc(r + 1, r + 1, r, Math.PI, Math.PI * 3 / 2, false);
        context.arc(w - r - 1, r + 1, r, Math.PI * 3 / 2, 0, false);
        context.arc(w - r - 1, h - r - 1, r, 0, Math.PI / 2, false);
        context.arc(r + 1, h - r - 1, r, Math.PI / 2, Math.PI, false);
        context.closePath();
        context.stroke();
        context.fill();

        context.fillStyle = '#000';
        context.fillText(this.label, 5, 14);

        var dh = 15;
        var dx = 5 + this.labelWidth + 5;
        var dy = 3;
        var dr = 4;

        context.save();
        context.translate(dx, dy);

        context.strokeStyle = '#fff';
        context.fillStyle = this.color;
        context.lineWidth = 2;
        context.beginPath();
        context.arc(dr + 1, dr + 1, dr, Math.PI, Math.PI * 3 / 2, false);
        context.arc(dw - dr - 1, dr + 1, dr, Math.PI * 3 / 2, 0, false);
        context.arc(dw - dr - 1, dh - dr - 1, dr, 0, Math.PI / 2, false);
        context.arc(dr + 1, dh - dr - 1, dr, Math.PI / 2, Math.PI, false);
        context.closePath();
        context.stroke();
        context.fill();

        context.fillStyle = '#fff';
        context.textAlign = 'center';
        context.fillText(value, dw / 2, dh - 4);

        context.restore();

        if (this.mode === 3) {
            var sh = 5;
            var sw = w - 5 - 5;
            var sr = 1.5;
            var br = 4.5;

            context.save();
            context.translate(5, 22);

            context.strokeStyle = 'rgb(148, 145, 145)';
            context.fillStyle = 'rgb(213, 216, 219)';
            context.lineWidth = 2;
            context.beginPath();
            context.arc(sr + 1, sr + 1, sr, Math.PI, Math.PI * 3 / 2, false);
            context.arc(sw - sr - 1, sr + 1, sr, Math.PI * 3 / 2, 0, false);
            context.arc(sw - sr - 1, sh - sr - 1, sr, 0, Math.PI / 2, false);
            context.arc(sr + 1, sh - sr - 1, sr, Math.PI / 2, Math.PI, false);
            context.closePath();
            context.stroke();
            context.fill();

            var x = (sw - sh) * Math.max(0, Math.min(1, ((+value || 0) - this.sliderMin) / (this.sliderMax - this.sliderMin)));
            context.strokeStyle = 'rgb(108, 105, 105)';
            context.fillStyle = 'rgb(233, 236, 239)';
            context.beginPath();
            context.arc(x + sh / 2, sh / 2, br - 1, 0, Math.PI * 2, false);
            context.stroke();
            context.fill();

            context.restore();
        }
    } else if (this.mode === 2) {
        context.font = 'bold 15px sans-serif';

        dh = 21;
        dw = Math.max(41, 5 + context.measureText(value).width + 5);
        dr = 4;

        context.strokeStyle = '#fff';
        context.fillStyle = this.color;
        context.lineWidth = 2;
        context.beginPath();
        context.arc(dr + 1, dr + 1, dr, Math.PI, Math.PI * 3 / 2, false);
        context.arc(dw - dr - 1, dr + 1, dr, Math.PI * 3 / 2, 0, false);
        context.arc(dw - dr - 1, dh - dr - 1, dr, 0, Math.PI / 2, false);
        context.arc(dr + 1, dh - dr - 1, dr, Math.PI / 2, Math.PI, false);
        context.closePath();
        context.stroke();
        context.fill();

        context.fillStyle = '#fff';
        context.textAlign = 'center';
        context.fillText(value, dw / 2, dh - 5);
    }

    context.restore();
};