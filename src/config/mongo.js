const { connect } = require("mongoose");

const DB_URI = process.env.DB_URI;

const dbConnect = async () => {
  try {
    await connect(DB_URI);
    console.log("Connected of DB");
  } catch (err) {
    console.error(err);
  }
};

module.exports = dbConnect;
