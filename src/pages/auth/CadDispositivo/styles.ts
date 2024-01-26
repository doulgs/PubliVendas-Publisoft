import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 8px;
`;
export const Input = styled.TextInput`
  height: 55px;
  padding: 8px;
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.theme.colorBase.Black};
`;
export const ContentLine = styled.View`
  padding: 8px;
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.theme.colorBase.Black};
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.Background[500]};
`;
export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.Background[800]};
`;
