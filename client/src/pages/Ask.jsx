import React from "react";
import styled from "styled-components";
import Header from "../share/Header";
import Footer from "../share/Footer";

const Container = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  height: 200px;
  background-color: red;
`;
const Content = styled(Container)``;
const Ask = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Content></Content>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default Ask;
