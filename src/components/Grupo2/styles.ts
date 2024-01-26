import styled from "styled-components/native";

export const Touchable = styled.TouchableOpacity`
  margin: 6px;
  width: 112px;
  height: 112px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.MildScale[50]};
`;

export const Codigo = styled.Text`
  margin: 4px;
  color: ${(props) => props.theme.colors.Background[200]};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  gap: 4px;
`;

export const Img = styled.Image`
  width: 48px;
  height: 48px;
`;
export const Title = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;
