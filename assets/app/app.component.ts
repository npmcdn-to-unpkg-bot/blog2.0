import { Component } from '@angular/core';
import {FooterComponent} from "./footer.component";
import {ContentComponent} from "./content.component";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {AboutComponent} from "./about.component";


@Component({
    selector: 'my-app',
    template: ` 
       
       <ul class="nav navbar-nav navbar-right">
            <li ><a class="top-links" [routerLink]="['']" >Home</a></li>
            <li ><a class="top-links" [routerLink]="['about']" >About</a></li>                    
        </ul>
        
        <router-outlet></router-outlet>
        
        <button (click)="goBack()">Back to Main</button>
       
        
         <my-footer></my-footer>
    `,
    directives: [ROUTER_DIRECTIVES, FooterComponent],
    providers: [ContentComponent]
})
@Routes([
    {path: '/', component: ContentComponent},
    {path: '/about', component: AboutComponent}
])
export class AppComponent {
    goBack() {
        window.location.reload(true);
    }

}

    