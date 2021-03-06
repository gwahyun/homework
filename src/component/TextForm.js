import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TextForm = (prop) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    prop.setMessage(text);
    setText("");
  };

  return (
    <Box
      sx={{
        minWidth: "40%", //카드 사이즈
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 1,
        boxShadow: 3,
      }}
      id="textContainer"
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          display: "block",
          border: 2,
          p: 2,
          m: 2,
        }}
      >
        {prop.message}
      </Typography>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            m: 2,
            bgcolor: "background.paper",
          }}
        >
          <TextField
            id="basic"
            margin="dense"
            label="메세지를 작성해보세요"
            variant="outlined"
            onChange={onChange}
            value={text}
          />
          <Button variant="outlined" type="submit">
            Send Message
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TextForm;
