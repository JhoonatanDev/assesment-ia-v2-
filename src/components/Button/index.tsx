import React, { useState } from "react";
import { ButtonUser } from "./styles";
import ThemeColors from "../../../Theme/themeColors";
interface Props {
  text: string;
  valid?: boolean;
  onClick: () => void;
  isDisable: boolean;
}

const Button = ({ text, valid = false, onClick, isDisable }: Props) => {
  return (
    <ButtonUser
      onClick={onClick}
      disabled = {isDisable}
      style={{
        backgroundColor:
          valid === null
            ? "#fff222"
            : valid === false
            ? ThemeColors.Red[13]
            : undefined,
      }}
    >
      {text}
    </ButtonUser>
  );
};

export { Button };
