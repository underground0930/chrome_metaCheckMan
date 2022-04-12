import React, { ReactNode } from "react";
import { css } from "@emotion/react";

type Props = {
  children: ReactNode;
};

export const PopupChildText: React.FC<Props> = ({ children }) => {
  const result = () => {
    if (children === null) {
      return <span css={alertStyle}>タグが設定されていません</span>;
    } else if (children === "") {
      return <span css={alertStyle}>タグの値が空です</span>;
    }
    return children;
  };

  return <div>{result()}</div>;
};

const alertStyle = css`
  color: #f00;
`;
