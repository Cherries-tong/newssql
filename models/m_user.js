const db = require('../tools/db_config');


const checkEmail = function(email, callback) {
    const sqlstr = 'SELECT *FROM `users` WHERE email=?';
    db.query(sqlstr, email, (err, data) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, data);
    });
}

exports.checkEmail = checkEmail;