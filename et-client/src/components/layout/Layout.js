import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Container className="mt-5" style={{ minHeight: "72vh" }}>
        {children}
      </Container>
      <footer className="text-center bg-dark text-light p-5">
        &copy; all right reserved 2022 || made with fun
      </footer>
    </div>
  );
};
