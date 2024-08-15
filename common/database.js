const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Shoes');
    return mongoose;
}
//tk nào cần connect thì gọi module database này vào