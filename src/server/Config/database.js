const mongoose = require("mongoose");

const configuredb = () => {
  mongoose
    .connect("mongodb://localhost:27017/app-database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      // console.log(" server connected to database");
      var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {

    connection.db.collection("app-database", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); // it will print your collection data
        })
    });

});
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = configuredb;