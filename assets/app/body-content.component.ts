import {Component, Input} from "@angular/core";
import {BlogPost} from "./blogPost";


@Component({
    selector: 'my-body-content',
    template: `
        <div *ngIf="blogPost" class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" id="post-body">
            <p class="tab">{{blogPost.content[0]}}</p>
            <p class="tab">{{blogPost.content[1]}}</p>
            <p class="tab">{{blogPost.content[2]}}</p>
            <p class="tab">{{blogPost.content[3]}}</p>
        </div>
    `
})

export class BodyContentComponent{
    @Input()
    blogPost: BlogPost;


}