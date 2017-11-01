import {NgModule} from '@angular/core';

@NgModule({
    providers: [/* DONT ADD THE SERVICE HERE */]
})
export class GlobalModule {
    static forRoot() {
        return {
            ngModule: {},//GlobalModule,
            providers: {}// [PermissionsService]
        }
    }
}