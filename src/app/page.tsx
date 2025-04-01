"use client";

import styled from "styled-components";
import ThemeColors from "../../Theme/themeColors";

const AvatarContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${ThemeColors.yellow[400]};

`;

export default function Home() {
  return <AvatarContainer />;
}
