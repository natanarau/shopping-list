import Input from "@/Components/Input";
import LoginForm from "@/Components/LoginForm";
import { Box } from "@mui/material";
import React from "react";

type Props = {};

export default function Login({}: Props) {
  return (
    <Box
      display="grid"
      data-id="form-container"
      gap="30px"
      mt="20px"
      alignContent="center"
      height="90vh"
    >
      <Box display="grid" justifyItems="center">
        <Box
          component="img"
          alt="Logo do sistema"
          src="/images/logo-shopping-list.png"
          width="100%"
          maxWidth="400px"
        />
        <Box component="h4" color="text.secondary">
          Entre com seu usuario e senha
        </Box>
      </Box>
      <LoginForm />
    </Box>
  );
}
