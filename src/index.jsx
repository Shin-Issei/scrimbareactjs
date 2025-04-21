// Why the hell am I making and remaking the same bullshit over and over again?????

import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import reactLogo from "../src/react-logo.png";
import "../src/index.css";
const root = createRoot(document.getElementById("root"));
root.render(<Page />);

function Page() {
  return (
    <Fragment>
      <header>
        <img src={reactLogo} alt="React Logo" width="40px" />
      </header>
      <main>
        <h1>Reasons That You Are Worthy of Love! :D</h1>
        <ul>
          <li>Just about</li>
          <li>Anything</li>
          <li>Would be better than</li>
          <li>Starting over</li>
          <li>again</li>
          <li>and again</li>
          <li>and again</li>
          <li>and again</li>
          <li>and again</li>
          <li>and again</li>
        </ul>
        <footer>© 2025 Collins All Rights Reserved</footer>
      </main>
    </Fragment>
  );
}
