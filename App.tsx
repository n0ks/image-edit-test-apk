import React, { Fragment } from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import { RNPhotoEditor } from "react-native-photo-editor";
import ImagePicker from "react-native-image-picker";

const App = () => {
  const open = () => {
    ImagePicker.showImagePicker(
      {
        title: "Selecionar uma foto",
        storageOptions: {
          skipBackup: true,
          path: "images"
        }
      },
      response => {
        RNPhotoEditor.Edit({
          path: response.path,
          onDone: () => ImagePicker.launchImageLibrary({}, () => 1)
        });
      }
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5b5fc",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Button onPress={open} title="Abrir Galeria / Tirar foto">
        Abrir
      </Button>
    </View>
  );
};

export default App;
