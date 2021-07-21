var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/get", async (req, res) => {
    const snapshot = await db.collection("blog-posts").get();
    const posts = [];
    snapshot.forEach((post) => {
        posts.push({...post.data(), doc_id: post.id});
    });
    res.json(posts);
});

router.post("/add", async (req, res) => {
    const { title, date, content, image, likeCount, comments, ...rest } = req.body;
    const resp = await db.collection("blog-posts").add({
      title,
      date,
      content,
      image,
      likeCount,
      comments
    });
  
    console.log("Added document to blog-posts with ID: ", resp.id);
    res.sendStatus(200);
  });

router.delete("/delete", async (req, res) => {
    const { doc_id, ...rest } = req.body;
    const resp = await db.collection("blog-posts").doc(doc_id).delete();
    console.log("From blog-post, deleted: ", doc_id);
    res.send("Got a DELETE request");
  });

router.put("/update", async (req, res) => {
    const { doc_id, title, date, image, content, likeCount, ...rest } = req.body;
  
    const resp = await db.collection("blog-posts").doc(doc_id).update({
      title: title,
      date: date,
      image: image,
      content: content,
      likeCount: likeCount
    });
    res.send("Got a PUT request to update blog post");
  });
module.exports = router;