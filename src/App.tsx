import { useState } from "react";
import * as sanitize from "sanitize-html";
// import * as sanitizeHtml from "sanitize-html";

function App() {
  const [mark, setMark] = useState("");

  // document.getElementById("preview").innerHTML = marked.parse(
  //   "# Markedin the browser\n\nRendered by **marked**."
  // );

  return (
    <>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <main className="h-full bg-black flex flex-row m-10">
        <div className="text-white" id="preview">
          {sanitize(marked.parse(mark))}
        </div>
        <textarea
          className="bg-slate-500"
          onChange={(e) => setMark(e.target.value)}
          id="editor"
          rows={20}
          cols={100}
        ></textarea>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    </>
  );
}

export default App;
