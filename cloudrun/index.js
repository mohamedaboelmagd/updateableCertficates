const express = require("express");
const app = express();

app.post("/email", (req, res) => {
  try {
    const { request } = req.body;
    const { items } = JSON.parse(request);
    for (const item of items) {
      // create email object
      // use send email function
    }

    const target = process.env.TARGET || "World";
    res.status(200).send();
  } catch (error) {console.error(error)
res.status(400).send()}
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
