import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainView: {
    marginTop: "5px",
    borderTop: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // borderBottomColor: '#bff0fd',

    borderBottomWidth: 1,
    // border: 1
  },
  row1: {
    width: "50%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    // textAlign: "center",
    height: 13,
  },
  row2: {
    width: "50%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    // textAlign: "center",
    height: 13,
  },

  title: {
    fontSize: "16px",
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },
});

const HydrotestDetails: React.FC = () => {
  return (
    <View>
      <View style={styles.title}>
        <Text>Hydro Test Details</Text>
      </View>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <Text style={styles.row1}>Procedure No. : </Text>
          <Text style={styles.row2}>Test Pressure Required :- </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.row1}>Pressure Gauge No :- </Text>
          <Text style={styles.row2}>Certificate No.: </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.row1}>Pressure Hot Side: S1/S2</Text>
          <Text style={styles.row2}>Obs. Pressure: </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.row1}>Pressure Cold Side: S3 /S4</Text>
          <Text style={styles.row2}>Obs. Pressure: </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.row1}>Duration : 30 Minutes </Text>
          <Text style={styles.row2}>Obs.:- 35 Min</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.row1}>Result: Satisfactory</Text>
          <Text style={styles.row2}>Accepted : </Text>
        </View>
      </View>
    </View>
  );
};

export default HydrotestDetails;
