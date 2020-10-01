function createElement(tagName: any, props: any, ...children: any[]) {
    let element = document.createElement(tagName);
    for (let child of children) {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }
        element.appendChild(child);
    }
    return element;
}

function render(element: any) {
    document.body.append(element);
}

export const ToyReact = {
    createElement,
    render
};