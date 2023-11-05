const mongoose = require("mongoose");
// const mongoURI='mongodb+srv://BunChai:kunal2002@cluster0.fep0vz9.mongodb.net/BunChaiMern?retryWrites=true&w=majority'
const mongoURI =
  "mongodb://BunChai:kunal2002@ac-y3gds1d-shard-00-00.fep0vz9.mongodb.net:27017,ac-y3gds1d-shard-00-01.fep0vz9.mongodb.net:27017,ac-y3gds1d-shard-00-02.fep0vz9.mongodb.net:27017/BunChaiMern?ssl=true&replicaSet=atlas-lcigol-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected ");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategory"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory=catData;
              
            }
          });

          // if(err) console.log(err);
          // else {
          //     global.food_items=data;

          // }
        });
      }
    }
  );
};

module.exports = mongoDB;
