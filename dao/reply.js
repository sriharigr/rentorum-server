var mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
const schema = require("../model_schema/reply").schema;
const collection = mongoose.model("reply", schema);

module.exports.save = (data) => {
  return new Promise((resolve, reject) => {
    try {
      let reply = new collection(data);
      reply.save().then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    } catch (thrownError) {
      reject(thrownError);
    }
  })
}



