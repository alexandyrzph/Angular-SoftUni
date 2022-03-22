import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
    declarations: [
        AsideComponent,
        PostListComponent,
        ThemeListComponent,
        ThemeListItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AsideComponent,
        PostListComponent,
        ThemeListComponent,
        ThemeListItemComponent
    ]
})
export class ThemesModule { }
