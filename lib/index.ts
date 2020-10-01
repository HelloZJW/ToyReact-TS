import {VNode} from "./vnode";

function render(vnode: VNode, container: HTMLElement) {
    container.innerHTML = '';
    _render(vnode, container);
}

function _render(vnode: VNode, container: HTMLElement) {
    if (typeof vnode === 'string') {
        const textNode = document.createTextNode(vnode);
        return container.appendChild(textNode);
    }

    let element = document.createElement(vnode.tagName);
    for (const name in vnode.properties) {
        setAttribute(element, name, vnode.properties[name]);
    }

    vnode.children.forEach(child => _render(child, element));

    return container.appendChild(element);
}

function setAttribute(dom: HTMLElement, name: string, value: any) {
    if (name === 'className') name = 'class';
    if (value) {
        dom.setAttribute(name, value);
    } else {
        dom.removeAttribute(name);
    }
}

function createElement(tagName: any, properties: any, ...children: any[]) {
    return new VNode(tagName, properties, children);
}

export const ToyReact = {
    createElement,
    render
};