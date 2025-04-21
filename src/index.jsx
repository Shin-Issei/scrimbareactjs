// Why the hell am I making and remaking the same bullshit over and over again?????

import { createRoot } from "react-dom/client";
import reactLogo from "../src/react-logo.png"
import "../src/index.css"
const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <img id="logo" src={reactLogo}></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was First realeased in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Maintained by Meta</li>
            <li>Powers a lot of apps</li>
        </ul>
    </div>
)