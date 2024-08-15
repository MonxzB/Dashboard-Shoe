const mongoose = require("../common/database")();
const categorySchema = new mongoose.Schema({
    description:{
        type: String,
        default: null,
    },
    title:{
        type: String,
        require: true,
    },
    slug:{
        type: String,
        require: true,
    },
}, {
    timestamps: true,
});
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;