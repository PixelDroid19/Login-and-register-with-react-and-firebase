import styled from "styled-components";

export const InputCustom = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  border-bottom: 2px solid #78767b;
  outline: none;

  &:focus {
    border-bottom: 2px solid #201731;
  }
  &::placeholder { color: rgba(0,0,0,0.6); }
`;

export const ButtonCustom = styled.button`
  background-color: #354681;
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  color: white;

  .button {
    background-color: #354681;
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    color: white;
    border: none;
  }

  &:hover {
    background-color: #00345e;
    cursor: pointer;
  }
`;

export const CustomBoxForm = styled.div`
  padding: 20px;
  color: black;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 60px auto 0px auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  .SignUp {
    text-align: center;
  }

  h2 {
    font-weight: bold;
    font-size: 42px;
    text-align: center;
  }
`;

export const CustomMinibox = styled.div`
  margin-bottom: 15px;

  div {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin: 20px auto;
  }

  p {
    font-weight: bold;
    font-size: 18px;
  }

  img {
    margin: 0 auto;
    width: 78px;
  }
`;
