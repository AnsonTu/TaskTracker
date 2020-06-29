// TODO: Deprecate this file
// We should create individual files for reusable components
// Styles for small things like headers should be handled using makeStyles from material-ui
import styled from "styled-components";

export const PageContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
`;

export const Container = styled(PageContentContainer)`
  main {
    display: flex;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  background-color: lightgray;
  width: 50%;
  height: 60%;
  margin: auto;
  margin-top: 10%;
  justify-content: center;
`;

export const MainHeader = styled.h1`
  margin-top: 18%;
  margin-bottom: 10%;
  text-align: center;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
`;

export const OutputField = styled(InputField)`
  margin: 15px;
`;

export const SubmitButton = styled.button`
  background-color: lightblue;
  margin-top: 12%;
  padding: 20px;
  width: 75%;
  :hover {
    background-color: skyblue;
  }
  :active {
    background-color: teal;
  }
`;
