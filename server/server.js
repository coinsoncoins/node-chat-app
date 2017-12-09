const path = require('path');
const publicPath = path.join(__dirname, "../public");
const express = require('express');

console.log(__dirname + '/public');
console.log(publicPath);

let app = express();
app.use(express.static(publicPath))

app.listen(3000, () => {
  console.log(`started on port 3000`);
})
