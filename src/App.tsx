import { useEffect, useState } from "react";
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
          <textarea
            id="editor"
            placeholder="Enter Markdown"
            rows={20}
            cols={100}
          >
            {/* {"# Welcome People"}
            <br />
            {"[Github Profile](https://github.com/TheBharatMishra)"}
            {"![hello](https://source.unsplash.com/featured/300x200)"} */}
          </textarea>
          <button onClick={convertMD}> Convert</button>
        </div>
        <div id="preview">
          <p>Hello</p>
        </div>
      </main>
    </div>
  );
}

export default App;
