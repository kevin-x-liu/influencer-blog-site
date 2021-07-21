var express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const blogRouter = require("./routes/blogPosts");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const commentsRouter = require("./routes/comments");
const forumsRouter = require("./routes/forums");

var app = express();
app.use(cors());
app.use(express.json());


app.use("/blog", blogRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/comments", commentsRouter);
app.use("/forums", forumsRouter);

app.get("/", (req, res) => {
    res.send('Server is live from influencer project!');
  });

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})