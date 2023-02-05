import React from "react";
import { Text, View, StyleSheet, Canvas, Image } from "@react-pdf/renderer";
// import CheckboxSelected from "./CheckboxSelected";
// import CheckboxCross from "./CheckboxCross";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // borderBottomColor: '#bff0fd',
    // alignItems: 'center',
    // height: 40,
    // flex: 1
    // flexGrow: 1,
  },
  company: {
    // width: "5%",
    marginTop: 30,
    // fontFamily: 'Lato Bold',
  },
  engineer: {
    // width: "95%",
    fontSize: 14,
    marginTop: 20,
    // fontFamily: "Kalam",
  },
  designation: {
    // width: "95%",
    // fontFamily: 'Lato Bold',
  },
  disclaimer: {
    marginTop: 40,
    color: "grey",
  },
  culumn: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 15,
    // height:
  },
});

const ChecklistSign: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.company}>For TRANTER INDIA PVT. LTD. </Text>
    <Text style={styles.engineer}>Amit Paygghan</Text>
    <Text style={styles.designation}>QA ENGINEER</Text>
    <Text style={styles.disclaimer}>
      This is a system generated receipt and does not require signature.
    </Text>
    <View style={styles.culumn}></View>
  </View>
);

export default ChecklistSign;
