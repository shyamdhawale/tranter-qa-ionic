import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    fontFamily: "Helvetica-Bold",
    alignItems: "center",
    // textAlign: "center",

    height: "20px",
  },
  srnumber: {
    width: "5%",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: "20px",
  },
  subtitle: {
    width: "95%",
    marginLeft: "1%",
  },
});

const ChecklistSubTitle: React.FC<{ subtitle: String }> = (props) => (
  <View style={styles.container}>
    <Text style={styles.srnumber}> </Text>
    <Text style={styles.subtitle}>{props.subtitle} </Text>
  </View>
);

export default ChecklistSubTitle;
