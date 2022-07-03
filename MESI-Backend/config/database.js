const mongoose= require ("mongoose");
//const MONGO_URI = process.env.MONGO_URI
const MONGO_URI = "mongodb+srv://anbar27:tULh1bG9dIe5tT2N@cluster0.scr8a.mongodb.net/?retryWrites=true&w=majority"

exports.connect = () =>  {

  return mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("connected to MongoDB"))
    .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
};

