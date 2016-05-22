"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var BlogPost = (function () {
    function BlogPost() {
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;
var ContentComponent = (function () {
    function ContentComponent() {
        this.title = "Grady's Blog Posts";
        this.subtitle = "Stumbling to success";
        this.visible = true;
        this.blogPosts = BLOGPOSTS;
    }
    ContentComponent.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    ContentComponent.prototype.onSelect = function (blogPost) {
        this.selectedBlogPost = blogPost;
        this.title = this.selectedBlogPost.heading;
        this.subtitle = this.selectedBlogPost.subheading;
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: "my-content",
            template: "\n         <header id=\"top-container\" class=\"intro-header\" style=\"background-image: url('images/lake.jpg')\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li><a class=\"top-links\">Home</a></li>\n                            <li><a class=\"top-links\" href=\"#\">About</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                        <div class=\"site-heading\">\n                            <h2 class=\"main-title\">{{title}}</h2>\n                            <hr class=\"small\">\n                            <span class=\"subheading\">{{subtitle}}</span>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </header>\n    \n        <div class=\"post-preview\" [hidden] = \"!visible\">\n            <ul class=\"posts\">\n                <li *ngFor=\"let blogPost of blogPosts\"\n                    [class.selected]=\"blogPost === selectedBlogPost\"\n                    (click)=\"onSelect(blogPost)\" (click) =\"toggle()\">\n                    <h2 class=\"post-title\">{{blogPost.heading}}</h2>\n                    <h3 class=\"post-subtitle\">{{blogPost.subheading}}</h3>\n                    <hr class=\"large\">\n                </li>\n            </ul>\n        </div>  \n     \n        <div *ngIf=\"selectedBlogPost\" class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\" id=\"post-body\">\n            <p>{{selectedBlogPost.content}}</p>\n        </div>\n       \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
var BLOGPOSTS = [
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
        "heading": 'Title 2',
        "subheading": 'Subheading goes here',
        "content": 'End of the start of a really short blog',
        "author": 'Grady Vickery',
        "datePosted": 'May 12,2016'
    },
    {
        "id": 3,
        "heading": 'Title 3',
        "subheading": 'More text to go here',
        "content": 'Start of a really short blog...more stuff',
        "author": 'Grady Vickery',
        "datePosted": 'May 14,2016'
    }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEM7SUFBQTtJQU9BLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxnQkFBUSxXQU9wQixDQUFBO0FBNENEO0lBQUE7UUFFSSxVQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFDN0IsYUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBRWxDLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFReEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQVkxQixDQUFDO0lBbEJHLGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBUUQsbUNBQVEsR0FBUixVQUFTLFFBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztJQUVyRCxDQUFDO0lBaEVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxpeURBc0NUO1NBQ0osQ0FBQzs7d0JBQUE7SUEwQkYsdUJBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHdCQUFnQixtQkF5QjVCLENBQUE7QUFFRCxJQUFJLFNBQVMsR0FBZTtJQUN4QjtRQUNJLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLHNFQUFzRTtRQUNqRixZQUFZLEVBQUUsK0JBQStCO1FBQzdDLFNBQVMsRUFBRSwrQkFBK0I7UUFDMUMsUUFBUSxFQUFFLGVBQWU7UUFDekIsWUFBWSxFQUFFLGFBQWE7S0FDOUI7SUFDRDtRQUNJLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFDLFNBQVM7UUFDbkIsWUFBWSxFQUFFLHNCQUFzQjtRQUNwQyxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFlBQVksRUFBRSxhQUFhO0tBQzlCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFlBQVksRUFBRSxzQkFBc0I7UUFDcEMsU0FBUyxFQUFFLDJDQUEyQztRQUN0RCxRQUFRLEVBQUUsZUFBZTtRQUN6QixZQUFZLEVBQUUsYUFBYTtLQUM5QjtDQUdKLENBQUMiLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9nUG9zdCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaGVhZGluZzogc3RyaW5nO1xyXG4gICAgc3ViaGVhZGluZzogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgYXV0aG9yOiBzdHJpbmc7XHJcbiAgICBkYXRlUG9zdGVkOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktY29udGVudFwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgPGhlYWRlciBpZD1cInRvcC1jb250YWluZXJcIiBjbGFzcz1cImludHJvLWhlYWRlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvbGFrZS5qcGcnKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cInRvcC1saW5rc1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cInRvcC1saW5rc1wiIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWFpbi10aXRsZVwiPnt7dGl0bGV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+e3tzdWJ0aXRsZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvc3QtcHJldmlld1wiIFtoaWRkZW5dID0gXCIhdmlzaWJsZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3N0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBibG9nUG9zdCBvZiBibG9nUG9zdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJibG9nUG9zdCA9PT0gc2VsZWN0ZWRCbG9nUG9zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGJsb2dQb3N0KVwiIChjbGljaykgPVwidG9nZ2xlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwb3N0LXRpdGxlXCI+e3tibG9nUG9zdC5oZWFkaW5nfX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBvc3Qtc3VidGl0bGVcIj57e2Jsb2dQb3N0LnN1YmhlYWRpbmd9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWRCbG9nUG9zdFwiIGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIiBpZD1cInBvc3QtYm9keVwiPlxyXG4gICAgICAgICAgICA8cD57e3NlbGVjdGVkQmxvZ1Bvc3QuY29udGVudH19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29tcG9uZW50IHtcclxuXHJcbiAgICB0aXRsZSA9IFwiR3JhZHkncyBCbG9nIFBvc3RzXCI7XHJcbiAgICBzdWJ0aXRsZSA9IFwiU3R1bWJsaW5nIHRvIHN1Y2Nlc3NcIjtcclxuXHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGJsb2dQb3N0cyA9IEJMT0dQT1NUUztcclxuICAgIHNlbGVjdGVkQmxvZ1Bvc3Q6IEJsb2dQb3N0O1xyXG5cclxuXHJcbiAgICBvblNlbGVjdChibG9nUG9zdDogQmxvZ1Bvc3QpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQmxvZ1Bvc3QgPSBibG9nUG9zdDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5zZWxlY3RlZEJsb2dQb3N0LmhlYWRpbmc7XHJcbiAgICAgICAgdGhpcy5zdWJ0aXRsZSA9IHRoaXMuc2VsZWN0ZWRCbG9nUG9zdC5zdWJoZWFkaW5nO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG52YXIgQkxPR1BPU1RTOiBCbG9nUG9zdFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICBcImhlYWRpbmdcIjogJ0FuIGludHJvZHVjdG9yeSBwb3N0IGJ5IGEgbmV3IGRldmVsb3BlciBsdW5naW5nIGludG8gdGhlIHdvcmxkIG9mIEpTJyxcclxuICAgICAgICBcInN1YmhlYWRpbmdcIjogJ1NpZGUgQSwgc29uZyBvbmUuLi5Bbmd1bGFySlMgJyxcclxuICAgICAgICBcImNvbnRlbnRcIjogJ1N0YXJ0IG9mIGEgcmVhbGx5IHNob3J0IGJsb2cuJyxcclxuICAgICAgICBcImF1dGhvclwiOiAnR3JhZHkgVmlja2VyeScsXHJcbiAgICAgICAgXCJkYXRlUG9zdGVkXCI6ICdNYXkgMTEsMjAxNidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgIFwiaGVhZGluZ1wiOidUaXRsZSAyJyxcclxuICAgICAgICBcInN1YmhlYWRpbmdcIjogJ1N1YmhlYWRpbmcgZ29lcyBoZXJlJyxcclxuICAgICAgICBcImNvbnRlbnRcIjogJ0VuZCBvZiB0aGUgc3RhcnQgb2YgYSByZWFsbHkgc2hvcnQgYmxvZycsXHJcbiAgICAgICAgXCJhdXRob3JcIjogJ0dyYWR5IFZpY2tlcnknLFxyXG4gICAgICAgIFwiZGF0ZVBvc3RlZFwiOiAnTWF5IDEyLDIwMTYnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogMyxcclxuICAgICAgICBcImhlYWRpbmdcIjogJ1RpdGxlIDMnLFxyXG4gICAgICAgIFwic3ViaGVhZGluZ1wiOiAnTW9yZSB0ZXh0IHRvIGdvIGhlcmUnLFxyXG4gICAgICAgIFwiY29udGVudFwiOiAnU3RhcnQgb2YgYSByZWFsbHkgc2hvcnQgYmxvZy4uLm1vcmUgc3R1ZmYnICxcclxuICAgICAgICBcImF1dGhvclwiOiAnR3JhZHkgVmlja2VyeScsXHJcbiAgICAgICAgXCJkYXRlUG9zdGVkXCIgOidNYXkgMTQsMjAxNidcclxuICAgIH1cclxuXHJcblxyXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
