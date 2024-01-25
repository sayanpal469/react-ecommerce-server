const app = require("./app");
const connectDb = require("./server");
require("dotenv").config();

connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
