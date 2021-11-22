import {Component, Input, OnInit} from '@angular/core';
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-post-properties-info',
    templateUrl: './post-properties-info.component.html',
    styleUrls: ['./post-properties-info.component.scss']
})
export class PostPropertiesInfoComponent implements OnInit {
    faCalendarDay = faCalendarDay;
    faUser = faUser;
    faBars = faBars;

    @Input()
    date: string;

    @Input()
    author: string;

    @Input()
    category: string;

    constructor() {
    }

    ngOnInit() {
    }

}
