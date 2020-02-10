const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://todouser:mudar123@ds119772.mlab.com:19772/todo-app');