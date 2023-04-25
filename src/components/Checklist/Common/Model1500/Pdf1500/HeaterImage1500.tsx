import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Helvetica-Bold",
    fontSize: "14pt",
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
    borderWidth: 1,

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
    width: "420px",
    height: "360px",
    marginBottom: "10px",
    // textAlign: "center",
  },

  frontview: {
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    alignItems: "center",
    textAlign: "center",
    // padding: "2%",
    width: "75%",
  },
  backview: {
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    alignItems: "center",
    textAlign: "center",
    // padding: "2%",
    width: "75%",
    // height: "100%",
  },
});
const HeaterImage1500: React.FC<{
  checklist: {
    frontviewphotofilename: String;
    sideviewphotofilename: String;
    equipmentphotofilename_one: String;
    equipmentphotofilename_two: String;
  };
}> = (props) => {
  const { checklist } = props;

  return (
    <>
      <View break style={styles.title}>
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
              src={`http://${process.env.REACT_APP_URL}/checklistphotos/${checklist.frontviewphotofilename}`}
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
              src={`http://${process.env.REACT_APP_URL}/checklistphotos/${checklist.sideviewphotofilename}`}
            ></Image>
          </View>
        </View>
      </View>
      <View break style={styles.title}>
        <Text>EQUIPMENT PHOTOGRAPHS</Text>
      </View>
      <View>
        <View>
          <View style={styles.container}>
            <View style={styles.frontview}>
              <Text>Photograph</Text>
            </View>
            <Image
              style={styles.image}
              src={`http://${process.env.REACT_APP_URL}/checklistphotos/${checklist.equipmentphotofilename_one}`}
            ></Image>
          </View>
        </View>
        <View>
          <View style={styles.container}>
            <View style={styles.backview}>
              <Text>Photograph</Text>
            </View>
            <Image
              style={styles.image}
              src={`http://${process.env.REACT_APP_URL}/checklistphotos/${checklist.equipmentphotofilename_two}`}
            ></Image>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeaterImage1500;
