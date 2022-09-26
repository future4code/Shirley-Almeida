import styled from "styled-components";

export const Ul = styled.ul`
  .pagination {
    display: flex;
    flex-direction: row;
    color: green;
    list-style-type: none;
    padding: 10px;

    > li p {
      margin-top: -20px;
    }

    > li {
      border-radius: 10px;
      a {
        margin: 0.5rem;
        cursor: pointer;
      }
    }
  }

  .break-me {
    cursor: default;
  }

  .active {
    border-color: transparent;
    font-weight: bold;
    color: #5c16c5;
  }
`