"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
// App Components
var app_component_1 = require("./components/app.component");
var main_request_component_1 = require("./components/main-request.component");
var index_component_1 = require("./components/index.component");
// Errors
var not_found_404_component_1 = require("./components/errors/not-found-404.component");
// Routes
var app_routes_1 = require("./app.routes");
// Services
var window_service_1 = require("./services/window.service");
var requests_service_1 = require("./services/requests.service");
//Constants / Configuration
var app_config_1 = require("./configuration/app.config");
var request_urls_constants_1 = require("./configuration/request-urls-constants");
var picture_component_1 = require("./components/picture.component");
var webcam_component_1 = require("./components/webcam/webcam.component");
// ========================================================================== //
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.prototype.ngOnInit = function () {
    };
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                // Services
                window_service_1.WindowService,
                requests_service_1.RequestsService,
                app_config_1.AppConfig,
                request_urls_constants_1.RequestUrlsConstants,
            ],
            imports: [
                // Modules
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routes_1.routes,
            ],
            declarations: [
                // Third Party Components
                // App Components
                app_component_1.AppComponent,
                main_request_component_1.MainRequestComponent,
                picture_component_1.PictureComponent,
                webcam_component_1.WebCamComponent,
                index_component_1.IndexComponent,
                // Errors
                not_found_404_component_1.NotFound404Component,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map