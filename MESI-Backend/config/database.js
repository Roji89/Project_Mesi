const mongoose= require ("mongoose");
const MONGO_URI = process.env.MONGO_URI

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

