import { Box } from "@mui/material";
import styled from "styled-components";

export const Session = styled(Box)`
  display: grid;
  gap: 10px;
  width: 100%;
`;

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 50px;
  background-color: #1f1f23;
  border-radius: 8px;
  :nth-child(even) {
    background-color: #16161a;
  }
`;

export const ItemsTitles = styled.h2`
  margin: 10px;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  color: #d2d2d2;

`;

export const Items = styled.h4`
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;
