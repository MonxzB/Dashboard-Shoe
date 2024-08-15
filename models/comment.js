const mongoose = require("../common/database")();
const commentSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
    },
    prd_id:{
        type: mongoose.Types.ObjectId,
        ref: "Product",
        default: null,
    },
    body:{
        type: String,
        require: true,
    },
    full_name:{
        type: String,
        require: true,
    },

}, {
    timestamps: true,
})

const CommentModel = mongoose.model("Comment", commentSchema);
module.exports = CommentModel;