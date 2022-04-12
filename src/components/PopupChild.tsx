import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { metaList } from "../variables";
import { PopupChildLink } from "./PopupChildLink";
import { PopupChildImg } from "./PopupChildImg";
import { PopupChildText } from "./PopupChildText";

type Props = {
  meta: [string, string | null];
};

export const PopupChild: React.FC<Props> = ({ meta }) => {
  const [key, value] = meta;
  const { type, group } = metaList[key];
  return (
    <div css={listChildStyle}>
      <div css={listTitleStyle(group)}>{key}</div>
      <div css={listBodyStyle}>
        {(() => {
          if (type === "link" && value) {
            return <PopupChildLink link={value} />;
          } else if (type === "img" && value) {
            return <PopupChildImg link={value} />;
          } else {
            return <PopupChildText>{value}</PopupChildText>;
          }
        })()}
      </div>
    </div>
  );
};

const listChildStyle = css`
  color: black;
  position: relative;
  background: #f1f8ff;
  line-height: 1.5;
  word-break: break-all;
  list-style-type: none;
  text-align: left !important;
  display: flex;
  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

const listTitleStyle = (group: string) => css`
  background: ${group === "og"
    ? "#3B5998"
    : group === "twitter"
    ? "#00acee"
    : "#5c9ee7"};
  font-weight: bold;
  padding-right: 10px;
  border-right: 1px solid #fff;
  width: 160px;
  color: #fff;
  padding: 15px 10px;
`;

const listBodyStyle = css`
  padding: 15px 10px;
  padding-left: 10px;
  flex: 1;
  display: flex;
  div:nth-of-type(1) {
    flex: 1;
  }
  div:nth-of-type(2) {
    width: 120px;
    margin-left: 15px;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
