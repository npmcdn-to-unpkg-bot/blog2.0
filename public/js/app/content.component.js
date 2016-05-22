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
            template: "\n         <header id=\"top-container\" class=\"intro-header\" style=\"background-image: url('images/lake.jpg')\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li><a class=\"top-links\">Home</a></li>\n                            <li><a class=\"top-links\" href=\"#\">About</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                        <div class=\"site-heading\">\n                            <h2 class=\"main-title\">{{title}}</h2>\n                            <hr class=\"small\">\n                            <span class=\"subheading\">{{subtitle}}</span>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </header>\n    \n        <div class=\"post-preview\" [hidden] = \"!visible\">\n            <ul class=\"posts\">\n                <li *ngFor=\"let blogPost of blogPosts\"\n                    [class.selected]=\"blogPost === selectedBlogPost\"\n                    (click)=\"onSelect(blogPost)\" (click) =\"toggle()\">\n                    <h2 class=\"post-title\">{{blogPost.heading}}</h2>\n                    <h3 class=\"post-subtitle\">{{blogPost.subheading}}</h3>\n                    <hr class=\"large\">\n                </li>\n            </ul>\n        </div>  \n     \n        <my-body-content [blogPost]=\"selectedBlogPost\"></my-body-content>\n       \n    ",
            directives: [body_content_component_1.BodyContentComponent],
            providers: [blogPost_service_1.BlogPostService]
        }), 
        __metadata('design:paramtypes', [blogPost_service_1.BlogPostService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsdUNBQW1DLDBCQUEwQixDQUFDLENBQUE7QUFDOUQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUE4Q25EO0lBZ0JJLDBCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFkcEQsVUFBSyxHQUFHLG9CQUFvQixDQUFDO1FBQzdCLGFBQVEsR0FBRyxzQkFBc0IsQ0FBQztRQUVsQyxZQUFPLEdBQVksSUFBSSxDQUFDO0lBVytCLENBQUM7SUFUeEQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFTRCx1Q0FBWSxHQUFaO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxRQUFrQjtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7SUFFckQsQ0FBQztJQXpFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUscXJEQW9DVDtZQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7U0FDL0IsQ0FBQzs7d0JBQUE7SUFtQ0YsdUJBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLHdCQUFnQixtQkFrQzVCLENBQUEiLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jsb2dQb3N0fSBmcm9tIFwiLi9ibG9nUG9zdFwiO1xyXG5pbXBvcnQge0JvZHlDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi9ib2R5LWNvbnRlbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QmxvZ1Bvc3RTZXJ2aWNlfSBmcm9tICcuL2Jsb2dQb3N0LnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWNvbnRlbnRcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgIDxoZWFkZXIgaWQ9XCJ0b3AtY29udGFpbmVyXCIgY2xhc3M9XCJpbnRyby1oZWFkZXJcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2xha2UuanBnJylcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJ0b3AtbGlua3NcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJ0b3AtbGlua3NcIiBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1haW4tdGl0bGVcIj57e3RpdGxlfX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ViaGVhZGluZ1wiPnt7c3VidGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0LXByZXZpZXdcIiBbaGlkZGVuXSA9IFwiIXZpc2libGVcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicG9zdHNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYmxvZ1Bvc3Qgb2YgYmxvZ1Bvc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiYmxvZ1Bvc3QgPT09IHNlbGVjdGVkQmxvZ1Bvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdChibG9nUG9zdClcIiAoY2xpY2spID1cInRvZ2dsZSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicG9zdC10aXRsZVwiPnt7YmxvZ1Bvc3QuaGVhZGluZ319PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwb3N0LXN1YnRpdGxlXCI+e3tibG9nUG9zdC5zdWJoZWFkaW5nfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgXHJcbiAgICAgICAgPG15LWJvZHktY29udGVudCBbYmxvZ1Bvc3RdPVwic2VsZWN0ZWRCbG9nUG9zdFwiPjwvbXktYm9keS1jb250ZW50PlxyXG4gICAgICAgXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0JvZHlDb250ZW50Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0Jsb2dQb3N0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHRpdGxlID0gXCJHcmFkeSdzIEJsb2cgUG9zdHNcIjtcclxuICAgIHN1YnRpdGxlID0gXCJTdHVtYmxpbmcgdG8gc3VjY2Vzc1wiO1xyXG5cclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYmxvZ1Bvc3RzOiBCbG9nUG9zdFtdO1xyXG4gICAgc2VsZWN0ZWRCbG9nUG9zdDogQmxvZ1Bvc3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBibG9nUG9zdFNlcnZpY2U6IEJsb2dQb3N0U2VydmljZSkge31cclxuXHJcbiAgICBnZXRCbG9nUG9zdHMoKSB7XHJcbiAgICAgICAgdGhpcy5ibG9nUG9zdFNlcnZpY2UuZ2V0QmxvZ1Bvc3RzKCkudGhlbihibG9nUG9zdHMgPT4gdGhpcy5ibG9nUG9zdHMgPSBibG9nUG9zdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QmxvZ1Bvc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoYmxvZ1Bvc3Q6IEJsb2dQb3N0KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJsb2dQb3N0ID0gYmxvZ1Bvc3Q7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuc2VsZWN0ZWRCbG9nUG9zdC5oZWFkaW5nO1xyXG4gICAgICAgIHRoaXMuc3VidGl0bGUgPSB0aGlzLnNlbGVjdGVkQmxvZ1Bvc3Quc3ViaGVhZGluZztcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
