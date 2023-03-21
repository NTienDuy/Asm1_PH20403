import { Mongoose } from "mongoose";

const productSchema = new Mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});
export default Mongoose.models("Product", productSchema);
