from requests_oauthlib import OAuth1;
var request = require('request');

var program = {
    "lang": "PYTHON",
    "source": "print 'Hello World'",
    "input": "",
    "memory_limit": 243232,
    "time_limit": 5,
    "context": {id: 213121},
    "callback": "https://client.com/callback/"
  };
  auth = OAuth1('ba26bc4e72685ddd5bf814e890e774e561795eaf', '7d63736adbf9ff25ef3f0c38ca852aef1108f48f9e5a.api.hackerearth.com')
request({
    url: 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/',
    method: "POST",
    json: program,
    auth:auth

},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});