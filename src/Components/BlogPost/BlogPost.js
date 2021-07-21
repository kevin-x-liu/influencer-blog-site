import React from "react";
import ViewPost from "./ViewBlog";
import EditPost from "./EditBlog";
import EditProvider from "./EditContext";

// const props = {
//   title: "Summer Beach Trip",
//   date: "6/5/2021",
//   image:
//     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1201/https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/jay-cee-gXGSp7-KUQQ-unsplash-1201x900.jpg",
//   content:
//     "Turks & Caicos—a chain of 40 islands in the Caribbean—are known for being some of the most beautiful islands in the Caribbean, with white-sand beaches, incredible scuba diving and snorkeling, and of course, delicious seafood. Visit the Island Fish Fry for a true local experience, or try something fancier at one of the many restaurants. Whether you want a low-key getaway on some of the most beautiful beaches in the Caribbean or are looking to pamper yourself for a weekend, Turks and Caicos has something to offer you. Croatia is the one of our favorite summer destinations in Europe. With Mediterranean beaches, historic cities, national parks and tons of opportunities for swimming and enjoying the coastal Mediterranean weather, there’s really no better time to visit Croatia. Plus, its easy entry requirements make it a great European destination to visit in 2021. Dubrovnik, with the imposing and scenic city walls, is Croatia’s most famous city. However, the nearby Split and the quieter, inland capital of Zagreb are definitely worth visiting as well.",
//   likeCount: 169,
//   comments: ["0", "1", "2"],
//   doc_id: "123456789",
// };

export default function BlogPost({props}) {
  console.log("props from blogpost", props)
  return (
    <div>
      <EditProvider>
        <ViewPost
          props={props}
        ></ViewPost>
        <EditPost
          props={props}
        ></EditPost>
      </EditProvider>
    </div>
  );
}
