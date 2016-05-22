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
var blogPost_1 = require("./blogPost");
var blogPost_service_1 = require("./blogPost.service");
var HeaderComponent = (function () {
    function HeaderComponent(blogPostService) {
        this.blogPostService = blogPostService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', blogPost_1.BlogPost)
    ], HeaderComponent.prototype, "blogPost", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n        <header id=\"top-container\" class=\"intro-header\" style=\"background-image: url('images/lake.jpg')\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li><a class=\"top-links\" >Home</a></li>\n                            <li><a class=\"top-links\" >About</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                        <div class=\"site-heading\">\n                            <h2 class=\"main-title\" (whenSelect)=\"title.content= $event\">{{title}}</h2>\n                            <hr class=\"small\">\n                            <span class=\"subheading\">{{subtitle}}</span>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </header>\n    ",
            providers: [blogPost_service_1.BlogPostService]
        }), 
        __metadata('design:paramtypes', [blogPost_service_1.BlogPostService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFDcEMsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUE0Qm5EO0lBR0kseUJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBaENaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxza0NBcUJUO1lBQ0QsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUMvQixDQUFDOzt1QkFBQTtJQVNGLHNCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSx1QkFBZSxrQkFPM0IsQ0FBQSIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jsb2dQb3N0fSBmcm9tIFwiLi9ibG9nUG9zdFwiO1xyXG5pbXBvcnQge0Jsb2dQb3N0U2VydmljZX0gZnJvbSBcIi4vYmxvZ1Bvc3Quc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGhlYWRlciBpZD1cInRvcC1jb250YWluZXJcIiBjbGFzcz1cImludHJvLWhlYWRlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvbGFrZS5qcGcnKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cInRvcC1saW5rc1wiID5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJ0b3AtbGlua3NcIiA+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWFpbi10aXRsZVwiICh3aGVuU2VsZWN0KT1cInRpdGxlLmNvbnRlbnQ9ICRldmVudFwiPnt7dGl0bGV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+e3tzdWJ0aXRsZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW0Jsb2dQb3N0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJsb2dQb3N0U2VydmljZTogQmxvZ1Bvc3RTZXJ2aWNlKSB7fVxyXG4gICAgXHJcbiAgICBASW5wdXQoKVxyXG4gICAgYmxvZ1Bvc3Q6IEJsb2dQb3N0O1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
