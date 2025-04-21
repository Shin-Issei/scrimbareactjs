// Why the hell am I making and remaking the same bullshit over and over again?????

import { createRoot } from "react-dom/client";
import reactLogo from "../src/react-logo.png";
const root = createRoot(document.getElementById("root"));
root.render(<Page />);

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} alt="React Logo" width="50vw" />
      <nav>
        <ul className="top-navigation">
          <li>Price</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
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
    </main>
  );
}
function Footer() {
  return <footer>© 2025 Collins All Rights Reserved</footer>;
}

function Page() {
  return (
    // I was so hype about the fragment thing too! :(
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
