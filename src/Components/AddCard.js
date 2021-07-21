import { Typography, Button, Dialog, DialogTitle, Container, TextField, Input, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

function AddCard({info}){

    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const tmpImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
    const props = {title:"Add Title Here", date:"6/11/2021", image: tmpImg, content:"", likeCount: Math.floor(Math.random()*200+100), comments:[]};
    const [blogData, setBlogData] = useState(props);
    // const {path, url} = useRouteMatch();
    // const openPost = () => {
    //     console.log(info.title);
    //     history.push(`${path}/${info.doc_id}`)
    //     // alert(post.doc_id);
    // }

    const addPost = () => {
        console.log("add post")
    }
    const handleChange = (e, field) => {
        setBlogData((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }))
        // console.log(blogData);
    };

    const handleSubmit = () => {
        fetch('/blog/add', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData),
          })
          .catch(err => console.error('error: ' + err))

        history.push('/blog');
    };
    const formatDate = (date) => {
        const fDate =  (
          (date.getMonth() > 8
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)) +
          "/" +
          (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
          "/" +
          date.getFullYear()
        );
        setBlogData((prevState) => ({
            ...prevState,
            date: fDate,
        }))
      };

    return(
        <Container style={{justifyContent: "center", alignItems:"center"}}>
            <div>
                <Typography variant="h3">Add a Blog Post</Typography>
                <TextField label="Insert Title" onChange={ e => handleChange(e, "title")}/>
                <TextField
                    id="date"
                    label="Published date"
                    type="date"
                    defaultValue="2021-06-11"
                    onChange={(e) => formatDate(new Date(e.target.value))}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <br>
                </br>
                <TextField label="Insert Image URL" onChange={ e => handleChange(e, "image")}/>
            </div>
            <Input
              placeholder="Insert your text here"
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
              onChange={(e) => handleChange(e, "content")}
            ></Input>
            <Button variant="contained" onClick={handleSubmit}>Post</Button>
        </Container>
    )
}


export default AddCard;