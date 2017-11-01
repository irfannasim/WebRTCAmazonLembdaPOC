"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var main_request_component_1 = require("./components/main-request.component");
var picture_component_1 = require("./components/picture.component");
var index_component_1 = require("./components/index.component");
var AppRoutes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'main', component: main_request_component_1.MainRequestComponent },
    { path: 'picture', component: picture_component_1.PictureComponent },
];
exports.routes = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routes.js.map