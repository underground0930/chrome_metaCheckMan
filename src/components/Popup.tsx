import React, { useState } from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { css, Global, CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// components
import { GlobalStyle } from "./GlobalStyle";
import { PopupMain } from "./PopupMain";
import { PopupBtn } from "./PopupBtn";

export const Popup = () => {
  const [metas, setMetas] = useState({} as { [key: string]: string | null });
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Frame scrolling="yes" css={frameStyle(isOpen)}>
      <FrameContextConsumer>
        {(frameContext: any) => {
          return (
            <CacheProvider
              value={createCache({
                container: frameContext.document.head,
                key: `metacheck`, // 念の為ユニークにする（数字は不可）
              })}
            >
              <>
                <Global styles={GlobalStyle} />
                {isOpen && <PopupMain metas={metas} setMetas={setMetas} />}
                <PopupBtn isOpen={isOpen} setIsOpen={setIsOpen} />
              </>
            </CacheProvider>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

const frameStyle = (isOpen: boolean) => css`
  background-color: rgba(0, 0, 0, 1);
  width: ${isOpen ? 700 : 50}px;
  height: ${isOpen ? 500 : 50}px;
  position: fixed;
  right: 0;
  top: 0;
  border: none;
  z-index: 2147483647;
`;
