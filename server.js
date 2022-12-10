const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const contactUs = require("./routes/contact");
const auth = require("./routes/auth");
const doctor = require("./routes/doctor");
const config = require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
/* -------------------------------------------------------------------------- */
/*                              CONNECT DATABASE                              */
/* -------------------------------------------------------------------------- */
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    // useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
app.use(cors());
app.use(bodyParser.json());

/* -------------------------------------------------------------------------- */
/*                                   ROUTING                                  */
/* -------------------------------------------------------------------------- */
app.use("/api", contactUs);
app.use("/api", auth);
app.use("/api", doctor);
/* -------------------------------------------------------------------------- */
/*                               CONNECT SERVER                               */
/* -------------------------------------------------------------------------- */
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  app.use(express.static('client/build'));

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}

app.listen(port, () => console.log(`Server running on port ${port}`));
