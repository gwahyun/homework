import React, { useState, useEffect } from "react";
import TextForm from "./component/TextForm";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function App() {
  const [message, setMessage] = useState({ id: "", message: "" });

  useEffect(() => {
    console.log(message);
  });
  return (
    <Container maxWidth="100%">
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" mb={4}>
          덕담을 나눠보세요
        </Typography>
        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            justifyContent: "space-around",
          }}
        >
          <TextForm setMessage={setMessage} message={message} id={"one"} />
          <TextForm setMessage={setMessage} message={message} id={"two"} />
        </Box>
      </Box>
    </Container>
  );
}
