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
    client: String;
    pono: String;
    serialnumber: String;
    model: String;
    mfgsrno: String;
    tagnumber: String;
    qapnumber: String;
    drgnumber: String;
    date: String;
  };
}

const ReportHeaderRow: React.FC<props> = ({ items }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.row}>
        <Text style={styles.name1}>Client</Text>
        <Text style={styles.value}>{items.client}</Text>
        <Text style={styles.name2}>PO Number</Text>
        <Text style={styles.value}>{items.pono}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>SERIAL NO.</Text>
        <Text style={styles.value}>{items.serialnumber}</Text>
        <Text style={styles.name2}>MODEL</Text>
        <Text style={styles.value}>{items.model}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>MFG.SR. NO.</Text>
        <Text style={styles.value}>{items.mfgsrno}</Text>
        <Text style={styles.name2}>TAG No.</Text>
        <Text style={styles.value}>{items.tagnumber}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name1}>QAP NO.</Text>
        <Text style={styles.value}>{items.qapnumber}</Text>
        <Text style={styles.name2}>Drg. No.</Text>
        <Text style={styles.value}>{items.drgnumber}</Text>
      </View>
    </View>
  );
};

export default ReportHeaderRow;
