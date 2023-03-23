const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
     
     name:{
          type: String,
          require: [true ,"Please enter product name"],
          trim: true,
          maxLength: [100, 'product name cant exceed 100 characters']
     },

     price:{
          type: Number,
          require:[true, 'Please enter product price'],
          maxLength: [5, 'product name canr exceed 5 characters'],
          default: 0
     },

     description:{
          type: String,
          require: [true ,""]
     },

     images: [
               {
               image_id: {
                    type: String,
                    required: true
               },
               image_url:{
                    type:String,
                    required: true

               },

               }  
   
     ],

     category:{
          type:String,
          required: [true, 'please select category of products'],

     enum: {
          values: [
               'Bikes',
               'Skateboards',
               'Bike Accessories',
               'Skate Accessories',
               'More'
          ],

          Message: 'please select the correct category for the products'
          }
     },

     stock: {
          type: Number,
          required:[true, 'please select product stock'],
          maxLength: [5 , 'product cant exceed 5 characters'],
          default: 0
     },

     createdAt: {
          type: Date,
          default: Date.now
     }


})

module.exports = mongoose.model('product', productSchema);