import styled from "styled-components";
import Colors from "../../../resource/color";
import Dimensions from "../../../resource/dimens";

export const HeadContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Colors.Primary};

  a {
    color: black;
    text-decoration: none;
    display: block;
  }

  .list {
    list-style: none;
    min-width: 190px;
    background: white;
    z-index: 100;
    border: 1px solid ${Colors.Light};

    li {
      padding: 8px 10px;
      font-size: 14px;
      transition: 0.5s;
      cursor: pointer;

      :hover {
        background: ${Colors.Light};
      }
    }
  }

  & .wrapper {
    width: ${Dimensions.siteWidth};
    margin: ${({ navSize }) => (navSize === "lg" ? "24px" : "10px")} auto;
    display: flex;
    padding: 0px 8px;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s;
  }

  & .site-name {
    margin: 0px;
    span {
      color: ${Colors.Primary};
    }
  }

  & .site-logo {
    @media screen and (max-width: 720px) {
      width: 100%
    }

    @media screen and (max-width: 576px) {
        width: 180px;
    }
  }

  .form-wrapper {
    display: flex;
    ${"" /* align-items: center; */}
    justify-content: center;
    align-self: center;
  }

  & form {
    display: flex;
    border: 1px solid ${Colors.Light};
    border-right: none;
    border-radius: 2px;
    padding: 0px;
    flex: 1;

    button,
    input {
      padding: ${({ navSize }) => (navSize === "lg" ? "6px" : "4px")} 10px;
    }
    button {
      border: none;
      background: white;
      border-right: 1px solid ${Colors.Light};
      cursor: pointer;
      display: flex;
      align-items: center;

      & i {
        font-size: 12px;
        margin-left: 5px;
      }
    }

    button[type="submit"] {
      background: ${Colors.Primary};
      color: ${Colors.white};
      border: none;
    }

    & > div:nth-child(2) {
      flex: 1;
      position: relative;
      display: flex;

      input {
        border: none;
        flex: 1;
        font-size: 14px;
        line-height: 1;
      }

      i {
        position: absolute;
        padding: ${({ navSize }) => (navSize === "lg" ? "10px" : "8px")} 8px;
        cursor: pointer;
        right: 0;
      }
    }

    & > div:first-child {
      position: relative;

      .open {
        height: auto;
      }

      & > div {
        position: absolute;
        left: -1px;
        overflow: hidden;
        height: 0px;
        transition: 0.5s;
      }
    }

    button:active,
    button:focus,
    input:active,
    input:focus {
      outline: none;
    }
  }

  & .wishlist {
    position: relative;
    cursor: pointer;

    i {
      font-size: 28px;
      position: relative;
    }

    .count {
      position: absolute;
      font-size: 10px;
      width: 15px;
      height: 15px;
      background: ${Colors.Primary};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      font-weight: bold;
      right: 2px;
      bottom: -2px;
      color: ${Colors.white};
    }
  }

  & .account {
    position: relative;
    display: flex;
    align-items: center;

    & i {
      font-size: 32px;
      position: relative;
    }

    & > div {
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      font-size: 14px;
      justify-content: space-between;

      a {
        line-height: 20px;
        color: ${Colors.Secondary};
        transition: 0.4s;
        cursor: pointer;

        &:hover {
          color: ${Colors.Dark};
        }
      }
    }
  }
`;

export const SearchResult = styled.div`
  position: absolute;
  width: 100%;
  background: ${Colors.white};
  top: ${({ posTop }) => posTop + "px"};
  border: 1px solid ${Colors.Light};
  left: -1px;
  padding: 14px;
  transition: 0.6s;
  z-index: 1;

  ul:first-child {
    list-style: none;

    li {
      font-size: 14px;
      word-spacing: 4px;
      padding: 4px;
      cursor: pointer;
      transition: 0.5s;

      :hover {
        background: ${Colors.Lighter};
      }
    }

    .li-cat {
      color: ${Colors.midTone};

      b {
        color: ${Colors.Dark};
      }

      span:first-child {
        color: ${Colors.Dark};
      }
      span:last-child {
        color: ${Colors.info};
      }
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${Colors.Light};
  }

  h4 {
    font-size: 14px;
    font-weight: normal;
    padding: 4px;
  }

  ul:last-child {
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      padding: 5px 0px;

      :hover {
        h3 {
          text-decoration: underline;
        }
      }

      img {
        width: 20%;
        max-height: 65px;
      }

      & > div {
        width: 78%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 14px;
          font-weight: normal;
          color: ${Colors.info};
          cursor: pointer;
        }

        & > div {
          display: flex;
          justify-content: space-between;

          span {
            font-size: 15px;

            :first-child {
              color: ${Colors.danger};
            }
            :last-child {
              color: ${Colors.midTone};
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
`;
