var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
});

var bt = document.getElementById("submit");

function run() {
  bt.disabled = true;
  let code = editor.getValue();

  axios
    .post("/evaluate", {
      lan: "cpp14",
      program: code,
    })
    .then((res) => {
      alert(res.data);
      bt.disabled = false;
    })
    .catch((err) => {
      alert(err.data);
      bt.disabled = false;
    });
}
