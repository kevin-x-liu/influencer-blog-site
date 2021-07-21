var express = require("express");
var router = express.Router();
const db = require("../firebase");
const admin = require("firebase-admin");

router.get("/get", async (req, res) => {
    const snapshot = await db.collection("comments").get();
    const comments = [];
    snapshot.forEach((c) => {
        comments.push({...c.data(), doc_id: c.id});
    });
    res.json(comments);
});

router.get("/getFromForum", async(req, res)=>{
    try{
        const forumId = req.query.forumId
        const commentsFiltered = await db.collection("comments").where('postID', '==', forumId).get()
        const commentsList = []
        commentsFiltered.forEach((comment)=>{
            commentsList.push({...comment.data(), doc_id:comment.id})
        })
        res.json(commentsList)
    }catch(err){
        console.log("Error in getFromForum: ", err)
        res.sendStatus(500)
    }
})
router.get("/getFromBlog", async(req, res)=>{
    try{
        const postID = req.query.postID
        const commentsFiltered = await db.collection("comments").where('postID', '==', postID).get()
        const commentsList = []
        commentsFiltered.forEach((comment)=>{
            commentsList.push({...comment.data(), doc_id:comment.id})
        })
        res.json(commentsList)
    }catch(err){
        console.log("Error in getFromForum: ", err)
        res.sendStatus(500)
    }
})

router.post("/add", async (req, res) => {
    const { content, date, dislikes, likes, postID, user, timestamp, ...rest } = req.body;
    const forumId = req.query.forumId
    const resp = await db.collection("comments").add({
        content, 
        date, 
        dislikes, 
        likes, 
        postID, 
        user,
        timestamp
    });
    const increment = admin.firestore.FieldValue.increment(1)
    const forumRef = db.collection("forums").doc(forumId)
    forumRef.update({commentCount: increment})
  
    console.log("Added document to comments for forum with ID: ", resp.id);
    res.sendStatus(200);
  });

  //like add, without increment update
router.post("/addToBlog", async (req, res) => {
    const { content, date, dislikes, likes, postID, user, timestamp, ...rest } = req.body;
    const resp = await db.collection("comments").add({
        content, 
        date, 
        dislikes, 
        likes, 
        postID, 
        user,
        timestamp
    });
  
    console.log("Added document to comments for blog with ID: ", resp.id, " and postID = ", postID);
    res.sendStatus(200);
  });


router.delete("/delete", async (req, res) => {
    const doc_id = req.query.commentId
    const resp = await db.collection("comments").doc(doc_id).delete();
    console.log("From comments, deleted: ", doc_id);
    res.send("Got a DELETE request for comments");
});

router.put("/update", async (req, res) => {
    const { doc_id, content, date, dislikes, likes, postID, user, ...rest } = req.body;
    const resp = await db.collection("comments").doc(doc_id).update({
        content: content, 
        date: date, 
        dislikes: dislikes, 
        likes: likes, 
        postID: postID, 
        user: user
    });
  
    res.send("Got a put request to update a comment");
});

module.exports = router;