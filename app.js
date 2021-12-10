const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors"),
  app = express(),
  appPort = 9090;

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(helmet());
app.use(cors());

app.use("/api", require("./routes"));

app.listen(appPort, () => console.log(`Listening on port: ${appPort}`));
