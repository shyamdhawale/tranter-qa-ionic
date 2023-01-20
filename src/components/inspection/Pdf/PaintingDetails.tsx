import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainView: {
    marginTop: "10px",
    border: 1,
  },
  title: {
    fontSize: "16px",
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },
  deatilcontainer: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    // borderBottomColor: '#bff0fd',

    borderBottomWidth: 1,

    // border: 1
  },

  col1header: {
    // width: "12%",
    width: "60px",
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Helvetica-Bold",
    height: 13,
    borderTop: 1,
  },
  col2header: {
    // width: "20%",
    width: "120px",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTop: 1,
    padding: "1 5 1 5",
    fontFamily: "Helvetica-Bold",
    height: 13,
  },
  col3header: {
    width: "150px",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    borderTop: 1,
    fontFamily: "Helvetica-Bold",
    height: 13,
  },
  col4header: {
    width: "150px",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderTop: 1,
    padding: "1 5 1 5",
    fontFamily: "Helvetica-Bold",
    height: 13,
  },
  col5header: {
    width: "100px",
    borderRightWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Helvetica-Bold",
    height: 13,
    borderTop: 1,
  },
  col1data: {
    // width: "12%",
    width: "60px",
    borderLeftWidth: 1,
    padding: "1 5 1 5",

    height: 13,
  },
  col2data: {
    // width: "20%",
    width: "120px",
    borderLeftWidth: 1,
    padding: "1 5 1 5",

    height: 13,
  },
  col3data: {
    width: "150px",
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    height: 13,
  },
  col4data: {
    width: "150px",
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    height: 13,
  },
  col5data: {
    width: "100px",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    height: 13,
  },
});

const PaintingDetails: React.FC = () => {
  return (
    <View>
      <View style={styles.title}>
        <Text>Painting Details</Text>
      </View>
      <View style={styles.deatilcontainer}>
        <View style={styles.row}>
          <Text style={styles.col1header}>Paiting</Text>
          <Text style={styles.col2header}>Shot Blasting</Text>
          <Text style={styles.col3header}>Primer</Text>
          <Text style={styles.col4header}>Final Preparation</Text>
          <Text style={styles.col5header}>Total DFT</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.col1data}>Required</Text>
          <Text style={styles.col2data}>As per SA 2.5 Grade</Text>
          <Text style={styles.col3data}>Epoxy Primer – 75 Microns </Text>
          <Text style={styles.col4data}>PU(RAL 5012) Blue– 50 Mic.</Text>
          <Text style={styles.col5data}>125 Min. </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.col1data}>Observed</Text>
          <Text style={styles.col2data}>Satisfactory</Text>
          <Text style={styles.col3data}>80-94mic</Text>
          <Text style={styles.col4data}>50-70 mic</Text>
          <Text style={styles.col5data}>130-164mic</Text>
        </View>
      </View>
    </View>
  );
};

export default PaintingDetails;
