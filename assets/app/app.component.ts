import { Component } from '@angular/core';
import {FooterComponent} from "./footer.component";
import {ContentComponent} from "./content.component";

@Component({
    selector: 'my-app',
    template: ` 
 
       <my-content></my-content>
        
         <my-footer></my-footer>
    `,
    directives: [ContentComponent,FooterComponent]
})
export class AppComponent { }

    