import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const remarks = [
  {
    srno: 2,
    name: "WELDING: FOUND SATISFACTORY.",
  },
  {
    srno: 3,
    name: "PAINT- ONE COAT OF ZINC CHROMATE PRIMER & TWO COATS OF ONAN GREEN SHADE; TOTAL DFT: 100-130 DFT",
  },
  {
    srno: 4,
    name: "PART NO.NAME PLATE & LOGO: FOUND OK",
  },
  {
    srno: 5,
    name: "TANK MOUNTING BOLTS WITH SPRING WASHERS",
  },
  {
    srno: 6,
    name: "CONNECTION STICKER : FOUND OK",
  },
  {
    srno: 7,
    name: "NUT/ BOLT: FREE FROM RUST & TIGHTNED PROPERLY, PAINT MARKING DONE.",
  },
  {
    srno: 8,
    name: "NOZZLE END: OIL APPLIED INSIDE OF CS PIPE.",
  },
  {
    srno: 9,
    name: "GASKET FOR PHE CONNECTIONS: CHECKED & FOUND OK- NO LEAKAGE OBSERVED THROUGH GASKET.",
  },
  {
    srno: 10,
    name: "TEMP & GAUGE FOUND OK & PRESSURE GAUGE FOUND OK ( ALL GAUGES AVAILABLE )",
  },
  {
    srno: 11,
    name: "TIGHTINING FOUND OK.",
  },
  {
    srno: 12,
    name: "BUTTERFLY VALVE SIZE: 4 INCH VERIFIED OK.",
  },
  {
    srno: 13,
    name: "TEST PRESSURE 16.0 BAR REFER ATTACHED HYDROSTATIC TEST REPORT.",
  },
  {
    srno: 14,
    name: "RADIATION CONTAMINATION MONITORING CHECKED & FOUND NO RADITION FROM EQUIPMENT.",
  },
  {
    srno: 15,
    name: "1 NO. OF LADDER IS PROVIDED",
  },
  {
    srno: 16,
    name: "CONTROL PANNEL IS ALSO ATTACHED.",
  },
];

const styles = StyleSheet.create({
  title: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    marginTop: "10px",
    marginBottom: "10px",
  },
  container: {
    flexDirection: "row",

    borderBottomWidth: 1,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    // fontFamily: "Helvetica-Bold",
    alignItems: "center",
    fontSize: "8px",
    // textAlign: "center",

    // height: "20px",
  },
  containertop: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontSize: "8px",
  },
  srnumber: {
    width: "5%",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    textAlign: "center",
    height: "16px",
    alignItems: "center",
  },
  name: {
    width: "95%",
    paddingLeft: "1%",
    height: "16px",
    alignItems: "center",
  },
});

const Remarks500: React.FC = () => {
  return (
    <View break>
      <View style={styles.title}>
        <Text>* REMARKS:</Text>
      </View>
      <View style={styles.containertop}>
        <Text style={styles.srnumber}>1</Text>
        <Text style={styles.name}>
          VISUAL INSPECTION: NO BURR, NO MARKS, NO CRACKS OBSERVED.
        </Text>
      </View>
      {remarks.map((item) => (
        <View key={item.srno} style={styles.container}>
          <Text style={styles.srnumber}>{item.srno}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Remarks500;
