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
var footer_component_1 = require("./footer.component");
var content_component_1 = require("./content.component");
var router_1 = require("@angular/router");
var about_component_1 = require("./about.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.goBack = function () {
        window.location.reload(true);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n       \n       <ul class=\"nav navbar-nav navbar-right\">\n            <li ><a class=\"top-links\" [routerLink]=\"['']\" >Home</a></li>\n            <li ><a class=\"top-links\" [routerLink]=\"['about']\" >About</a></li>                    \n        </ul>\n        \n        <router-outlet></router-outlet>\n        \n        <button (click)=\"goBack()\">Back to Main</button>\n       \n        \n         <my-footer></my-footer>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, footer_component_1.FooterComponent],
            providers: [content_component_1.ContentComponent]
        }),
        router_1.Routes([
            { path: '/', component: content_component_1.ContentComponent },
            { path: '/about', component: about_component_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQTBCakQ7SUFBQTtJQUtBLENBQUM7SUFKRyw2QkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTFCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsd2JBYVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBZSxDQUFDO1lBQ2hELFNBQVMsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQ2hDLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztTQUM5QyxDQUFDOztvQkFBQTtJQU1GLG1CQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxvQkFBWSxlQUt4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9mb290ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRlbnRDb21wb25lbnR9IGZyb20gXCIuL2NvbnRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gXCIuL2Fib3V0LmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCBcbiAgICAgICBcbiAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgIDxsaSA+PGEgY2xhc3M9XCJ0b3AtbGlua3NcIiBbcm91dGVyTGlua109XCJbJyddXCIgPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSA+PGEgY2xhc3M9XCJ0b3AtbGlua3NcIiBbcm91dGVyTGlua109XCJbJ2Fib3V0J11cIiA+QWJvdXQ8L2E+PC9saT4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8L3VsPlxuICAgICAgICBcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ29CYWNrKClcIj5CYWNrIHRvIE1haW48L2J1dHRvbj5cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgICA8bXktZm9vdGVyPjwvbXktZm9vdGVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBGb290ZXJDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0NvbnRlbnRDb21wb25lbnRdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcvJywgY29tcG9uZW50OiBDb250ZW50Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgZ29CYWNrKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgIH1cblxufVxuXG4gICAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
