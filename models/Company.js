const mongoose = require("mongoose");  
const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    contractLevel: {
      type: String,
      required: true,
    },
    contractLength: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true, // ✅ this is supported directly now
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    }
  }
);

// ✅ Automatically update updatedAt on save
companySchema.pre("save", function (next) {
  if (!this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports = mongoose.model("Company", companySchema);