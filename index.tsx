import { ToyReact } from "./lib/index";

let a = <div>
    <span className="red">Hello, </span>
    <span className="blue">World </span>
    !
</div>;
ToyReact.render(a, document.body);