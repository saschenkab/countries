import styled from "styled-components";

export const PaginationList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  justify-content: center;
`;

export const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: #283618;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-family: "Marcellus SC", serif;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  font-size: 14px;
  min-width: 32px;

  &.selected {
    background-color: #879166;
    font-weight: 600;
    color: #fefae0;
    text-shadow: -1px 1px 1.8px #606c38;
  }

  &.dots:hover {
    background-color: #d4deb4;
    cursor: default;
  }

  &:hover {
    background-color: #d4deb4;
    cursor: pointer;
  }

  &.disabled {
    pointer-events: none;
    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const Arrow = styled.div`
  transform: ${(props) =>
    props.left ? "rotate(-135deg) translate(-50%)" : "rotate(45deg)"};

  &::before {
    position: relative;
    content: "";
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }
`;
