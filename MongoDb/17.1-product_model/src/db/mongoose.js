const { mongoose, Types } = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/ProductModel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// require("mongoose-type-url");

// const UrlSchema = new mongoose.Schema({
//   url: {
//     img: mongoose.SchemaTypes.Url,
//   },
// });
const DetailsSchema = mongoose.Schema({
  description: {
    type: String,
    require: true,
    minlength: 10,
  },
  price: {
    type: Number,
    require: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Price must be a positive number");
      }
    },
    discount: {
      type: Number,
      require: false,
      default: 0,
    },
    images: [
      {
        type: mongoose.SchemaTypes.Url,
        validate(value) {
          if (value.length < 2) {
            throw new Error("must include at least two images");
          }
        },
      },
    ],
    phone: {
      type: Number,
      require: true,
      validate(value) {
        if (!value.startsWith(972)) {
          throw new Error("number has to be a valid Israeli phone number");
        }
      },
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
});

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  category: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
  },
  details: DetailsSchema,
});
// validator.isURL

const ProductModel = mongoose.model("Product", ProductSchema);
// const product = new ProductModel({
//   _id: new Types.ObjectId(),
//   name: "computer",
//   category: "elec",
//   isActive: true,
//   details: {
//     description: "jjj ssss jjjdd djjsjs",
//     price: 100,
//     discount: 50,
//     images: [
//       "https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb",
//       "https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb",
//     ],
//     phone: 972052631941,
//   }
// });
const product = new ProductModel({
  _id: new Types.ObjectId(),
  name: "washer",
  category: "elec",
  isActive: false,
  details: {
    description: "jjjrrr ssss jjjdd dwwwwjjsjs",
    price: 200,

    images: [
      "https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb",
      "https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb",
    ],
    phone: 972052631941,
  },
});
// const product = new ProductModel({
//   _id: new Types.ObjectId(),
//   name: "fridge",
//   category: "elec",
//   isActive: true,
//   details: {
//     description: "jjjrrr ssss jjjdd dwwwwjjsjs",
//     price: 200,

//     images: [
//       "https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb",
//       "https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb",
//     ],
//     phone: 972052631941,
//   },
// });

product
  .save()
  .then(() => {
    console.log(product);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
