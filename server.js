const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

function ensureSecure(req, res, next){
  if(req.secure){
    return next();
  };
  res.redirect('https://' + req.hostname + req.url);
}

app.use(express.static(path.join(__dirname, "build"), {
  setHeaders: (res, path) => {
    if (path.endsWith(".html")) {
      res.setHeader("Cache-Control", "max-age=31536000");
    }
  },
}));

app.all('*', ensureSecure);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT);
