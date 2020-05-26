import styled from "styled-components";

export const Container = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  span {
    margin-left: 15%;
    font-size: 1.125rem;
  }
`;
