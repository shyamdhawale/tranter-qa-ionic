import React from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainView: {
    // marginTop: "20px",
    // borderTop: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // borderBottomColor: '#bff0fd',

    borderBottomWidth: 1,
    // border: 1
  },
  name1: {
    width: "25%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Helvetica-Bold",

    height: 15,
  },
  name2: {
    width: "25%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Helvetica-Bold",

    height: 15,
  },
  value: {
    width: "25%",
    borderRightWidth: 1,
    fontSize: "10px",
    padding: "1 5 1 5",
    height: 15,
  },
  logo: {
    width: "50%",
    // padding: "1 5 1 5",
    height: 15,
  },
});

interface props {
  items: {
    customer: String;
    supplier: String;
    vendorcode: String;
    classification: String;
    partname: String;
    critical: String;
    partno: String;
    major: String;
    mfgsrno: String;
    minor: String;
    drgno: String;
  };
}

const ReportHeaderRow1500: React.FC<{ mfgsrno: String }> = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.row}>
        <Text style={styles.name1}>SUPPLIER</Text>
        <Text style={styles.value}>TRANTER INDIA PVT. LTD.</Text>
        <Text style={styles.name2}>CUSTOMER</Text>
        <Text style={styles.value}>CUMMINS INDIA LTD</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>VENDOR CODE:</Text>
        <Text style={styles.value}>160522</Text>
        <Text style={styles.name2}>CLASSIFICATION</Text>
        <Text style={styles.value}>1500 KVA</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>PART NAME</Text>
        <Text style={styles.value}>PLATE HEAT EXCHANGER</Text>
        <Text style={styles.name2}>CRITICAL</Text>
        <Text style={styles.value}>C</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>PART NO.</Text>
        <Text style={styles.value}>5279836</Text>
        <Text style={styles.name2}>PART REVISION</Text>
        <Text style={styles.value}>3</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>MFG. SR.NO</Text>
        <Text style={styles.value}>{props.mfgsrno}</Text>
        <Text style={styles.name2}>MINOR</Text>
        <Text style={styles.value}>M1</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>DRG. NO.</Text>
        <Text style={styles.value}>GA/KTA50_G8/01 REV. 18</Text>
        <Text style={styles.name2}>MINOR</Text>
        <Text style={styles.value}>M2 </Text>
      </View>
    </View>
  );
};

export default ReportHeaderRow1500;
