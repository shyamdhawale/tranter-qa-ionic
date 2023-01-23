import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { PDFViewer, View } from "@react-pdf/renderer";

import { Page, Document, StyleSheet, Font, Image } from "@react-pdf/renderer";
import Header500 from "./Header500";
import Chracteristics500 from "./Chracteristics500";
import ReportHeaderRow500 from "./ReportHeaderRow500";

import logo from "./tranter.png";

//header

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    // paddingTop: "2%",
    // padding: "5%"
    padding: 12,
    fontSize: 10,

    fontFamily: "Helvetica",
    // bottom: 30,
    // paddingRight: 12,
  },
});

const PdfView500: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [resultsDetail, setresultsDetail] = useState<{
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
    actualresult_1: String;
    actualresult_2: String;
    actualresult_3: String;
    actualresult_4: String;
    actualresult_5: String;
    actualresult_6: String;
    actualresult_7: String;
    actualresult_8: String;
    actualresult_9: String;
    actualresult_10: String;
    actualresult_11: String;
    actualresult_12: String;
    actualresult_13: String;
    actualresult_14: String;
    actualresult_15: String;
    actualresult_16: String;
    actualresult_17: String;
    actualresult_18: String;
    actualresult_19: String;
    actualresult_20: String;
    actualresult_21: String;
    actualresult_22: String;
    actualresult_23: String;
    actualresult_24: String;
    actualresult_25: String;
    actualresult_26: String;
    actualresult_27: String;
    actualresult_28: String;
    actualresult_29: String;
    actualresult_30: String;
    actualresult_31: String;
    actualresult_32: String;
    createAt: String;
  }>({
    customer: "",
    supplier: "",
    vendorcode: "",
    classification: "",
    partname: "",
    critical: "",
    partno: "",
    major: "",
    mfgsrno: "",
    minor: "",
    drgno: "",
    actualresult_1: "",
    actualresult_2: "",
    actualresult_3: "",
    actualresult_4: "",
    actualresult_5: "",
    actualresult_6: "",
    actualresult_7: "",
    actualresult_8: "",
    actualresult_9: "",
    actualresult_10: "",
    actualresult_11: "",
    actualresult_12: "",
    actualresult_13: "",
    actualresult_14: "",
    actualresult_15: "",
    actualresult_16: "",
    actualresult_17: "",
    actualresult_18: "",
    actualresult_19: "",
    actualresult_20: "",
    actualresult_21: "",
    actualresult_22: "",
    actualresult_23: "",
    actualresult_24: "",
    actualresult_25: "",
    actualresult_26: "",
    actualresult_27: "",
    actualresult_28: "",
    actualresult_29: "",
    actualresult_30: "",
    actualresult_31: "",
    actualresult_32: "",
    createAt: "",
  });

  const lastPath = location.pathname.split("/")[2]; // get only last params

  useEffect(() => {
    setIsLoading(true);
    // axios
    //   .get(
    //     "http://" + process.env.REACT_APP_URL + "/api/inspection/" + lastPath
    //   )
    //   .then((res) => {
    //     // setresultsDetail(res.data.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => console.log(err));
  }, [lastPath]);
  //   return <></>;
  console.log(resultsDetail);
  // if (isLoading) {
  //   return <p>loading</p>;
  // }
  return (
    <PDFViewer width="100%" height="800">
      <Document>
        <Page size="A4" style={styles.page} wrap={true}>
          <View fixed>
            <Header500 />
          </View>
          <ReportHeaderRow500 items={resultsDetail} />

          <Chracteristics500 results={resultsDetail} />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfView500;
