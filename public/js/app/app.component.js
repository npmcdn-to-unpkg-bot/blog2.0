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
var core_1 = require('@angular/core');
var BlogPost = (function () {
    function BlogPost() {
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;
var AppComponent = (function () {
    function AppComponent() {
        this.visible = true;
        this.title = "Grady's Blog Posts";
        this.subtitle = "Stumbling to success";
        this.blogPosts = BLOGPOSTS;
    }
    AppComponent.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    AppComponent.prototype.onSelect = function (blogPost) {
        this.selectedBlogPost = blogPost;
        this.title = this.selectedBlogPost.heading;
        this.subtitle = this.selectedBlogPost.subheading;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n \n        <header class=\"intro-header\" style=\"background-image: url('images/lake.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a >Home</a></li>\n                        <li><a href=\"#\">About</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                    <div class=\"site-heading\">\n                        <h2>{{title}}</h2>\n                        <hr class=\"small\">\n                        <span class=\"subheading\">{{subtitle}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n        \n        \n        \n    <div class=\"post-preview\" [hidden] = \"!visible\">\n       <ul class=\"posts\">\n            <li *ngFor=\"let blogPost of blogPosts\"\n                [class.selected]=\"blogPost === selectedBlogPost\"\n                (click)=\"onSelect(blogPost)\" (click) =\"toggle()\">\n                <h2 class=\"post-title\">{{blogPost.heading}}</h2>\n                <h3 class=\"post-subtitle\">{{blogPost.subheading}}</h3>\n            </li>\n         </ul>\n     </div>  \n     <hr>  \n \n        \n        \n         <div *ngIf=\"selectedBlogPost\" class=\"fullPost\">\n             <h2>{{selectedBlogPost.heading}}</h2>\n             <h3>{{selectedBlogPost.subheading}}</h3>\n             <p>{{selectedBlogPost.content}}</p>\n         </div>\n    ",
            styles: ["\n    .fullPost {\n        margin-left: auto;\n        margin-right: auto;\n        \n    }\n    header {\n        max-height: 500px;\n    }\n    \n    \n    #main-title {\n      font-size: 600%;\n      margin-bottom: 150px;\n    }\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .posts {\n    margin-left: auto;\n    margin-right: auto;\n    \n    list-style-type: none;\n    padding: 20px;\n    width: 500px;\n    text-align: center;\n  }\n  .posts li {\n    cursor: pointer;\n    \n  }\n  .posts li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .posts li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n\n  \n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUcxQztJQUFBO0lBT0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLGdCQUFRLFdBT3BCLENBQUE7QUE2RkQ7SUFBQTtRQUVJLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFNeEIsVUFBSyxHQUFHLG9CQUFvQixDQUFDO1FBQzdCLGFBQVEsR0FBRyxzQkFBc0IsQ0FBQTtRQUVqQyxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBWTFCLENBQUM7SUFuQkcsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFTRCwrQkFBUSxHQUFSLFVBQVMsUUFBa0I7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBRXJELENBQUM7SUEvR0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJuREEyQ1Q7WUFDRCxNQUFNLEVBQUMsQ0FBQyxxdEJBMkNYLENBQUM7U0FDRCxDQUFDOztvQkFBQTtJQXdCRixtQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2Qlksb0JBQVksZUF1QnhCLENBQUE7QUFFRCxJQUFJLFNBQVMsR0FBZTtJQUN4QjtRQUNJLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLHNFQUFzRTtRQUNqRixZQUFZLEVBQUUsK0JBQStCO1FBQzdDLFNBQVMsRUFBRSwrQkFBK0I7UUFDMUMsUUFBUSxFQUFFLGVBQWU7UUFDekIsWUFBWSxFQUFFLGFBQWE7S0FDOUI7SUFDRDtRQUNJLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFDLFNBQVM7UUFDbkIsWUFBWSxFQUFFLHNCQUFzQjtRQUNwQyxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFlBQVksRUFBRSxhQUFhO0tBQzlCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFlBQVksRUFBRSxzQkFBc0I7UUFDcEMsU0FBUyxFQUFFLDJDQUEyQztRQUN0RCxRQUFRLEVBQUUsZUFBZTtRQUN6QixZQUFZLEVBQUUsYUFBYTtLQUM5QjtDQUdKLENBQUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmV4cG9ydCBjbGFzcyBCbG9nUG9zdCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgc3ViaGVhZGluZzogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICBkYXRlUG9zdGVkOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCBcbiBcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImludHJvLWhlYWRlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvbGFrZS5qcGcnKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSA+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt7dGl0bGV9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+e3tzdWJ0aXRsZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICA8ZGl2IGNsYXNzPVwicG9zdC1wcmV2aWV3XCIgW2hpZGRlbl0gPSBcIiF2aXNpYmxlXCI+XG4gICAgICAgPHVsIGNsYXNzPVwicG9zdHNcIj5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYmxvZ1Bvc3Qgb2YgYmxvZ1Bvc3RzXCJcbiAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiYmxvZ1Bvc3QgPT09IHNlbGVjdGVkQmxvZ1Bvc3RcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdChibG9nUG9zdClcIiAoY2xpY2spID1cInRvZ2dsZSgpXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicG9zdC10aXRsZVwiPnt7YmxvZ1Bvc3QuaGVhZGluZ319PC9oMj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwb3N0LXN1YnRpdGxlXCI+e3tibG9nUG9zdC5zdWJoZWFkaW5nfX08L2gzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgIDwvdWw+XG4gICAgIDwvZGl2PiAgXG4gICAgIDxocj4gIFxuIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWRCbG9nUG9zdFwiIGNsYXNzPVwiZnVsbFBvc3RcIj5cbiAgICAgICAgICAgICA8aDI+e3tzZWxlY3RlZEJsb2dQb3N0LmhlYWRpbmd9fTwvaDI+XG4gICAgICAgICAgICAgPGgzPnt7c2VsZWN0ZWRCbG9nUG9zdC5zdWJoZWFkaW5nfX08L2gzPlxuICAgICAgICAgICAgIDxwPnt7c2VsZWN0ZWRCbG9nUG9zdC5jb250ZW50fX08L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczpbYFxuICAgIC5mdWxsUG9zdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIFxuICAgIH1cbiAgICBoZWFkZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgI21haW4tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiA2MDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gICAgfVxuICAuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnBvc3RzIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucG9zdHMgbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgfVxuICAucG9zdHMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnBvc3RzIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgIGxlZnQ6IC4xZW07XG4gIH1cblxuICBcbmBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgICB9XG5cbiAgICB0aXRsZSA9IFwiR3JhZHkncyBCbG9nIFBvc3RzXCI7XG4gICAgc3VidGl0bGUgPSBcIlN0dW1ibGluZyB0byBzdWNjZXNzXCJcblxuICAgIGJsb2dQb3N0cyA9IEJMT0dQT1NUUztcbiAgICBzZWxlY3RlZEJsb2dQb3N0OiBCbG9nUG9zdDtcblxuXG4gICAgb25TZWxlY3QoYmxvZ1Bvc3Q6IEJsb2dQb3N0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCbG9nUG9zdCA9IGJsb2dQb3N0O1xuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5zZWxlY3RlZEJsb2dQb3N0LmhlYWRpbmc7XG4gICAgICAgIHRoaXMuc3VidGl0bGUgPSB0aGlzLnNlbGVjdGVkQmxvZ1Bvc3Quc3ViaGVhZGluZztcblxuICAgIH1cblxuXG59XG5cbnZhciBCTE9HUE9TVFM6IEJsb2dQb3N0W10gPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgIFwiaGVhZGluZ1wiOiAnQW4gaW50cm9kdWN0b3J5IHBvc3QgYnkgYSBuZXcgZGV2ZWxvcGVyIGx1bmdpbmcgaW50byB0aGUgd29ybGQgb2YgSlMnLFxuICAgICAgICBcInN1YmhlYWRpbmdcIjogJ1NpZGUgQSwgc29uZyBvbmUuLi5Bbmd1bGFySlMgJyxcbiAgICAgICAgXCJjb250ZW50XCI6ICdTdGFydCBvZiBhIHJlYWxseSBzaG9ydCBibG9nLicsXG4gICAgICAgIFwiYXV0aG9yXCI6ICdHcmFkeSBWaWNrZXJ5JyxcbiAgICAgICAgXCJkYXRlUG9zdGVkXCI6ICdNYXkgMTEsMjAxNidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICBcImhlYWRpbmdcIjonVGl0bGUgMicsXG4gICAgICAgIFwic3ViaGVhZGluZ1wiOiAnU3ViaGVhZGluZyBnb2VzIGhlcmUnLFxuICAgICAgICBcImNvbnRlbnRcIjogJ0VuZCBvZiB0aGUgc3RhcnQgb2YgYSByZWFsbHkgc2hvcnQgYmxvZycsXG4gICAgICAgIFwiYXV0aG9yXCI6ICdHcmFkeSBWaWNrZXJ5JyxcbiAgICAgICAgXCJkYXRlUG9zdGVkXCI6ICdNYXkgMTIsMjAxNidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICBcImhlYWRpbmdcIjogJ1RpdGxlIDMnLFxuICAgICAgICBcInN1YmhlYWRpbmdcIjogJ01vcmUgdGV4dCB0byBnbyBoZXJlJyxcbiAgICAgICAgXCJjb250ZW50XCI6ICdTdGFydCBvZiBhIHJlYWxseSBzaG9ydCBibG9nLi4ubW9yZSBzdHVmZicgLFxuICAgICAgICBcImF1dGhvclwiOiAnR3JhZHkgVmlja2VyeScsXG4gICAgICAgIFwiZGF0ZVBvc3RlZFwiIDonTWF5IDE0LDIwMTYnXG4gICAgfVxuXG5cbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
