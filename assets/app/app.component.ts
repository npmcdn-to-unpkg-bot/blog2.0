import { Component } from '@angular/core';


export class BlogPost {
    id: number;
    heading: string;
    subheading: string;
    content: string;
    author: string;
    datePosted: string;
}

@Component({
    selector: 'my-app',
    template: ` 
 
        <header class="intro-header" style="background-image: url('images/lake.jpg')">
        <div class="container">
            <div class="row">
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a >Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="site-heading">
                        <h2>{{title}}</h2>
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
            </li>
         </ul>
     </div>  
     <hr>  
 
        
        
         <div *ngIf="selectedBlogPost" class="fullPost">
             <h2>{{selectedBlogPost.heading}}</h2>
             <h3>{{selectedBlogPost.subheading}}</h3>
             <p>{{selectedBlogPost.content}}</p>
         </div>
    `,
    styles:[`
    .fullPost {
        margin-left: auto;
        margin-right: auto;
        
    }
    header {
        max-height: 500px;
    }
    
    
    #main-title {
      font-size: 600%;
      margin-bottom: 150px;
    }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .posts {
    margin-left: auto;
    margin-right: auto;
    
    list-style-type: none;
    padding: 20px;
    width: 500px;
    text-align: center;
  }
  .posts li {
    cursor: pointer;
    
  }
  .posts li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .posts li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }

  
`]
})
export class AppComponent {

    visible: boolean = true;

    toggle() {
        this.visible = !this.visible;
    }

    title = "Grady's Blog Posts";
    subtitle = "Stumbling to success"

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