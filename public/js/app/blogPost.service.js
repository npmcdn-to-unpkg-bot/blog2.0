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
var mock_blogPosts_1 = require('./mock-blogPosts');
var BlogPostService = (function () {
    function BlogPostService() {
    }
    BlogPostService.prototype.getBlogPosts = function () {
        return Promise.resolve(mock_blogPosts_1.BLOGPOSTS);
    };
    BlogPostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BlogPostService);
    return BlogPostService;
}());
exports.BlogPostService = BlogPostService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dQb3N0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QywrQkFBd0Isa0JBQWtCLENBQUMsQ0FBQTtBQUkzQztJQUFBO0lBSUEsQ0FBQztJQUhHLHNDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywwQkFBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUxMO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUFNYixzQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksdUJBQWUsa0JBSTNCLENBQUEiLCJmaWxlIjoiYmxvZ1Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0JMT0dQT1NUU30gZnJvbSAnLi9tb2NrLWJsb2dQb3N0cyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgQmxvZ1Bvc3RTZXJ2aWNlIHtcclxuICAgIGdldEJsb2dQb3N0cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEJMT0dQT1NUUyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
