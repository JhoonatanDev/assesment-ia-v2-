"use client";

import styled from "styled-components";
import ThemeColors from "../../Theme/themeColors";

export const AvatarContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${ThemeColors.Blue[50]};
`;

export default function Home() {
  return <AvatarContainer />;
}
