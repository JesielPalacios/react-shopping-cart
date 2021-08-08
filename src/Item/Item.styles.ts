import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  background: linear-gradient(90deg, rgba(172, 182, 229, 0.4) 0%, rgba(134, 253, 232, 0.4) 100%);


  button {
    border-radius: 0 0 20px 20px;
    background-color:rgba(0, 0, 0, 0.15)
  }p
  button:hover {
    background-color:rgba(0, 0, 0, 0.4)
  }


  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
