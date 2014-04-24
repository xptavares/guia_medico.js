var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + "/public"));

var server = http.createServer(app).listen(3000, function(){
  console.log("Guia server listening on port " + 3000);
});

app.get('/menus', function(req, res){
	res.json([{'id': 1, 'name': '11111111'}, {'id': 2,'name': '22222222'}, {'id': 3,'name': '333333'}]);
});

app.get('/result/:id',  function(req, res){
	switch(req.params.id) {
		case '1':
		  res.json({'text': 'text 1 text 1 text 1 text 1 text 1 text 1 text 1'});
		  break;
		case '2':
		   res.json({'text': 'text 2 text 2 text 2 text 2 text 2 text 2 text 2'});
		  break;
		default:
		   res.json({'text': 'text  text  text  text  text  text  text '});
	}
});