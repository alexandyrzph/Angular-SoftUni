import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, ITheme } from 'src/app/core/interfaces';
import { ThemeService } from 'src/app/core/theme.service';
import { UserService } from 'src/app/core/user.service';

@Component({
    selector: 'app-themes-details-page',
    templateUrl: './themes-details-page.component.html',
    styleUrls: ['./themes-details-page.component.css']
})
export class ThemesDetailsPageComponent implements OnInit {

    currentTheme: ITheme;

    canSubscribe: boolean = false;
    isLoggedIn: boolean = this.userService.isLogged;


    constructor(
        private activatedRoute: ActivatedRoute,
        private themeService: ThemeService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id'];
        this.themeService.loadThemeById(id).subscribe(theme => {
            this.currentTheme = theme;
            this.canSubscribe = !this.currentTheme.subscribers.includes('5fa64b162183ce1728ff371d');
        });
    }

    canLike(comment: IPost): boolean {
        return !comment.likes.includes('5fa64b162183ce1728ff371d');
    }

}
