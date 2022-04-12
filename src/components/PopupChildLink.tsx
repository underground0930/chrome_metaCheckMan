import { css } from "@emotion/react";

type Props = {
  link: string;
};

export const PopupChildLink: React.FC<Props> = ({ link }) => {
  return (
    <a css={linkStyle} href={link} target="_blank" rel="noopener">
      {link}
    </a>
  );
};

const linkStyle = css`
  color: #000;
  text-decoration: underline;
`;
