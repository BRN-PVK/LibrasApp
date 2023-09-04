const AlfabetosAtalho = ({ img, txt, navigation }) => {
    return (
      <TouchableOpacity
        style={styles.Cat}
        onPress={() => {
          navigation.navigate("Alfabetos", { txt: txt });
        }}
      >
        <Image
          source={{
            uri: img,
          }}
          style={{ height: 80, width: 90 }}
        />
        <Text style={styles.CatTxt}>{txt}</Text>
      </TouchableOpacity>
    );
  };