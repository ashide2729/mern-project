const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weatherSchema = new Schema(
    {
    city: { type: String, required: true, trim: true},
    weather: { type: String },
    temp: { type: Number },
    date: { type: Date },
    }, 
    {    
    timestamps: true, 
    }
);

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;