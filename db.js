/**
 * 用于连接mongodb数据库.
 */

/**
 * 实例化一个mongoose对象*/
var mongoose = require('mongoose');
var DB_URL = 'mongodb://127.0.0.1:27017/miniprogramm';

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;