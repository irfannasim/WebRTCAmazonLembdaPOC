"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var requests_service_1 = require("../services/requests.service");
var platform_browser_1 = require("@angular/platform-browser");
var PictureComponent = /** @class */ (function () {
    function PictureComponent(requestsService, router, titleService) {
        this.requestsService = requestsService;
        this.router = router;
        this.titleService = titleService;
    }
    ;
    PictureComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Upload Picture');
    };
    PictureComponent.prototype.capture = function () {
        var video = document.getElementsByTagName('video')[0];
        var canvas = document.getElementsByTagName('canvas')[0];
        if (video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
        }
    };
    PictureComponent.prototype.uploadToServer = function () {
        console.log('uploda to server');
    };
    PictureComponent = __decorate([
        core_1.Component({
            selector: 'picture-component',
            templateUrl: '../templates/picture.template.html',
            styleUrls: ['../styles/picture.style.css']
        }),
        __metadata("design:paramtypes", [requests_service_1.RequestsService,
            router_1.Router,
            platform_browser_1.Title])
    ], PictureComponent);
    return PictureComponent;
}());
exports.PictureComponent = PictureComponent;
//# sourceMappingURL=picture.component.js.map