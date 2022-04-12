import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopupBtn: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      css={buttonStyle}
      onClick={() => {
        setIsOpen((prev) => {
          return !prev;
        });
      }}
    >
      {isOpen ? "×" : "●"}
    </button>
  );
};

const buttonStyle = css`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 40px;
  line-height: 50px;
  cursor: pointer;
  padding: 0;
`;
