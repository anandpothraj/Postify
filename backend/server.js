const express = require("express");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const postRoutes = require("./routes/PostRoutes");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(postRoutes);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT,console.log(`Server started on port ${PORT}`));