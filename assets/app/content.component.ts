import {Component, OnInit} from "@angular/core";
import {BlogPost} from "./blogPost";
import {BodyContentComponent} from "./body-content.component";
import {BlogPostService} from './blogPost.service';



@Component({
    selector: "my-content",
    template: `
         <header id="top-container" class="intro-header" style="background-image: url('images/lake.jpg')">
            <div class="container">
                <div class="row">
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a class="top-links">Home</a></li>
                            <li><a class="top-links" href="#">About</a></li>
                        </ul>
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
    
        <div class="post-preview" [hidden] = "!visible">
            <ul class="posts">
                <li *ngFor="let blogPost of blogPosts"
                    [class.selected]="blogPost === selectedBlogPost"
                    (click)="onSelect(blogPost)" (click) ="toggle()">
                    <h2 class="post-title">{{blogPost.heading}}</h2>
                    <h3 class="post-subtitle">{{blogPost.subheading}}</h3>
                    <hr class="large">
                </li>
            </ul>
        </div>  
     
        <my-body-content [blogPost]="selectedBlogPost"></my-body-content>
       
    `,
    directives: [BodyContentComponent],
    providers: [BlogPostService]
})
export class ContentComponent implements OnInit {

    title = "Grady's Blog Posts";
    subtitle = "Stumbling to success";

    visible: boolean = true;

    toggle() {
        this.visible = !this.visible;
    }



    blogPosts: BlogPost[];
    selectedBlogPost: BlogPost;

    constructor(private blogPostService: BlogPostService) {}

    getBlogPosts() {
        this.blogPostService.getBlogPosts().then(blogPosts => this.blogPosts = blogPosts);
    }

    ngOnInit() {
        this.getBlogPosts();
    }

    onSelect(blogPost: BlogPost) {
        this.selectedBlogPost = blogPost;
        this.title = this.selectedBlogPost.heading;
        this.subtitle = this.selectedBlogPost.subheading;

    }


}

