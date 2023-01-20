import React from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainView: {
    marginTop: "20px",
    borderTop: 1,
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

const ReportHeaderRow1250: React.FC<props> = ({ items }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.row}>
        <Text style={styles.name1}>Supplier</Text>
        <Text style={styles.value}>{items.supplier}</Text>
        <Text style={styles.name2}>Customer</Text>
        <Text style={styles.value}>{items.customer}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>Vendor Code</Text>
        <Text style={styles.value}>{items.vendorcode}</Text>
        <Text style={styles.name2}>Classification</Text>
        <Text style={styles.value}>{items.classification}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>Part Name</Text>
        <Text style={styles.value}>{items.partname}</Text>
        <Text style={styles.name2}>Critical</Text>
        <Text style={styles.value}>{items.critical}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>Part No.</Text>
        <Text style={styles.value}>{items.partno}</Text>
        <Text style={styles.name2}>Major</Text>
        <Text style={styles.value}>{items.major}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>MFG.Sr.No.</Text>
        <Text style={styles.value}>{items.mfgsrno}</Text>
        <Text style={styles.name2}>Minor</Text>
        <Text style={styles.value}>{items.minor}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>DRG.No.</Text>
        <Text style={styles.value}>{items.drgno}</Text>
        <Text style={styles.name2}></Text>
        <Text style={styles.value}> </Text>
      </View>
    </View>
  );
};

export default ReportHeaderRow1250;