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
var BodyContentComponent = (function () {
    function BodyContentComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', blogPost_1.BlogPost)
    ], BodyContentComponent.prototype, "blogPost", void 0);
    BodyContentComponent = __decorate([
        core_1.Component({
            selector: 'my-body-content',
            template: "\n        <div *ngIf=\"blogPost\" class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\" id=\"post-body\">\n            <p class=\"tab\">{{blogPost.content[0]}}</p>\n            <p class=\"tab\">{{blogPost.content[1]}}</p>\n            <p class=\"tab\">{{blogPost.content[2]}}</p>\n            <p class=\"tab\">{{blogPost.content[3]}}</p>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BodyContentComponent);
    return BodyContentComponent;
}());
exports.BodyContentComponent = BodyContentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZHktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFlcEM7SUFBQTtJQUtBLENBQUM7SUFKRztRQUFDLFlBQUssRUFBRTs7MERBQUE7SUFiWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxnWEFPVDtTQUNKLENBQUM7OzRCQUFBO0lBT0YsMkJBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLDRCQUFvQix1QkFLaEMsQ0FBQSIsImZpbGUiOiJib2R5LWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jsb2dQb3N0fSBmcm9tIFwiLi9ibG9nUG9zdFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1ib2R5LWNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiYmxvZ1Bvc3RcIiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCIgaWQ9XCJwb3N0LWJvZHlcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJcIj57e2Jsb2dQb3N0LmNvbnRlbnRbMF19fTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJcIj57e2Jsb2dQb3N0LmNvbnRlbnRbMV19fTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJcIj57e2Jsb2dQb3N0LmNvbnRlbnRbMl19fTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJcIj57e2Jsb2dQb3N0LmNvbnRlbnRbM119fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2R5Q29udGVudENvbXBvbmVudHtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBibG9nUG9zdDogQmxvZ1Bvc3Q7XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
