import {Component} from "@angular/core";

export class BlogPost {
    id: number;
    heading: string;
    subheading: string;
    content: string;
    author: string;
    datePosted: string;
}

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
     
        <div *ngIf="selectedBlogPost" class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" id="post-body">
            <p>{{selectedBlogPost.content}}</p>
        </div>
       
    `
})
export class ContentComponent {

    title = "Grady's Blog Posts";
    subtitle = "Stumbling to success";

    visible: boolean = true;

    toggle() {
        this.visible = !this.visible;
    }



    blogPosts = BLOGPOSTS;
    selectedBlogPost: BlogPost;


    onSelect(blogPost: BlogPost) {
        this.selectedBlogPost = blogPost;
        this.title = this.selectedBlogPost.heading;
        this.subtitle = this.selectedBlogPost.subheading;

    }


}

var BLOGPOSTS: BlogPost[] = [
    {
        "id": 1,
        "heading": 'An introductory post by a new developer lunging into the world of JS',
        "subheading": 'Side A, song one...AngularJS ',
        "content": 'Start of a really short blog.',
        "author": 'Grady Vickery',
        "datePosted": 'May 11,2016'
    },
    {
        "id": 2,
        "heading":'Title 2',
        "subheading": 'Subheading goes here',
        "content": 'End of the start of a really short blog',
        "author": 'Grady Vickery',
        "datePosted": 'May 12,2016'
    },
    {
        "id": 3,
        "heading": 'Title 3',
        "subheading": 'More text to go here',
        "content": 'Start of a really short blog...more stuff' ,
        "author": 'Grady Vickery',
        "datePosted" :'May 14,2016'
    }


];