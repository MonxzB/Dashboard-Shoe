const mongoose = require("../common/database")();
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    role:{
        type: String,
        require: true,
    },
    full_name:{
        type: String,
        default: null,
    },
}, {
    timestamps: true,
})

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;