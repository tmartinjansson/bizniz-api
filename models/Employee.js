const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema(
  {
    surname: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    salary: {
      type: String,
      required: false,
    },
    competence: {
      type: String,
      required: false,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
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
employeeSchema.pre("save", function (next) {
  if (!this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports = mongoose.model("Employee", employeeSchema);