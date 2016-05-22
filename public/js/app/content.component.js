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
var body_content_component_1 = require("./body-content.component");
var blogPost_service_1 = require('./blogPost.service');
var router_1 = require("@angular/router");
var ContentComponent = (function () {
    function ContentComponent(blogPostService) {
        this.blogPostService = blogPostService;
        this.title = "Grady's Blog Posts";
        this.subtitle = "Stumbling to success";
        this.visible = true;
    }
    ContentComponent.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    ContentComponent.prototype.getBlogPosts = function () {
        var _this = this;
        this.blogPostService.getBlogPosts().then(function (blogPosts) { return _this.blogPosts = blogPosts; });
    };
    ContentComponent.prototype.ngOnInit = function () {
        this.getBlogPosts();
    };
    ContentComponent.prototype.onSelect = function (blogPost) {
        this.selectedBlogPost = blogPost;
        this.title = this.selectedBlogPost.heading;
        this.subtitle = this.selectedBlogPost.subheading;
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: "my-content",
            template: "\n         \n         <header id=\"top-container\" class=\"intro-header\" style=\"background-image: url('images/lake.jpg')\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                        \n                    </div>\n                    <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                        <div class=\"site-heading\">\n                            <h2 class=\"main-title\">{{title}}</h2>\n                            <hr class=\"small\">\n                            <span class=\"subheading\">{{subtitle}}</span>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </header>\n    \n        <div class=\"post-preview\" [hidden] = \"!visible\">\n            <ul class=\"posts\">\n                <li *ngFor=\"let blogPost of blogPosts\"\n                    [class.selected]=\"blogPost === selectedBlogPost\"\n                    (click)=\"onSelect(blogPost)\" (click) =\"toggle()\">\n                    <h2 class=\"post-title\">{{blogPost.heading}}</h2>\n                    <h3 class=\"post-subtitle\">{{blogPost.subheading}}</h3>\n                    <hr class=\"large\">\n                </li>\n            </ul>\n        </div>  \n     \n        <my-body-content [blogPost]=\"selectedBlogPost\"></my-body-content>\n       \n    ",
            directives: [body_content_component_1.BodyContentComponent, router_1.ROUTER_DIRECTIVES],
            providers: [blogPost_service_1.BlogPostService]
        }), 
        __metadata('design:paramtypes', [blogPost_service_1.BlogPostService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsdUNBQW1DLDBCQUEwQixDQUFDLENBQUE7QUFDOUQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsdUJBQWlDLGlCQUFpQixDQUFDLENBQUE7QUE4Q25EO0lBZ0JJLDBCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFkcEQsVUFBSyxHQUFHLG9CQUFvQixDQUFDO1FBQzdCLGFBQVEsR0FBRyxzQkFBc0IsQ0FBQztRQUVsQyxZQUFPLEdBQVksSUFBSSxDQUFDO0lBVytCLENBQUM7SUFUeEQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFTRCx1Q0FBWSxHQUFaO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxRQUFrQjtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7SUFFckQsQ0FBQztJQXpFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsKzlDQWtDVDtZQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFDLDBCQUFpQixDQUFDO1lBQ3BELFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7U0FDL0IsQ0FBQzs7d0JBQUE7SUFxQ0YsdUJBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLHdCQUFnQixtQkFrQzVCLENBQUEiLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jsb2dQb3N0fSBmcm9tIFwiLi9ibG9nUG9zdFwiO1xyXG5pbXBvcnQge0JvZHlDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi9ib2R5LWNvbnRlbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QmxvZ1Bvc3RTZXJ2aWNlfSBmcm9tICcuL2Jsb2dQb3N0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWNvbnRlbnRcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8aGVhZGVyIGlkPVwidG9wLWNvbnRhaW5lclwiIGNsYXNzPVwiaW50cm8taGVhZGVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9sYWtlLmpwZycpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTIgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtYWluLXRpdGxlXCI+e3t0aXRsZX19PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1YmhlYWRpbmdcIj57e3N1YnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdC1wcmV2aWV3XCIgW2hpZGRlbl0gPSBcIiF2aXNpYmxlXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvc3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGJsb2dQb3N0IG9mIGJsb2dQb3N0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImJsb2dQb3N0ID09PSBzZWxlY3RlZEJsb2dQb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoYmxvZ1Bvc3QpXCIgKGNsaWNrKSA9XCJ0b2dnbGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBvc3QtdGl0bGVcIj57e2Jsb2dQb3N0LmhlYWRpbmd9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicG9zdC1zdWJ0aXRsZVwiPnt7YmxvZ1Bvc3Quc3ViaGVhZGluZ319PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgIFxyXG4gICAgICAgIDxteS1ib2R5LWNvbnRlbnQgW2Jsb2dQb3N0XT1cInNlbGVjdGVkQmxvZ1Bvc3RcIj48L215LWJvZHktY29udGVudD5cclxuICAgICAgIFxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtCb2R5Q29udGVudENvbXBvbmVudCxST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nUG9zdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHRpdGxlID0gXCJHcmFkeSdzIEJsb2cgUG9zdHNcIjtcclxuICAgIHN1YnRpdGxlID0gXCJTdHVtYmxpbmcgdG8gc3VjY2Vzc1wiO1xyXG5cclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYmxvZ1Bvc3RzOiBCbG9nUG9zdFtdO1xyXG4gICAgc2VsZWN0ZWRCbG9nUG9zdDogQmxvZ1Bvc3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBibG9nUG9zdFNlcnZpY2U6IEJsb2dQb3N0U2VydmljZSkge31cclxuXHJcbiAgICBnZXRCbG9nUG9zdHMoKSB7XHJcbiAgICAgICAgdGhpcy5ibG9nUG9zdFNlcnZpY2UuZ2V0QmxvZ1Bvc3RzKCkudGhlbihibG9nUG9zdHMgPT4gdGhpcy5ibG9nUG9zdHMgPSBibG9nUG9zdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QmxvZ1Bvc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoYmxvZ1Bvc3Q6IEJsb2dQb3N0KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJsb2dQb3N0ID0gYmxvZ1Bvc3Q7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuc2VsZWN0ZWRCbG9nUG9zdC5oZWFkaW5nO1xyXG4gICAgICAgIHRoaXMuc3VidGl0bGUgPSB0aGlzLnNlbGVjdGVkQmxvZ1Bvc3Quc3ViaGVhZGluZztcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
