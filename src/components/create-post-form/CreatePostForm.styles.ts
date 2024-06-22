import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    border-color: #0070f3;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  max-width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    border-color: #0070f3;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #0070f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

export const SuccessMessage = styled.p`
  color: #28a745;
  margin-top: 20px;
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  margin-top: 8px;
  font-size: 0.875rem;
`;

export const CriteriaText = styled.p`
  color: #6c757d;
  margin-top: 8px;
  font-size: 0.775rem;
`;
