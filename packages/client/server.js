const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "build/index.html")));
});

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`UI is running on port ${PORT}`);
});
