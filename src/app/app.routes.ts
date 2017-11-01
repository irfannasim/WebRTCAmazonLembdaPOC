import {RouterModule, Routes} from '@angular/router';
import {MainRequestComponent} from './components/main-request.component';
import {PictureComponent} from "./components/picture.component";
import {IndexComponent} from "./components/index.component";

const AppRoutes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'main', component: MainRequestComponent},
    {path: 'picture', component: PictureComponent},

];

export const routes = RouterModule.forRoot(AppRoutes);
