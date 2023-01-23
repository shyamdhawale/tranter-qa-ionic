import React from "react";
import logo from "./tranter.jpg";
// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { StyleSheet, Text, View, Image } from "@react-pdf/renderer";

//header

const styles = StyleSheet.create({
  logo: {
    // marginTop: 20,
    // width: ,
    height: 40,
    // marginLeft: 'auto',
    // marginRight: 'auto'
  },
  container: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderRight: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  logoColumn: {
    width: "30%",
    flexDirection: "column",
    // flexGrow: 6,
    // borderBottomWidth: 1,
    // borderRight: 1,
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    padding: "2 5 1 5",
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
  },
  titleView: {
    flexDirection: "column",
    textAlign: "center",
    fontWeight: "extrabold",
    fontFamily: "Helvetica-Bold",
    width: "280px",
    borderRight: 1,
    borderLeft: 1,
  },
  companyTitle: {
    fontSize: "18px",
    borderBottom: 1,
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  reportName: {
    fontSize: "12px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  nuberDateView: {
    width: "120px",
  },
  numberView: {
    paddingTop: "15px",
    paddingLeft: "2px",
    paddingBottom: "14.05px",
  },
  dateView: {
    borderTop: 1,
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "2px",
  },
  fillColorOne: {
    backgroundColor: "#CA3152",

    width: "100%",
    height: "10px",
  },
  fillColorTwo: {
    backgroundColor: "#106D88",
    width: "100%",
    height: "15px",
  },
});

const Header1500: React.FC = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.logoColumn}>
            <Image style={styles.logo} src={logo} />
          </View>
          <View style={styles.titleView}>
            <View style={styles.companyTitle}>
              <Text>TRANTER INDIA PVT LTD</Text>
            </View>
            <View style={styles.reportName}>
              <Text>PRE DESPATCH INSPECTION REPORT</Text>
            </View>
          </View>
          <View style={styles.nuberDateView}>
            <View style={styles.numberView}>
              <Text>REPORT NO.: TIPL/CUMMINS/01</Text>
            </View>
            <View style={styles.dateView}>
              <Text>Date: </Text>
            </View>
          </View>
        </View>
        <View style={styles.fillColorOne}></View>
        <View style={styles.fillColorTwo}></View>
      </View>
    </View>
  );
};

export default Header1500;
