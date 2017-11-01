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
var _ = require("lodash");
var requests_service_1 = require("../services/requests.service");
var platform_browser_1 = require("@angular/platform-browser");
var request_urls_constants_1 = require("../configuration/request-urls-constants");
var MainRequestComponent = /** @class */ (function () {
    function MainRequestComponent(requestsService, router, titleService) {
        this.requestsService = requestsService;
        this.router = router;
        this.titleService = titleService;
        this.requestJson = '{"SourceURL" : "https://s3-eu-west-1.amazonaws.com/s3vmmtest/images/rz/rz-passport.png","OCRType" : "PASSPORT"}'; // {"SourceURL" : "https://s3-eu-west-1.amazonaws.com/s3vmmtest/images/rz/rz-passport.png","OCRType" : "PASSPORT"}
    }
    ;
    MainRequestComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('VMME Dashboard');
    };
    MainRequestComponent.prototype.doRequest = function (form) {
        var _this = this;
        _.each(form.form.controls, function (control) {
            control['_touched'] = true;
        });
        this.requestsService.postRequestToLambda(request_urls_constants_1.RequestUrlsConstants.VMME_REMOTE_ORC, JSON.parse(this.requestJson))
            .subscribe(function (response) {
            if (response) {
                //console.log(response);
                _this.responseJson = JSON.stringify({ response: response });
                _this.firstName = response['FirstName'];
                _this.lastName = response['LastName'];
            }
            else {
                _this.responseJson = "Error, Lambda not responding";
            }
        }, function (error) {
            console.log(error.json());
        });
        /*
        this.requestsService.postRequestToLambda(
            RequestUrlsConstants.VMME_TEST_POC
            , {
                'param_nm': 'debugging',
                'param_cde': '10001',
            })
            .subscribe(
                (response: Response) => {
                    if (response) {
                        console.log(response);
                        //console.log(response.json());
                        //console.log(response.json() + "");
                        this.responseJson = JSON.stringify({response});

                    } else {
                        this.responseJson = "Error, Lambda not responding";
                    }
                },
                (error: any) => {
                    console.log(error.json());
                });*/
    };
    MainRequestComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: '../templates/main-request.template.html',
            styleUrls: ['../styles/main-request.style.css']
        }),
        __metadata("design:paramtypes", [requests_service_1.RequestsService,
            router_1.Router,
            platform_browser_1.Title])
    ], MainRequestComponent);
    return MainRequestComponent;
}());
exports.MainRequestComponent = MainRequestComponent;
//# sourceMappingURL=main-request.component.js.map