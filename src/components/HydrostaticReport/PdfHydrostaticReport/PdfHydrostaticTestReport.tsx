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
    reportno: String;
    date: String;
    sono: String;
    mfgsrno: String;
    model: String;
    tagno: String;
    drgno: String;
    pdirno: String;
    customer: String;
  };
}

const PdfHydrostaticTestReport: React.FC<props> = ({ items }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.row}>
        <Text style={styles.name1}>REPORT NO</Text>
        <Text style={styles.value}>{items.reportno}</Text>
        <Text style={styles.name2}>DATE</Text>
        <Text style={styles.value}>{items.date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>S.O. NO.</Text>
        <Text style={styles.value}>{items.sono}</Text>
        <Text style={styles.name2}>MFG. SR.NO.</Text>
        <Text style={styles.value}>{items.mfgsrno}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>MODEL</Text>
        <Text style={styles.value}>{items.sono}</Text>
        <Text style={styles.name2}>TAG NO.</Text>
        <Text style={styles.value}>{items.mfgsrno}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>DRG. NO/REV NO.</Text>
        <Text style={styles.value}>{items.drgno}</Text>
        <Text style={styles.name2}>PDIR NO.</Text>
        <Text style={styles.value}>{items.pdirno}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>CUSTOMER</Text>
        <Text style={styles.value}>CUMMINS INDIA LIMITED</Text>
      </View>
    </View>
  );
};

export default PdfHydrostaticTestReport;
