import { Layout, Modal } from "antd";
import styled, { createGlobalStyle } from "styled-components";

const { Header, Content } = Layout;

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
  font-size: 50px;
  color: rgb(25, 2, 241, 1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.5);
  }
`;

export const StyledLayoutPopup = styled(Layout)`
  height: 100%;
`;

export const StyledHeader = styled(Header)`
  text-align: center;
  color: #fff;
  background-color: #4096ff;
  border-radius: 6px;
  font-size: 24px;
`;

export const StyledContent = styled(Content)`
  padding: 5px;
  background-color: #fff;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 10px;
    border-radius: 6px;
  }
  .ant-modal-footer {
    display: flex;
    justify-content: right;
  }
`;

export const StyledMedia = styled.div`
  padding: '5px';
  textAlign: 'center';
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSpinner = styled.div`
  border: 8px solid #f3f3f3; /* Màu nền */
  border-top: 8px solid #3498db; /* Màu của vòng xoay */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;