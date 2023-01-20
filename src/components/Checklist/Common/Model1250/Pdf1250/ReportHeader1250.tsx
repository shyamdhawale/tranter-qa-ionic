import React from "react";
import { StyleSheet, Text, View, Image, Font } from "@react-pdf/renderer";
// import ReportHeaderRow from "./ReportHeaderRow";

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderRight: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },

  titleView: {
    flexDirection: "column",
    textAlign: "center",
    fontWeight: "extrabold",
    fontFamily: "Lato Bold",
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

const ReportHeader1250: React.FC = () => {
  return <div></div>;
};

export default ReportHeader1250;
