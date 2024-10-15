import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    /* Reset box-sizing cho tất cả các phần tử */
    * {
    box-sizing: border-box;
    }

    /* Đặt kích thước cho html, body và phần tử root */
    html,
    body,
    #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    }

    /* Đặt kích thước cho html và body */
    html,
    body {
    width: 100%;
    height: 100%;
    }

    /* Cố định vị trí body để ngăn cuộn */
    body {
    position: fixed;
    overflow: hidden;
    }


    body {
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif; /* Font chữ */
    color: rgb(0, 0, 0);
    }
`;

export const StyledPoint = styled.div`
  cursor: pointer;
  font-size: 30px;
  color: rgb(25, 2, 241, 1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.5);
  }
`;