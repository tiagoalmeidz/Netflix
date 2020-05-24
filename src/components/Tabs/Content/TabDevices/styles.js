import styled from "styled-components";

export const Container = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 1/8;
  }

  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
  }

  .imgTV {
    width: 18.75rem;
  }

  .imgMacbook {
    width: 18.75rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .imgTablet {
    width: 18.75rem;
    padding-top: 0.625rem;
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;
