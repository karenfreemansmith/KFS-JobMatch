var views = require("./views.js");
var html='"Content-Type": "text/html"';


function front(request, response) {
  if(request.url === "/") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("front", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

module.exports.front = front;
