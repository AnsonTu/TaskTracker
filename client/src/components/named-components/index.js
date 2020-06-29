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

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
`;

export const OutputField = styled(InputField)`
  margin: 15px;
`;
