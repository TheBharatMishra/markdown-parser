import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

function App() {
  const [mark, setMark] = useState("");

  const convertMD = () => {
    const getEditor = document.getElementById("editor");
    setMark((getEditor as HTMLInputElement)?.value);

    const purify = DOMPurify();
    const preview = document.getElementById("preview");

    const parser = new DOMParser();
    const el = purify.sanitize(marked.parse(mark));
    const parsing = parser.parseFromString(el, "text/html");
    console.log(el);

    preview?.replaceChild(parsing.documentElement, preview.childNodes[0]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>MarkDown Editor</h1>
      <main style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <textarea id="editor" rows={20} cols={100} />
          <button onClick={convertMD}> Convert</button>
        </div>
        <div id="preview">
          <p></p>
        </div>
      </main>
    </div>
  );
}

export default App;
