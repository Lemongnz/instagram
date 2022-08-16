import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  min-width: 330px;
  text-align: center;

  h3 {
    margin-bottom: 20px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: 1.2rem;
    margin: 12px auto;
  }

  p {
    color: red;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  border-radius: 5px;
  height: 45px;
  border: 0;
  padding: 3px 10px;
  background-color: rgb(235, 235, 235);
  min-width: 80%;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: #30a3e6;
  color: white;
  padding: 10px;
  font-weight: 700;
  min-width: 80%;
`;
