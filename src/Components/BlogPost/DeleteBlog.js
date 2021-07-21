export default function DeleteBlog(id) {
  fetch("/blog/delete", {
    method: "DELETE",
    body: JSON.stringify(id),
  }).catch((err) => console.error("error:" + err));
}
