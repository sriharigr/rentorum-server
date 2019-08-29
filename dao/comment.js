var mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
const schema = require("../model_schema/comment").schema;
const collection = mongoose.model("comment", schema);

module.exports.save = (data) => {
  return new Promise((resolve, reject) => {
    try {
      let comment = new collection(data);
      comment.save().then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    } catch (thrownError) {
      reject(thrownError);
    }
  })
}
module.exports.update = (commentId, updateQuery) => {
  return new Promise((resolve, reject) => {
    try {
      collection.updateOne({_id: commentId}, updateQuery).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    } catch (thrownError) {
      reject(thrownError);
    }
  });
}