import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  results: {
    hyd_test_hotside_1: String;
    hyd_test_coldside_1: String;
    hyd_test_hotside_2: String;
    hyd_test_coldside_2: String;
    hyd_test_hotside_3: String;
    hyd_test_coldside_3: String;
    hyd_test_hotside_4: String;
    hyd_test_coldside_4: String;
    hyd_test_hotside_5: String;
    hyd_test_coldside_5: String;
    hyd_test_hotside_6: String;
    hyd_test_coldside_6: String;
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
    width: "50%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Helvetica-Bold",
    // fontFamily: "Lato Bold",
    textAlign: "left",
    //  height: 13,
  },
  hotside: {
    width: "25%",
    borderRightWidth: 1,
    padding: "1 5 1 5",
    height: "100%",
    textAlign: "center",
  },

  coldside: {
    width: "25%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    textAlign: "center",
    padding: "1 5 1 5",
    height: "100%",
  },
});
const PdfTestParameter1500: React.FC<props> = ({ results }) => {
  return (
    <View style={{ paddingTop: "10px" }}>
      <View
        style={{
          textAlign: "center",
          fontSize: 14,
        }}
      >
        <Text>TEST PARAMETERS</Text>
      </View>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <Text style={styles.testparameters}>PARAMETERS</Text>
          <Text style={[styles.hotside, { fontFamily: "Helvetica-Bold" }]}>
            HOT SIDE
          </Text>
          <Text style={[styles.coldside, { fontFamily: "Helvetica-Bold" }]}>
            COLD SIDE
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Design Pressure</Text>
          <Text style={styles.hotside}>{results.hyd_test_hotside_1}</Text>
          <Text style={styles.coldside}>{results.hyd_test_coldside_1}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Hydrostatic Test Pressure</Text>
          <Text style={styles.hotside}>{results.hyd_test_hotside_2}</Text>
          <Text style={styles.coldside}>{results.hyd_test_coldside_2}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Test Medium</Text>
          <Text style={styles.hotside}>{results.hyd_test_hotside_3}</Text>
          <Text style={styles.coldside}>{results.hyd_test_coldside_3}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Material Temperature</Text>
          <Text style={styles.hotside}>{results.hyd_test_hotside_4}</Text>
          <Text style={styles.coldside}>{results.hyd_test_coldside_4}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Holding Time</Text>
          <Text style={styles.hotside}>{results.hyd_test_hotside_5}</Text>
          <Text style={styles.coldside}>{results.hyd_test_coldside_5}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.testparameters}>Test Position</Text>
          <Text style={styles.hotside}>{results.hyd_test_hotside_6}</Text>
          <Text style={styles.coldside}>{results.hyd_test_coldside_6}</Text>
        </View>
      </View>
    </View>
  );
};

export default PdfTestParameter1500;
