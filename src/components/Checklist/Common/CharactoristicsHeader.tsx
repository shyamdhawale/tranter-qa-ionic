import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    // borderBottomColor: '#bff0fd',
    // backgroundColor: 'grey',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: "center",
    // height: 40,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },
  serialnumber: {
    width: "5%",
    height: "100%",
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  characteristics: {
    width: "25%",
    borderRightWidth: 1,
    height: "100%",
  },
  dimension: {
    width: "15%",
    borderRightWidth: 1,
    height: "100%",
    // display: 'block',
    // flexGrow: 1,
    // flexWrap: "wrap"
  },
  actualresult: {
    width: "15%",
    height: "100%",
    borderRightWidth: 1,
  },
  classification: {
    width: "10%",
    height: "100%",
    borderRightWidth: 1,
  },
  equipementToused: {
    width: "15%",
    height: "100%",
    borderRightWidth: 1,
  },
  remarks: {
    width: "15%",
    borderRightWidth: 1,
    height: "100%",
  },
});

const CharactoristicsHeader = () => (
  <View style={styles.container}>
    <Text style={styles.serialnumber}>SR. NO.</Text>
    <Text style={styles.characteristics}>CHARACTERISTICS</Text>
    <Text style={styles.dimension}>DIMENSION REQ. (mm)</Text>
    <Text style={styles.actualresult}>ACTUAL RESULTS</Text>
    <Text style={styles.classification}>CLASSIFICATION</Text>
    <Text style={styles.equipementToused}>EQUIPMENT TO BE USED</Text>
    <Text style={styles.remarks}>REMARKS</Text>
  </View>
);

export default CharactoristicsHeader;
