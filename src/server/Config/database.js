const mongoose = require("mongoose");

const configuredb = () => {
  mongoose
    .connect("mongodb://localhost:27017/app-database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log(" server connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = configuredb;