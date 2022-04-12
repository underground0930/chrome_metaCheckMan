import { css } from "@emotion/react";

type Props = {
  link: string;
};

export const PopupChildImg: React.FC<Props> = ({ link }) => {
  return (
    <a css={linkStyle} href={link} target="_blank" rel="noopener">
      <div css={linkTextStyle}>{link}</div>
      <div css={linkImgStyle}>
        <img src={link} />
      </div>
    </a>
  );
};

const linkStyle = css`
  display: flex;
  color: #000;
`;

const linkTextStyle = css`
  flex: 1;
  margin-right: 15px;
`;

const linkImgStyle = css`
  width: 150px;
  img {
    width: 100%;
    height: auto;
  }
`;
