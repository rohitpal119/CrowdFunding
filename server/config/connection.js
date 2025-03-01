// const mongoose = require("mongoose");

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/thegoodnessgift",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//   }
// );

// module.exports = mongoose.connection;

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/crowd", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "❌ MongoDB connection error:"));
db.once("open", () => {
  console.log("✅ MongoDB connected successfully to 'crowd' database!");
});

module.exports = db;

