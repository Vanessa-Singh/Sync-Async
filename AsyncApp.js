var http = require('http'); //var http = require('htt');
var myname = function(){ //function was misspelled. 
  console.log("Here is my IP address");
}
function callHttpbi() {
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);
      myips = result.origin;
      resolve()
     });
     }
    );
});

let result = await promise;
result;
}
async function executeAsyncTask(){ //missing async function
  const valueA = await callHttpbin()
  const valueB = myname();
  console.log(valueB+" "+valueA)
 } //Missing ending curly bracket
// Output Here is my IP address 149.24.160.1, 149.24.160.1