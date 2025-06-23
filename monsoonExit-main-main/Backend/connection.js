const mongoose = require("mongoose");

// MongoDB Connection
mongoose
  .connect("mongodb+srv://libinvarghese412:1Libin@cluster0.stsw4qu.mongodb.net/blogapp") 
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

module.exports = mongoose;