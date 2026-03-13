import { useState } from "react";

export default function Accordion() {
  let [activeHTML, setActiveHTML] = useState(false);
  let [activeCSS, setActiveCSS] = useState(false);
  let [activeJS, setActiveJS] = useState(false);
  return (
    <div>
      <div>
        <div className="title" onClick={() => setActiveHTML(!activeHTML)}>
          HTML{" "}
          <span
            aria-hidden={true}
            className={`accordion-icon ${activeHTML ? "accordion-icon--rotated" : ""}`}
          />
        </div>
        <div className={activeHTML ? "show" : "hide"}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div>
        <div className="title" onClick={() => setActiveCSS(!activeCSS)}>
          CSS{" "}
          <span
            aria-hidden={true}
            className={`accordion-icon ${activeCSS ? "accordion-icon--rotated" : ""}`}
          />
        </div>
        <div className={activeCSS ? "show" : "hide"}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div>
        <div className="title" onClick={() => setActiveJS(!activeJS)}>
          JavaScript{" "}
          <span
            aria-hidden={true}
            className={`accordion-icon ${activeJS ? "accordion-icon--rotated" : ""}`}
          />
        </div>
        <div className={activeJS ? "show" : "hide"}>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}
