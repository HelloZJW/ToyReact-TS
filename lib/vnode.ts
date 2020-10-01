import {HTMLAttributes} from "./types";

export class VNode {
    tagName: string;
    properties: HTMLAttributes;
    children:any[];

    constructor(tagName: string, properties: HTMLAttributes, children:any[]) {
        this.tagName = tagName;
        this.properties = properties;
        this.children = children;
    }
}
