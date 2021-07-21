export default function UpdateBlog(data) {
  // console.log("update data", data);
  fetch("/blog/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}
