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
  var e = document.getElementById("langs");
  var value = e.options[e.selectedIndex].value;
  axios
    .post("/evaluate", {
      lan: value,
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

