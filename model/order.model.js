const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  items: {
    type: [Schema.Types.Mixed],
    required: true,
  },
  totalAmount: {
    type: Number,
  },
  totalItems: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  paymentMethod: { type: String, default: "pending" },
  selectedAddress: { type: Schema.Types.Mixed, required: true },
  status: { type: String, default: "pending" },
});

const virtualId = orderSchema.virtual("id");
virtualId.get(function () {
  return this._id;
});

orderSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
