import { StyleSheet } from "react-native";

import { Layout, Colors } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  hiddenBtn: {
    marginTop: 8,
    marginHorizontal: 10,
  },
  logoNMFContainer: {
    // flex: 5,
    alignItems: "center",
  },
  logoNMF: {
    // height: "30px",
    width: "40%",
    marginBottom: -150,
    marginTop: -150,
  },
  appVersionTitle: {
    textAlign: "center",
    marginBottom: 24,
  },
  textContainer: {
    flex: 1,
  },
  quote: {
    color: Colors.black,
    fontStyle: "italic",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 30,
    color: Colors.primary,
    fontWeight: "bold",
  },
});
