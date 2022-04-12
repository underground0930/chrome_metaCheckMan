import React, { useEffect, useState } from "react";
import { css, Global } from "@emotion/react";
import { GlobalStyle } from "./GlobalStyle";
import { defaultMetaKeys } from "../variables";
import { OptionsChild } from "./OptionsChild";

export const Options = () => {
  const [metas, setMetas] = useState({} as { [key: string]: string });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const metaKeys: { [key: string]: string } = { ...defaultMetaKeys };

    // MEMO:ストレージの情報があればそれを使用。無ければ、デフォルトの値を使用
    chrome.storage.sync.get(
      defaultMetaKeys,
      (items: { [k: string]: string }) => {
        for (const meta in items) {
          if (items[meta]) {
            metaKeys[meta] = items[meta];
          }
        }
        setMetas(metaKeys);
      }
    );
  }, []);

  const saveOptions = () => {
    setDisabled(true);
    chrome.storage.sync.set({ ...metas }, () => {
      setTimeout(() => {
        setDisabled(false);
      }, 1000);
    });
  };

  const resetOptions = (e: any) => {
    e.preventDefault();
    setMetas({
      ...defaultMetaKeys,
    });
  };

  return (
    <>
      <Global styles={GlobalStyle} />
      <div css={baseStyle}>
        <div css={titleStyle}>Meta Options</div>
        <div css={textStyle}>Please select the item you want to display.</div>
        {disabled && <div css={alertStyle}>option update</div>}
        <div css={listStyle}>
          {Object.entries(metas).map((m, i) => {
            return (
              <OptionsChild
                key={i}
                meta={m}
                metas={metas}
                setMetas={setMetas}
              />
            );
          })}
        </div>
        <div css={resetStyle}>
          <a href="#" onClick={resetOptions}>
            reset options
          </a>
        </div>
        <div css={submitWrapStyle}>
          <button css={submitStyle} onClick={saveOptions} disabled={disabled}>
            update
          </button>
        </div>
      </div>
    </>
  );
};

const titleStyle = css`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

const textStyle = css`
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

const alertStyle = css`
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
  color: red;
`;

const baseStyle = css`
  background-color: rgba(0, 0, 0, 1);
  border: 1px solid #fff;
  width: 600px;
  height: 500px;
  color: #fff;
  overflow-y: scroll;
  font-size: 15px;
  padding: 20px 20px;
`;

const listStyle = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const listChildStyle = css`
  width: 50%;
  margin-bottom: 10px;
  list-style-type: none;
  text-align: left !important;
  display: flex;
  img {
    width: 50px;
    height: auto;
  }
  span {
    display: inline-block;
  }
`;

const resetStyle = css`
  text-align: center;
  margin-bottom: 20px;
  a {
    text-decoration: underline;
    color: #fff;
    font-size: 16px;
  }
`;

const submitWrapStyle = css`
  display: flex;
  justify-content: center;
`;

const submitStyle = css`
  border: 1px solid #888;
  width: 100px;
  height: 40px;
  color: #fff;
  background: #777;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &[disabled] {
    cursor: auto;
    opacity: 0.4;
  }
`;
