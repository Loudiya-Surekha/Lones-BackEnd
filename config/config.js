require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    TWILIO_SID: process.env.TWILIO_SID,
    TWILIO_TOKEN: process.env.TWILIO_TOKEN,
    TWILIO_PHONE: process.env.TWILIO_PHONE,
};
