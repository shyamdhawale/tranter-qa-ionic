import React from "react";
import logo from "./tranter.jpg";
// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { StyleSheet, Text, View, Image } from "@react-pdf/renderer";

//header

const styles = StyleSheet.create({
  // logo: {
  //   // marginTop: 20,
  //   // width: ,
  //   height: 40,
  //   // marginLeft: 'auto',
  //   // marginRight: 'auto'
  // },
  // container: {
  //   flexDirection: "column",
  //   borderBottomWidth: 1,
  //   borderRight: 1,
  //   borderTopWidth: 1,
  //   borderLeftWidth: 1,
  // },
  // logoColumn: {
  //   width: "30%",
  //   flexDirection: "column",
  //   // flexGrow: 6,
  //   // borderBottomWidth: 1,
  //   // borderRight: 1,
  //   // borderTopWidth: 1,
  //   // borderLeftWidth: 1,
  //   padding: "2 5 1 5",
  //   fontSize: 12,
  //   fontFamily: "Helvetica-Bold",
  // },
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
  // reportName: {
  //   fontSize: "12px",
  //   paddingTop: "10px",
  //   paddingBottom: "10px",
  // },
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
  page: {
    flexDirection: "column",
    // paddingTop: "2%",
    // padding: "5%"
    padding: 20,
    fontSize: 10,

    // bottom: 30,
    // paddingRight: 12,
  },
  logo: {
    // marginTop: 20,
    width: 150,
    // height: 40,
    // marginLeft: 'auto',
    // marginRight: 'auto'
  },
  container: {
    flexDirection: "row",
  },
  logoColumn: {
    width: "50%",
    flexDirection: "column",
    // flexGrow: 6,
    borderBottomWidth: 1,
    borderRight: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    padding: "2 5 1 5",
    fontFamily: "Helvetica-Bold",
  },
  dataColumn: {
    flexDirection: "column",
    // alignSelf: 'flex-start',
    // flexGrow: 6,
    width: "50%",
  },
  dataRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  reportName: {
    width: "50%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    borderTopWidth: 1,
    padding: "1 5 1 5",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    height: 20,
  },
  reportValue: {
    width: "50%",
    borderRightWidth: 1,
    borderTopWidth: 1,
    padding: "1 5 1 5",
    fontSize: 10,

    // height: 20
  },
  name: {
    width: "50%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    // fontSize: 10,
    height: 20,
    fontFamily: "Helvetica-Bold",
  },
  value: {
    width: "50%",
    borderRightWidth: 1,
    fontSize: 10,

    padding: "1 5 1 5",
    // height: 20
  },
  // pagenumber: {
  //   position: "absolute",
  //   // fontFamily: "Kalam",
  //   // fontSize: 14,
  //   textAlign: "center",
  //   // color: "grey"
  // },
});

const Header500: React.FC = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.logoColumn}>
          {/* <Image style={styles.logo} src={logo} /> */}
          <Text>PRE-DESPATCH INSPECTION CHECKLIST</Text>
        </View>
        <View style={styles.dataColumn}>
          <View style={styles.dataRow}>
            <Text style={styles.reportName}>REPORT NO.</Text>
            <Text style={styles.reportValue}>TIPL/CUMMINS/132076/01</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.name}>DATE</Text>
            <Text style={styles.value}>20.05.2022</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.name}>PAGE</Text>
            <Text
              style={styles.value}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} of ${totalPages}`
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header500;
