import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 320px) {
      ${props}
    }
  `;
};

export const mobileM = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};
