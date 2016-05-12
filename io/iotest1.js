var fs = require('fs');

fs.readFile('../http/httptest1.js', 'utf-8', (err, data) => {
	if (err) {throw err};
	console.log(data);
});

((data) => {console.log(data);})('hello,world');