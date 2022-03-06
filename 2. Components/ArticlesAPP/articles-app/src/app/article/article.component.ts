import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent {

    private symbols: number = 250;
    @Input() article!: Article;
    @Input() articleDesc!: string;
    descToShow: string;
    articleDescLength: number;
    showReadMoreBtn: boolean = true;
    showHideBtn: boolean = false;
    imageIsShown: boolean = false;
    imageButtonTitle: string = 'Show image';

    constructor() {
        this.articleDescLength = 0;
        this.descToShow = '';
    }

    readMore(): void {
        this.articleDescLength += this.symbols;
        if (this.articleDescLength >= this.articleDesc.length) {
            this.showHideBtn = true;
            this.showReadMoreBtn = false;
        } else {
            this.descToShow = this.articleDesc.substring(0, this.articleDescLength);
        }
    }

    toggleImage(): void {
        this.imageIsShown = !this.imageIsShown;
        this.imageButtonTitle = this.imageButtonTitle == 'Show image' ? 'Hide image' : 'Show image';
    }

    hideDesc(): void {
        this.descToShow = '';
        this.articleDescLength = 0;
        this.showHideBtn = false;
        this.showReadMoreBtn = true;
    }
}
