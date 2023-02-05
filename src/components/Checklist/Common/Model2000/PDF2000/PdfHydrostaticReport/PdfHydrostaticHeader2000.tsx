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
  hydreportname: {
    alignItems: "center",
    marginTop: "2px",
    fontFamily: "Helvetica-Bold",
    fontSize: "14px",
  },
});

interface props {
  items: {
    hyd_header_reportno: String;
    hyd_header_sono: String;
    hyd_header_model: String;
    hyd_header_tagno: String;
    hyd_header_mfgsrno: String;
    hyd_header_drgno: String;
    hyd_header_pdirno: String;
    header_date: String;
  };
}

const PdfHydrostaticHeader2000: React.FC<props> = ({ items }) => {
  return (
    <View break>
      <View style={styles.hydreportname}>
        <Text>HYDROSTATIC TEST REPORT</Text>
      </View>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <Text style={styles.name1}>REPORT NO</Text>
          <Text style={styles.value}>{items.hyd_header_reportno}</Text>
          <Text style={styles.name2}>DATE</Text>
          <Text style={styles.value}>{items.header_date}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name1}>S.O. NO.</Text>
          <Text style={styles.value}>{items.hyd_header_sono}</Text>
          <Text style={styles.name2}>MFG. SR. NO.</Text>
          <Text style={styles.value}>{items.hyd_header_mfgsrno}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name1}>MODEL</Text>
          <Text style={styles.value}>{items.hyd_header_model}</Text>
          <Text style={styles.name2}>TAG NO.</Text>
          <Text style={styles.value}>{items.hyd_header_tagno}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name1}>DRG. NO/REV NO.</Text>
          <Text style={styles.value}>{items.hyd_header_drgno}</Text>
          <Text style={styles.name2}>PDIR NO.</Text>
          <Text style={styles.value}>{items.hyd_header_pdirno}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name1}>CUSTOMER</Text>
          <Text style={styles.value}>CUMMINS INDIA LIMITED</Text>
          <Text style={styles.name2}></Text>
          <Text style={styles.value}></Text>
        </View>
      </View>
    </View>
  );
};

export default PdfHydrostaticHeader2000;
