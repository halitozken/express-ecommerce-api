import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb Connection Successfull");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDatabase;
