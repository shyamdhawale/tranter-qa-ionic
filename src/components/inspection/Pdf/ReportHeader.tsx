import React from "react";
import { StyleSheet, Text, View, Image } from "@react-pdf/renderer";
import ReportHeaderRow from "./ReportHeaderRow";

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

const ReportHeader: React.FC = () => {
  return <div></div>;
};

export default ReportHeader;
