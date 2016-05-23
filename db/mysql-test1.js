var mysql = require('mysql');
var conn = mysql.createConnection({
	host: '10.1.1.68',
	user: 'canal',
	password: 'canal',
	database: 'hades',
	port: 3306
});
conn.connect();
conn.query('select count(*) from mail_custom', function(err, rows, fields) {
	if (err) {
		throw err;
	}
	console.log(rows[0]);
})
conn.end();