var mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
const schema = require("../model_schema/post").schema;
const collection = mongoose.model("posts", schema);

module.exports.save = (data) => {
  return new Promise((resolve, reject) => {
    try {
        console.log('Inside MODEL of POST');
      let post = new collection(data);
      post.save().then((response) => {
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

module.exports.update = (postId, updateQuery) => {
    return new Promise((resolve, reject) => {
      try {
          console.log('Inside MODEL of POST', postId);
        collection.updateOne({_id: ObjectId(postId)}, updateQuery).then((response) => {
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

  //populate -> {path: value, model: value, populate: {path: value, model: value}}
  module.exports.getMany = (query, sortBy) => {
    return new Promise((resolve, reject) => {
      try {
          console.log('Inside MODEL of POST');
        collection.find(query).sort(sortBy).then((response) => {
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

  module.exports.get = (query, populate) => {
    return new Promise((resolve, reject) => {
      try {
          console.log('Inside MODEL of POST');
        collection.find(query).populate(populate).then((response) => {
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