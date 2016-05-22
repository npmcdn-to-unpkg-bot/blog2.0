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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n \n       <my-content></my-content>\n        \n         <my-footer></my-footer>\n    ",
            directives: [content_component_1.ContentComponent, footer_component_1.FooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQVlyRDtJQUFBO0lBQTRCLENBQUM7SUFWN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDBGQUtUO1lBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLEVBQUMsa0NBQWUsQ0FBQztTQUNqRCxDQUFDOztvQkFBQTtJQUMwQixtQkFBQztBQUFELENBQTVCLEFBQTZCLElBQUE7QUFBaEIsb0JBQVksZUFBSSxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9mb290ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRlbnRDb21wb25lbnR9IGZyb20gXCIuL2NvbnRlbnQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCBcbiBcbiAgICAgICA8bXktY29udGVudD48L215LWNvbnRlbnQ+XG4gICAgICAgIFxuICAgICAgICAgPG15LWZvb3Rlcj48L215LWZvb3Rlcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDb250ZW50Q29tcG9uZW50LEZvb3RlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuXG4gICAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
