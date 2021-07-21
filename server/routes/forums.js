var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/get", async (req, res) => {
    const snapshot = await db.collection("forums").get();
    const threads = [];
    snapshot.forEach((t) => {
        threads.push({...t.data(), doc_id: t.id});
    });
    res.json(threads);
});

router.post("/add", async (req, res) => {
    const { content, date, title, user, timestamp, commentCount, ...rest } = req.body;
    const resp = await db.collection("forums").add({
        content, 
        date, 
        title,
        user,
        timestamp,
        commentCount
    });
  
    console.log("Added document to forums with ID: ", resp.id);
    res.sendStatus(200);
  });


router.delete("/delete", async (req, res) => {
    const doc_id = req.query.forumId
    const resp = await db.collection("forums").doc(doc_id).delete();
    console.log("From forums, deleted: ", doc_id);
    res.send("Got a DELETE request for forums");
});

router.put("/update", async (req, res) => {
    const { doc_id, content, date, title, user, ...rest } = req.body;
    const resp = await db.collection("forums").doc(doc_id).update({
        content: content, 
        date: date,
        title: title, 
        user: user
    });
    console.log("From forums, updated: ", doc_id);
    res.send("Got a put request to update a forum");
});

module.exports = router;