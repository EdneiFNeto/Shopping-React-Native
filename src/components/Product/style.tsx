import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  background-color: #fa8f0d;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 1);
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #333;
  padding-left: 12px;
  padding-top: 12px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #333;
  padding-left: 12px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 120px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  padding-left: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
`;
