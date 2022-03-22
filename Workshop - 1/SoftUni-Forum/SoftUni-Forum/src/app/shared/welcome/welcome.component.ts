import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    isLoggedIn: boolean;

    constructor(private userService: UserService) {
        this.isLoggedIn = userService.isLogged;
    }

    ngOnInit(): void {
    }

}
