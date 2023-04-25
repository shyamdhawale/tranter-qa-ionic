import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import PdfCrossCheckbox from "../../../../../UI/PdfCrossCheckbox";
import PdfChekboxSelected from "../../../../../UI/PdfChekboxSelected";

interface props {
  results: {
    hyd_obs_gaugeidno_1: String;
    hyd_obs_guagerange_1: String;
    hyd_obs_calibrationvalid_1: String;
    hyd_obs_observedpressure_1: String;
    hyd_obs_gaugeidno_2: String;
    hyd_obs_guagerange_2: String;
    hyd_obs_calibrationvalid_2: String;
    hyd_obs_observedpressure_2: String;
    hyd_obs_visual_noleakobs: String;
    hyd_obs_visual_leakobs: String;
    hyd_obs_visual_novisiblepermanentobs: String;
    hyd_obs_dicision_satisfactory: String;
    hyd_obs_dicision_unsatisfactory: String;
    hyd_obs_dicision_verifypresuretest: String;
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
    width: "20%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    // fontFamily: "Lato Bold",
    textAlign: "center",
    height: "100%",
  },
  gaugeidno: {
    width: "20%%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    // fontFamily: "Lato Bold",
    textAlign: "center",
    // height: 13,
    height: "100%",
  },
  gaugerangekg: {
    width: "20%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    textAlign: "center",
    padding: "1 5 1 5",
    // fontFamily: "Lato Bold",
    // height: 13,
    height: "100%",
  },
  calibrationvalid: {
    width: "20%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    textAlign: "center",
    padding: "1 5 1 5",
    height: "100%",
  },
  observedpressure: {
    width: "20%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    textAlign: "center",
    padding: "1 5 1 5",

    height: "100%",
  },
  visualrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  obervationchecklist: {
    marginLeft: "2px",
    fontSize: "10px",
  },
});
const PdfObservations1500: React.FC<props> = ({ results }) => {
  return (
    <View style={{ paddingTop: "10px" }}>
      <View
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: "extrabold",
        }}
      >
        <Text>OBSERVATIONS</Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.row}>
          <Text style={[styles.hydroside, { fontFamily: "Helvetica-Bold" }]}>
            HYDRO SIDE
          </Text>
          <Text style={[styles.gaugeidno, { fontFamily: "Helvetica-Bold" }]}>
            GAUGE ID NO.
          </Text>
          <Text style={[styles.gaugerangekg, { fontFamily: "Helvetica-Bold" }]}>
            GAUGE RANGE KG/CM 2
          </Text>
          <Text
            style={[styles.calibrationvalid, { fontFamily: "Helvetica-Bold" }]}
          >
            CALIBRATION VALID UPTO
          </Text>
          <Text
            style={[styles.observedpressure, { fontFamily: "Helvetica-Bold" }]}
          >
            OBSERVED PRESSURE KG/CM 2
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.hydroside}>HOT SIDE</Text>
          <Text style={styles.gaugeidno}>{results.hyd_obs_gaugeidno_1}</Text>
          <Text style={styles.gaugerangekg}>
            {results.hyd_obs_guagerange_1}
          </Text>
          <Text style={styles.calibrationvalid}>
            {results.hyd_obs_calibrationvalid_1}
          </Text>
          <Text style={styles.observedpressure}>
            {results.hyd_obs_observedpressure_1}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.hydroside}>COLD SIDE</Text>
          <Text style={styles.gaugeidno}>{results.hyd_obs_gaugeidno_2}</Text>
          <Text style={styles.gaugerangekg}>
            {results.hyd_obs_guagerange_2}
          </Text>
          <Text style={styles.calibrationvalid}>
            {results.hyd_obs_calibrationvalid_2}
          </Text>
          <Text style={styles.observedpressure}>
            {results.hyd_obs_observedpressure_2}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: "20px", marginBottom: "10px" }}>
        <Text style={{ fontFamily: "Helvetica-Bold" }}>VISUAL INSPECTION</Text>
      </View>
      <View style={{ marginLeft: "50px" }}>
        <View style={styles.visualrow}>
          {results.hyd_obs_visual_noleakobs === "yes" ? (
            <PdfChekboxSelected />
          ) : (
            <PdfCrossCheckbox />
          )}
          <Text style={styles.obervationchecklist}>NO LEAKAGES OBSERVED</Text>
        </View>
        <View style={styles.visualrow}>
          {results.hyd_obs_visual_leakobs === "yes" ? (
            <PdfChekboxSelected />
          ) : (
            <PdfCrossCheckbox />
          )}
          <Text style={styles.obervationchecklist}> LEAKAGES OBSERVED</Text>
        </View>
        <View style={styles.visualrow}>
          {results.hyd_obs_visual_novisiblepermanentobs === "yes" ? (
            <PdfChekboxSelected />
          ) : (
            <PdfCrossCheckbox />
          )}
          <Text style={styles.obervationchecklist}>
            NO VISIBLE PERMANENT DISTORTION OBSERVED.
          </Text>
        </View>
      </View>
      <View style={{ marginTop: "20px", marginBottom: "10px" }}>
        <Text style={{ fontFamily: "Helvetica-Bold" }}>DECISION</Text>
      </View>
      <View>
        <View style={styles.visualrow}>
          <Text>HYDROSTATIC TEST FOUND - </Text>
          <Text style={styles.obervationchecklist}> SATISFACTORY</Text>
          {results.hyd_obs_dicision_satisfactory === "yes" ? (
            <PdfChekboxSelected />
          ) : (
            <PdfCrossCheckbox />
          )}
          <Text style={styles.obervationchecklist}> / UNSATISFACTORY</Text>
          {results.hyd_obs_dicision_unsatisfactory === "yes" ? (
            <PdfChekboxSelected />
          ) : (
            <PdfCrossCheckbox />
          )}
        </View>
        <View style={styles.visualrow}></View>
        <View style={styles.visualrow}>
          {results.hyd_obs_dicision_verifypresuretest === "yes" ? (
            <PdfChekboxSelected />
          ) : (
            <PdfCrossCheckbox />
          )}
          <Text style={styles.obervationchecklist}>
            VERIFIED PRESSURE GAUAGE (S) AFTER PRESSURE TEST.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PdfObservations1500;
