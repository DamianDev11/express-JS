import mongoose from "mongoose";

const connectToDb = () =>
  mongoose.connect(
    `mongodb://${process.env.atlasUser}:${process.env.atlasPassword}@ac-1vyysr5-shard-00-00.mn31dle.mongodb.net:27017,ac-1vyysr5-shard-00-01.mn31dle.mongodb.net:27017,ac-1vyysr5-shard-00-02.mn31dle.mongodb.net:27017/?ssl=true&replicaSet=atlas-svrgh4-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

export default connectToDb;
