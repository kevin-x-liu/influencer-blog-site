var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/get", async (req, res) => {
    const snapshot = await db.collection("products").get();
    const products = [];
    snapshot.forEach((item) => {
        products.push({...item.data(), doc_id: item.id});
    });
    res.json(products);
});

router.post("/add", async (req, res) => {
    const { title, description, image, price, sizing, ...rest } = req.body;
    const resp = await db.collection("products").add({
      title,
      description,
      image,
      price,
      sizing
    });
  
    console.log("Added document to products with ID: ", resp.id);
    res.sendStatus(200);
  });

router.delete("/delete", async (req, res) => {
    const { doc_id, ...rest } = req.body;
    const resp = await db.collection("products").doc(doc).delete();
    console.log("From products, deleted: ", doc_id);
    res.send("Got a DELETE request for products");
  });  

router.put("/update", async (req, res) => {
    const { doc_id, description, image, price, sizing, title, ...rest } = req.body;
  
    const resp = await db.collection("products").doc(doc_id).update({
      title: title,
      sizing: sizing,
      price: price,
      image: image,
      description: description
    });
    res.send("Got a PUT request to update a product");
  });

module.exports = router;