import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  results: {
    hotside_1: String;
    coldside_1: String;
    hotside_2: String;
    coldside_2: String;
    hotside_3: String;
    coldside_3: String;
    hotside_4: String;
    coldside_4: String;
    hotside_5: String;
    coldside_5: String;
    hotside_6: String;
    coldside_6: String;
  };
}

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
  testparameters: {
    width: "8%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    textAlign: "left",
    //  height: 13,
  },
  hotside: {
    width: "65%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    // textAlign: "center",
    // height: 13,
  },
  coldside: {
    width: "18%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    // textAlign: "center",
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    // height: 13,
  },
});
const PdfTestParameter: React.FC<props> = ({ results }) => {
  return (
    <View style={{ paddingTop: "10px" }}>
      <View
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: "extrabold",
        }}
      ></View>

      <View style={styles.mainView}>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Test Parameters</Text>
          <Text style={styles.hotside}>Hot Side</Text>
          <Text style={styles.coldside}>Cold Side</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Design Pressure</Text>
          <Text style={styles.hotside}>{results.hotside_1}</Text>
          <Text style={styles.coldside}>{results.coldside_1}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Hydrostatic Test Pressure</Text>
          <Text style={styles.hotside}>{results.hotside_2}</Text>
          <Text style={styles.coldside}>{results.coldside_2}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Test Medium</Text>
          <Text style={styles.hotside}>{results.hotside_3}</Text>
          <Text style={styles.coldside}>{results.coldside_3}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Material Temperature</Text>
          <Text style={styles.hotside}>{results.hotside_4}</Text>
          <Text style={styles.coldside}>{results.coldside_4}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Holding Time</Text>
          <Text style={styles.hotside}>{results.hotside_5}</Text>
          <Text style={styles.coldside}>{results.coldside_5}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Test Position</Text>
          <Text style={styles.hotside}>{results.hotside_6}</Text>
          <Text style={styles.coldside}>{results.coldside_6}</Text>
        </View>
      </View>
    </View>
  );
};

export default PdfTestParameter;
