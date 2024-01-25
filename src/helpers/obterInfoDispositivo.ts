import * as Device from "expo-device";
import DeviceInfo from "react-native-device-info";

const obterInfoDispositivo = async () => {
  try {
    const uniqueId = await DeviceInfo.getUniqueId();
    const Plataforma = Device.osName;
    const Modelo = Device.modelName;
    const Versao = Device.osVersion;

    return {
      infoDispositivo: {
        uniqueId,
        Plataforma,
        Modelo,
        Versao,
      },
    };
  } catch (error) {
    console.error("Erro ao obter informações do dispositivo:", error);
    return {
      error: "Erro ao obter informações do dispositivo",
    };
  }
};

export { obterInfoDispositivo };
