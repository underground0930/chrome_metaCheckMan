import React, { useEffect } from "react";
import { css } from "@emotion/react";

// components
import { PopupChild } from "./PopupChild";
// utils
import { getMetaValues } from "../utils";
// variables
import { defaultMetaKeys } from "../variables";

type Props = {
  metas: {
    [key: string]: string | null;
  };
  setMetas: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string | null;
    }>
  >;
};

export const PopupMain: React.FC<Props> = ({ metas, setMetas }) => {
  useEffect(() => {
    const metaKeys: { [key: string]: string } = {
      ...defaultMetaKeys,
    };

    // MEMO:ストレージの情報があればそれを使用。無ければ、デフォルトの値を使用
    chrome.storage.sync.get(
      defaultMetaKeys,
      (items: { [k: string]: string }) => {
        for (const meta in items) {
          if (items[meta]) {
            metaKeys[meta] = items[meta];
          }
        }
        const results = getMetaValues(metaKeys);
        setMetas(results);
      }
    );
  }, []);
  return (
    <div css={mainStyle}>
      <div css={mainInnerStyle}>
        <div css={listStyle}>
          {Object.entries(metas).map((m, i) => {
            return <PopupChild key={i} meta={m} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mainStyle = css`
  width: 100%;
  height: 100vh;
  color: #fff;
  font-size: 15px;
  border: 5px solid #000;
`;

const mainInnerStyle = css`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const listStyle = css`
  list-style-type: none;
  text-align: left !important;
`;
