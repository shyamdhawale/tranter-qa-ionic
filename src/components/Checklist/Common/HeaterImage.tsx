import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    marginTop: "10px",
    marginBottom: "10px",
    textAlign: "center",
  },
  container: {
    // borderBottomWidth: 1,
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    // fontFamily: "Helvetica-Bold",
    alignItems: "center",
    textAlign: "center",

    // height: "20px",
  },
  image: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    // fontFamily: "Helvetica-Bold",
    alignItems: "center",
    textAlign: "center",
    padding: "2%",
    width: "75%",
    // textAlign: "center",
  },
  srnumber: {
    width: "5%",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    textAlign: "center",
    height: "16px",
    alignItems: "center",
  },
  name: {
    // paddingLeft: "1%",
    // height: "16px",
    alignItems: "center",
    textAlign: "center",
  },
  frontview: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    alignItems: "center",
    textAlign: "center",
    // padding: "2%",
    width: "75%",
  },
  backview: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems: "center",
    textAlign: "center",
    // padding: "2%",
    width: "75%",
  },
});
const HeaterImage = () => {
  return (
    <View break>
      <View style={styles.title}>
        <Text>EQUIPMENT PHOTOGRAPHS</Text>
      </View>
      <View>
        <View>
          <View style={styles.container}>
            <View style={styles.frontview}>
              <Text>Front View Photograph</Text>
            </View>
            <Image
              style={styles.image}
              src="https://media.gettyimages.com/id/887465766/photo/road-construction-machinery-on-the-construction-of-highway.jpg?s=612x612&w=gi&k=20&c=-FMEvA1LbUQF5Kn4f1MUfxcRT5dQBFzaQ-IaqUE_qUY="
            ></Image>
          </View>
        </View>
        <View>
          <View style={styles.container}>
            <View style={styles.backview}>
              <Text> Side View Photograph</Text>
            </View>
            <Image
              style={styles.image}
              src="https://media.gettyimages.com/id/887465766/photo/road-construction-machinery-on-the-construction-of-highway.jpg?s=612x612&w=gi&k=20&c=-FMEvA1LbUQF5Kn4f1MUfxcRT5dQBFzaQ-IaqUE_qUY="
            ></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaterImage;
