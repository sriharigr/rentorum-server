var mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
const schema = require("../model_schema/comment").schema;
const collection = mongoose.model("comment", schema);

module.exports.save = (data) => {
  return new Promise((resolve, reject) => {
    try {
      let comment = new collection(data);
      comment.save().then((response) => {
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
module.exports.update = (commentId, updateQuery) => {
  return new Promise((resolve, reject) => {
    try {
        console.log('Inside MODEL of Comment');
      collection.updateOne({_id: commentId}, updateQuery).then((response) => {
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
  });
}