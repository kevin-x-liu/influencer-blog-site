import React, { useState, useContext } from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  Input,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { EditContext } from "./EditContext";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { BlogPostContext } from "../../context/BlogPostContext";
// import UpdateBlog from "./UpdateBlog";
import DeleteBlog from "./DeleteBlog";

export default function EditPost({ props }) {
  const [blogData, setBlogData] = useState(props);
  const [open, setOpen] = useState(false);

  const { edit, setEdit } = useContext(EditContext);
  const [selectedDate, setSelectedDate] = useState(new Date(blogData.date));
  const { getPosts } = useContext(BlogPostContext);
  let link = "";

  const UpdateBlog = (data) => {
    console.log("update data", data);
    fetch("/blog/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => console.log(resp))
      .then((c) => getPosts())
      .catch((err) => console.error("error:" + err));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setBlogData((prevState) => ({
      ...prevState,
      image: link,
    }));
    setOpen(false);
  };

  const handleSave = () => {
    UpdateBlog(blogData);
    setEdit(false);
  };

  const handleDelete = () => {
    DeleteBlog({ doc_id: blogData });
  };

  const formatDate = (date) => {
    return (
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear()
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setBlogData((prevState) => ({
      ...prevState,
      date: formatDate(date),
    }));
  };

  if (!edit) {
    return null;
  } else {
    return (
      <div style={{ backgroundColor: "#F7F1F0" }}>
        <div style={{ height: "3vh" }}></div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={handleDelete}
            style={{
              marginRight: "1vw",
              backgroundColor: "#E7717D",
              fontFamily: "'Martel', serif",
            }}
          >
            DELETE
          </Button>
          <Button
            onClick={handleSave}
            style={{
              marginRight: "10vw",
              backgroundColor: "#C7D8C6",
              fontFamily: "'Martel', serif",
            }}
          >
            SAVE
          </Button>
        </div>
        <div
          style={{
            fontFamily: "'Martel', serif",
            marginLeft: "25vw",
            marginRight: "25vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "200%",
            }}
          >
            <Input
              defaultValue={blogData.title}
              required
              disableUnderline
              style={{
                fontFamily: "'Martel', serif",
                fontSize: "100%",
                textAlign: "center",
                backgroundColor: "#EFD9C1",
              }}
              onChange={(e) => {
                setBlogData((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }));
              }}
            ></Input>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "80%",
              alignItems: "baseline",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "baseline",
              }}
            >
              <div style={{ marginRight: "10px" }}>Published on </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <IconButton>
                <FavoriteIcon style={{ color: "C7D8C6" }} />
              </IconButton>
              {blogData.likeCount} likes
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1vh",
            }}
          >
            <Button onClick={handleOpen}>
              <img
                src={blogData.image}
                alt="image"
                width="80%"
                style={{
                  borderStyle: "solid",
                  borderWidth: "10px",
                  borderColor: "#C7D8C6",
                  maxWidth: "100%",
                }}
              />
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle style={{ backgroundColor: "#F7F1F0" }}>
                New Image
              </DialogTitle>
              <DialogContent style={{ backgroundColor: "#F7F1F0" }}>
                <DialogContentText>
                  Enter URL link of the new image to be insered:
                </DialogContentText>
                <Input
                  autoFocus
                  fullWidth
                  placeholder={"URL"}
                  onChange={(e) => {
                    link = e.target.value;
                  }}
                ></Input>
              </DialogContent>
              <DialogActions style={{ backgroundColor: "#F7F1F0" }}>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>
          <div style={{ marginBottom: "5vh" }}>
            <Input
              defaultValue={blogData.content}
              required
              disableUnderline
              fullWidth
              multiline
              style={{
                fontFamily: "'Martel', serif",
                fontSize: "100%",
                lineHeight: "1.7",
                backgroundColor: "#EFD9C1",
              }}
              onChange={(e) => {
                setBlogData((prevState) => ({
                  ...prevState,
                  content: e.target.value,
                }));
              }}
            ></Input>
          </div>
          <div style={{ fontSize: "120%" }}>Comments</div>
          <div>{blogData.comments}</div>
        </div>
      </div>
    );
  }
}
