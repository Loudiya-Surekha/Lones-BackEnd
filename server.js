const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { PORT, MONGO_URI } = require("./config/config");

const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const interestRoutes = require("./routes/interest.routes");
const loanRoutes = require("./routes/loan.routes");

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/interest", interestRoutes);
app.use("/api/loan", loanRoutes);

// MONGO CONNECTION 
mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("Mongo Error:", err));

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
