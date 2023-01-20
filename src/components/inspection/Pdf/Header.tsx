import React from "react";
import logo from "./tranter.jpg";
// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { StyleSheet, Text, View, Image, Font } from "@react-pdf/renderer";

//header
Font.register({
  family: "Open Sans",
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});
Font.register({
  family: "Kalam",
  src: `/fonts/kalam.regular.ttf`,
});

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

const Header: React.FC = () => {
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
              <Text>INSPECTION REPORT</Text>
            </View>
          </View>
          <View style={styles.nuberDateView}>
            <View style={styles.numberView}>
              <Text>TIPL/IR/Mgf Sr.No./01</Text>
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

export default Header;
