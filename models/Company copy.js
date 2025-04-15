const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contractLevel: {
    type: String,
    required: true,
  },
  contractLength: {
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
  }
},
{
    timestamps: true    //  adds createdAt and updatedAt automatically
}

);

// Make createdAt immutable so it doesn’t change on update
companySchema.path('CreatedAt').immutable(true);

module.exports = mongoose.model('Company', companySchema);
