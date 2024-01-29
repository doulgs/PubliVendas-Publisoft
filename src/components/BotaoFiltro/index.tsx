import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps {
  titlo: string;
  ativo?: boolean;
  tipo: "J" | "F";
}

function BotaoFiltro({ ativo, tipo, titlo, ...rest }: Props) {
  const { colors } = useTheme();
  const colorTipo = tipo === "J" ? colors.Secondary : colors.Secondary;
  return (
    <>
      <TouchableOpacity
        style={{
          flex: 1,
          borderColor: ativo ? colorTipo : "#000000",
          borderWidth: 1,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          backgroundColor: colors.Background[100],
        }}
        {...rest}
      >
        <Text
          style={{
            color: ativo ? colorTipo : "#000000",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {titlo}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export { BotaoFiltro };
