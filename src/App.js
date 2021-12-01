import React, { useState } from "react";
import TextForm from "./component/TextForm";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function App() {
  const [messageOne, setMessageOne] = useState("");
  const [messageTwo, setMessageTwo] = useState("");

  const MessageSetterOne = (text) => {
    setMessageOne(text);
  };
  const MessageSetterTwo = (text) => {
    setMessageTwo(text);
  };

  return (
    <Container width="100vw" hight="100vh">
      <Box
        sx={{
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
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
            <TextForm setMessage={MessageSetterTwo} message={messageOne} />
            <TextForm setMessage={MessageSetterOne} message={messageTwo} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
