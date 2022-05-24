require("dotenv").config();
const { products, users } = require("./data");
const MongoClient = require("mongodb").MongoClient;

const init = async () => {
  MongoClient.connect(process.env.MONGO_URI, function (err, db) {
    if (err) throw err;

    // Reset database
    const dbo = db.db("test");

    dbo.collection("products").deleteMany({});

    dbo.collection("products").insertMany(products, function (err, res) {
      if (err) throw err;

      console.log(`${products.length} PRODUCTS INSERTED WITH SUCCESS`);
    });

    dbo.collection("users").deleteMany({});

    dbo.collection("users").insertMany(users, function (err, res) {
      if (err) throw err;

      console.log(`${users.length} USERS INSERTED WITH SUCCESS`);
      db.close();
    });

  });
};

init();
