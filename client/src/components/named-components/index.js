import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  main {
    flex-direction: column;
    display: flex;
  }
`;

export const Content = styled.div`
position: relative;
background-color: lightgray;
width: 50%;
height: 50%;
margin: 0 auto;
padding-top: 10%
display: flex;
justify-content: center;
`;

export const InputField = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const OutputField = styled(InputField)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  background-color: lightblue;
  margin: 20px;
  padding: 20px;
  :hover {
    background-color: skyblue;
  }
  :active {
    background-color: teal;
  }
`;
