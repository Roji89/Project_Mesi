const { products } = require('./data');

const MongoClient = require('mongodb').MongoClient;
const MONGO_URI = "mongodb://root:example@localhost:27017"

const init = async () => {
  
  MongoClient.connect(MONGO_URI, function(err, db) {
    if (err) throw err;
    const dbo = db.db("test");
    dbo.collection('products').deleteMany({});
    dbo.collection("products").insertMany(products, function(err, res) {
      if (err) throw err;
      console.log(`${products.length} PRODUCTS INSERTED WITH SUCCESS`);
      db.close();
    });
  }); 
};

init();
