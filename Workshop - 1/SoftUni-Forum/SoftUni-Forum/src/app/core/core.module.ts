import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './user.service';
import { ThemeService } from './theme.service';
import { storageServiceProvider } from './storage.service';
import { PostService } from './post.service';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        UserService,
        ThemeService,
        storageServiceProvider,
        PostService
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule { }
