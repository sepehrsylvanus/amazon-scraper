import mongoose from "mongoose";
import { truncate } from "node:fs/promises";

const productSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
    },
    currency: {
      type: String,
      required: truncate,
    },
    image: {
      type: String,
      required: truncate,
    },
    title: {
      type: String,
      required: truncate,
    },
    currentPrice: {
      type: Number,
      required: truncate,
    },
    originalPrice: {
      type: Number,
      required: truncate,
    },
    priceHistory: [
      {
        price: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    lowestPrice: {
      type: Number,
    },
    highestPrice: {
      type: Number,
    },
    averagePrice: {
      type: Number,
    },
    discountRate: {
      type: Number,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    reviewCount: {
      type: Number,
    },
    isOutOfStock: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        email: {
          type: String,
          required: true,
        },
      },
    ],
    default: [],
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
