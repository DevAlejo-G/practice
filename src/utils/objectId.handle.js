const mongoose = require("mongoose");

const isObjectId = async (id) => mongoose.Types.ObjectId.isValid(id);

module.exports = { isObjectId };
