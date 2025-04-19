// It's really not necessary to rewrite all of this from scratch everytime since generating these things is more important but what ever.

import { createRoot } from "react-dom/client";
import Component from "./newComponent";
const root = createRoot(document.getElementById("root"));
function InLineComponent(){
    return (
        <div>
            An inline component seems obvious now...
            Hello from inline component.
        </div>
    )
}

root.render(
    <>
    <h1>{"I wrote all this out by hand AGIAN! >:("}</h1>
    <p>Well that was easier than I thought.</p>
    <Component/>
    <InLineComponent/>
    </>
)