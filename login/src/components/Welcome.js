import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const Welcome = () => {
  const [post, setPost] = useState('');
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [commentdata, setCommentdata] = useState([]);
  const click = (e) => {
    setPost(e.target.value);
  };
  const handleUpclick = () => {
    // setData(post);
    setData((prev) => [...prev, post]);
    
    console.log(data, "data");
  };
  const commentClick = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const handleComment = () => {
    
    setCommentdata((prev) => [...prev, comment]);
  };
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <p>Welcome,You are Log in</p>
        <TextField onChange={(e) => click(e)}></TextField>
        <Button onClick={handleUpclick}>post</Button>
        <div style={{ marginTop: "10px" }}>
          {data.map((item) => (
            <>
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  width: "400px",
                }}
              >
                <p>{item}</p>
                <div>
                  <TextField
                    onChange={(e) => commentClick(e)}
                    label="Comments"
                    id="outlined-size-small"
                    name="user"
                    size="small"
                  ></TextField>
                  <Button onClick={handleComment}>Add Comment</Button>
                  <div>
                    {commentdata.map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
              <br />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Welcome;
