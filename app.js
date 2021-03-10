var editor = CodeMirror.fromTextArea
        (document.getElementById('editor'),{
            mode:"xml",
            theme:"dracula",
            lineNumbers:true,
            autoCloseTags:true,
            autoCloseBrackets:true,
        });
function myfun() {
    var x = document.getElementById("editor").value;
    
    var program = {
        script : x,
        language: "cpp14",
        versionIndex: "0",
        clientId: "ffcc9ac70fc2f0fc3eb8007dcee87d39",
        clientSecret:"532f62ee3ffa19975288a607368f4211f436ad1641824e788ce9b61d5653fe60"
    };
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=UTF-8';
    axios.post('https://api.jdoodle.com/v1/execute', program,{headers: {"Access-Control-Allow-Origin": "*"}})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}
