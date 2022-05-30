var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sports = (function () {
    function Sports(name, place) {
        this.name = name;
        this.place = place;
    }
    return Sports;
}());
var Basketball = (function (_super) {
    __extends(Basketball, _super);
    function Basketball(name, place, shape) {
        var _this = _super.call(this, name, place) || this;
        _this.shape = shape;
        return _this;
    }
    Basketball.prototype.play = function () {
        console.log('打篮球');
    };
    return Basketball;
}(Sports));
var ba = new Basketball('篮球', '篮球场', '球形');
ba.play();
