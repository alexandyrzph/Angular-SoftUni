import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemesDetailsPageComponent } from './themes-details-page/themes-details-page.component';
import { ThemesNewPageComponent } from './themes-new-page/themes-new-page.component';

@NgModule({
    declarations: [
        AsideComponent,
        PostListComponent,
        ThemeListComponent,
        ThemeListItemComponent,
        ThemesPageComponent,
        ThemesDetailsPageComponent,
        ThemesNewPageComponent
    ],
    imports: [
        CommonModule,
        ThemesRoutingModule,
        SharedModule
    ],
    exports: []
})
export class ThemesModule { }
