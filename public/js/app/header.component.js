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
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = "Grady's Blog Posts";
        this.subtitle = "Stumbling to success";
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "my-header",
            template: "\n         <header class=\"intro-header\" style=\"background-image: url('images/lake.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a >Home</a></li>\n                        <li><a href=\"#\">About</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                    <div class=\"site-heading\">\n                        <h2>{{title}}</h2>\n                        <hr class=\"small\">\n                        <span class=\"subheading\">{{subtitle}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQXlCeEM7SUFBQTtRQUVJLFVBQUssR0FBRyxvQkFBb0IsQ0FBQztRQUM3QixhQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFFdEMsQ0FBQztJQTdCRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsazNCQW9CVDtTQUNKLENBQUM7O3VCQUFBO0lBTUYsc0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLHVCQUFlLGtCQUszQixDQUFBIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1oZWFkZXJcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJpbnRyby1oZWFkZXJcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2xha2UuanBnJylcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhID5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3t0aXRsZX19PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+e3tzdWJ0aXRsZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG5cclxuICAgIHRpdGxlID0gXCJHcmFkeSdzIEJsb2cgUG9zdHNcIjtcclxuICAgIHN1YnRpdGxlID0gXCJTdHVtYmxpbmcgdG8gc3VjY2Vzc1wiO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
