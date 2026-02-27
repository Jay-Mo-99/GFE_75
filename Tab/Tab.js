import { useState } from "react";
export default function Tabs() {
  let [active, setActive] = useState("HTML");
  return (
    <div>
      <div>
        <button
          type="button"
          className={active === "HTML" ? "active" : "btn"}
          onClick={() => setActive("HTML")}
        >
          HTML
        </button>
        <button
          type="button"
          className={active === "CSS" ? "active" : "btn"}
          onClick={() => setActive("CSS")}
        >
          CSS
        </button>
        <button
          type="button"
          className={active === "JS" ? "active" : "btn"}
          onClick={() => setActive("JS")}
        >
          JavaScript
        </button>
      </div>
      <div>
        {active === "HTML" && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {active === "CSS" && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {active === "JS" && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}
