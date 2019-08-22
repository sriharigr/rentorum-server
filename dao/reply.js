var mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
const schema = require("../model_schema/reply").schema;
const collection = mongoose.model("reply", schema);

module.exports.save = (data) => {
  return new Promise((resolve, reject) => {
    try {
        console.log('Inside MODEL of REPLY');
      let reply = new collection(data);
      reply.save().then((response) => {
        console.log('Response in save() ', JSON.stringify(response));
        resolve(response);
      }).catch((error) => {
        console.log('Error in save() ', JSON.stringify(error));
        reject(error);
      })
    } catch (thrownError) {
      console.log('Thrown Error in save() ', JSON.stringify(thrownError));
      reject(thrownError);
    }
  })
}



