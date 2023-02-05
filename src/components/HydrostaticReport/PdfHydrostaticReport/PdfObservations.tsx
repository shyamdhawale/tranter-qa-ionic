import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  results: {
    gaugeid_1: String;
    gaugerange_1: String;
    calibration_1: String;
    observed_1: String;
    gaugeid_2: String;
    gaugerange_2: String;
    calibration_2: String;
    observed_2: String;
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
  hydroside: {
    width: "8%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    textAlign: "left",
    //  height: 13,
  },
  gaugeidno: {
    width: "65%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    // textAlign: "center",
    // height: 13,
  },
  gaugerangekg: {
    width: "18%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    // textAlign: "center",
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    // height: 13,
  },
  calibrationvalid: {
    width: "18%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    // textAlign: "center",
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    // height: 13,
  },
  observedpressure: {
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
          fontFamily: "Lato Bold",
          fontWeight: "extrabold",
        }}
      >
        <Text>Observations:</Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.row}>
          <Text style={styles.hydroside}>Hydro Side</Text>
          <Text style={styles.gaugeidno}>Gauge ID No</Text>
          <Text style={styles.gaugerangekg}>Gauge Range KG/CM^2</Text>
          <Text style={styles.calibrationvalid}>Calibration Valid UPTO</Text>
          <Text style={styles.observedpressure}>Observed Pressure KG/CM^2</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.hydroside}>HOT Side</Text>
          <Text style={styles.gaugeidno}>{results.gaugeid_1}</Text>
          <Text style={styles.gaugerangekg}>{results.gaugerange_1}</Text>
          <Text style={styles.calibrationvalid}>{results.calibration_1}</Text>
          <Text style={styles.observedpressure}>{results.observed_1}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.hydroside}>COLD Side</Text>
          <Text style={styles.gaugeidno}>{results.gaugeid_2}</Text>
          <Text style={styles.gaugerangekg}>{results.gaugerange_2}</Text>
          <Text style={styles.calibrationvalid}>{results.calibration_2}</Text>
          <Text style={styles.observedpressure}>{results.observed_2}</Text>
        </View>
      </View>
    </View>
  );
};

export default PdfTestParameter;
