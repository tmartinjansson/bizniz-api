import mongoose from "mongoose";

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
      required: false,
    },
    contractLength: {
      type: String,
      required: false,
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

export default mongoose.model("Company", companySchema);