import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import { Colors } from "style";

import styles from "./SocialMedia.styles";

const socialMedia = [
  {
    iconName: "github",
    url: "https://github.com/KumarAryan0530/Eco-Track",
  },
  {
    iconName: "linkedin",
    url: "https://www.linkedin.com/in/kumar-a-730a27230/",
  },
  {
    iconName: "instagram",
    url: "https://www.instagram.com/kumararyan0530",
  },
];

const SocialMedia: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.box}>
      {socialMedia.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
          <FontAwesome5 name={item.iconName} size={32} color={Colors.grey70} />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default SocialMedia;
