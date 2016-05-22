import {Component} from "@angular/core";
@Component({
    selector: 'my-about',
    template: `
         <header id="top-container" class="intro-header" style="background-image: url('images/lake.jpg')">
            <div class="container">
                <div class="row">
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        
                    </div>
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div class="site-heading">
                            <h2 class="main-title">{{title}}</h2>
                            <hr class="small">
                            <span class="subheading">{{subtitle}}</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `
})

export class AboutComponent {

    title = 'About Page';
    subtitle = 'Some things';
}