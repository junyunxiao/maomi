var Costume = function (data, index, base) {

    //var lol = document.body.style.width;

    this.index = index;
    this.base = base;
    this.baseLayerID = data.baseLayerID;
    this.baseLayerMD5 = data.baseLayerMD5;
    this.baseLayer = data.$image;
    this.bitmapResolution = data.bitmapResolution || 1;
    this.scale = 1 / this.bitmapResolution;
    this.costumeName = data.costumeName;
    this.rotationCenterX = data.rotationCenterX;
    this.rotationCenterY = data.rotationCenterY;
    this.textLayer = data.$text;
    this.resScale = Math.pow(2, Math.floor(Math.log((P.resolution || 480) / 481) / Math.log(2))) * 2;

    this.image = document.createElement('canvas');
    this.context = this.image.getContext('2d');

    this.render();
    this.baseLayer.onload = function () {
        this.render();
    }.bind(this);
    if (this.textLayer) {
        this.textLayer.onload = this.baseLayer.onload;
    }
};
addEvents(Costume, 'load');

Costume.prototype.render = function () {
    if (!this.baseLayer.width || this.textLayer && !this.textLayer.width) {
        return;
    }

    this.image.width = this.baseLayer.width * this.resScale;
    this.image.height = this.baseLayer.height * this.resScale;

    this.context.mozImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;
    this.context.msImageSmoothingEnabled = false;
    this.context.webkitImageSmoothingEnabled = false;

    this.context.drawImage(this.baseLayer, 0, 0, this.image.width, this.image.height);
    if (this.textLayer) {
        this.context.drawImage(this.textLayer, 0, 0, this.image.width, this.image.height);
    }
    if (this.base.isStage && this.index == this.base.currentCostumeIndex) {
        setTimeout(function () {
            this.base.updateBackdrop();
        }.bind(this));
    }
};
