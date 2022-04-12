import React from "react";
import { css } from "@emotion/react";
import { defaultMetaKeys } from "../variables";

type Props = {
  meta: [string, string];
  metas: {
    [key: string]: string;
  };
  setMetas: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string;
    }>
  >;
};

export const OptionsChild: React.FC<Props> = ({ meta, metas, setMetas }) => {
  const [key, value] = meta;
  return (
    <>
      <div css={listChildStyle} key={key}>
        <label>
          <input
            type="checkbox"
            checked={!!parseInt(value)}
            onChange={(event) => {
              const checked = event.target.checked;
              if (key in defaultMetaKeys) {
                setMetas({
                  ...metas,
                  [key]: checked ? "1" : "0",
                });
              }
            }}
          />
          <span>{key}</span>
        </label>
      </div>
    </>
  );
};

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
