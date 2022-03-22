import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guard/auth.guard";
import { ThemesDetailsPageComponent } from "./themes-details-page/themes-details-page.component";
import { ThemesNewPageComponent } from "./themes-new-page/themes-new-page.component";
import { ThemesPageComponent } from "./themes-page/themes-page.component";

const routes: Routes = [
    {
        path: 'themes',
        component: ThemesPageComponent
    },
    {
        path: 'themes/new',
        canActivate: [AuthGuard],
        component: ThemesNewPageComponent
    },
    {
        path: 'themes/:id',
        component: ThemesDetailsPageComponent
    }
];


export const ThemesRoutingModule = RouterModule.forChild(routes);