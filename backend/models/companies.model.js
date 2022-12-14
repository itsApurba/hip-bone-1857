const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  logo: {
    type: String,
    required: true,
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  about: {
    type: String,
    required: true,
  },
  founded: {
    type: Date,
    default: Date.now,
  },
  companysize: {
    type: Number,
    required: true,
  },
  website: {
    type: String,
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
