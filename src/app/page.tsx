"use client";

import styled from "styled-components";
import ThemeColors from "../../Theme/themeColors";
import { Button } from "../components/Button"; 
import { Header } from "../components/Header";

// const AvatarContainer = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: ${ThemeColors.yellow[400]};
// `;



export default function Home() {
  return (
    <div>
      <Header />
      <Button text={"asdsads"} onClick={() => undefined} isDisable={false}/>  
    </div>
  );
}
