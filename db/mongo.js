const mongoose = require("mongoose");

module.exports.connect = () => {
    console.log('Intialised MongoDB Connection');
    return new Promise((resolve, reject)=>{
        try{
            mongoose.connect('mongodb://127.0.0.1:27017/rentorum', { useNewUrlParser: true }, (error) => {
                if (error) {
                    console.log('Failed to Connect to MongoDB because ', JSON.stringify(error));
                    reject(error);
                } else {
                    console.log('Connection Successfully Carried Out to MongoDB');
                    resolve("Connected to MongoDB");
                }
            }); 
       
        } catch (error){ 
            console.log('Failed to Connect to MongoDB');
            reject(error);
        }
    });
    
}

