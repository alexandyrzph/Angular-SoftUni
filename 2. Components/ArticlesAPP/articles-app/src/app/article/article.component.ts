import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent {

    private symbols: number = 250;
    @Input() article: Article;
    @Input() articleDesc: string;
    descToShow: string;
    articleDescLength: number;
    showReadMoreBtn: boolean = true;
    showHideBtn: boolean = false;
    imageIsShow: boolean = false;
    imageButtonTitle: string = 'Show image';

    constructor() {
        this.articleDescLength = 0;
        this.descToShow = '';
    }
}
