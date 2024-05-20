const app = require("./app");

const mongoDB = require("mongoose");
console.log("Connecting Mongo");
mongoDB
  .connect(
    "mongodb+srv://balakrishnansiva:siva2024@mongodb.56spkvp.mongodb.net/"
  )
  .then(() => {
    console.log("Connected Mongo");
    app.listen(3007, () => {
      console.log("Server is running on port 3007");
    });
  })
  .catch((error) => {
    console.log(error);
  });
