import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { PDFViewer } from "@react-pdf/renderer";

import { Page, Document, StyleSheet, Font } from "@react-pdf/renderer";
import Header from "./Header";
import ReportHeader from "./ReportHeader";
import ReportHeaderRow from "./ReportHeaderRow";
import MaterialDetails from "./MaterialDetails";
import WarrentyCondition from "./WarrentyCondition";
import DimentionDetails from "./DimentionDetails";
import PaintingDetails from "./PaintingDetails";
import HydrotestDetails from "./HydrotestDetails";

//header

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    // paddingTop: "2%",
    // padding: "5%"
    padding: 12,
    fontSize: 10,
    // fontFamily: "Lato",
    fontFamily: "Helvetica",
    // bottom: 30,
    // paddingRight: 12,
  },
});

const PdfView: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [inspeDetail, setInspeDetail] = useState<{
    client: String;
    pono: String;
    serialnumber: String;
    model: String;
    mfgsrno: String;
    tagnumber: String;
    qapnumber: String;
    drgnumber: String;
    date: String;
    materialmoc_1: String;
    materialheatno_1: String;
    materialmtcno_1: String;
    materialmoc_2: String;
    materialheatno_2: String;
    materialmtcno_2: String;
    materialmoc_3: String;
    materialheatno_3: String;
    materialmtcno_3: String;
    materialmoc_4: String;
    materialheatno_4: String;
    materialmtcno_4: String;
    materialmoc_5: String;
    materialheatno_5: String;
    materialmtcno_5: String;
    materialmoc_6: String;
    materialheatno_6: String;
    materialmtcno_6: String;
    dimentionobserved_1: String;
    dimentionreq_1: String;
    dimentionobserved_2: String;
    dimentionreq_2: String;
    dimentionobserved_3: String;
    dimentionreq_3: String;
    dimentionobserved_4: String;
    dimentionreq_4: String;
    dimentionobserved_5: String;
    dimentionreq_5: String;
    dimentionobserved_6: String;
    dimentionreq_6: String;
    dimentionobserved_7: String;
    dimentionreq_7: String;
    dimentionobserved_8: String;
    dimentionreq_8: String;
    dimentionobserved_9: String;
    dimentionreq_9: String;
    dimentionobserved_10: String;
    dimentionreq_10: String;
    dimentionobserved_11: String;
    dimentionreq_11: String;
    hyrodprocedureno: String;
    hydrotestpressurereqd: String;
    hydropressureguageno: String;
    hydrocertificateno: String;
    hydropressurehotside: String;
    hydroobspressue_1: String;
    hydropressurecoldside: String;
    hydroobspressue_2: String;
    hydroduration: String;
    hydroduration_obs: String;
    hydroresult: String;
    hydrodaccepted: String;
    paitingprimer_1: String;
    paintingfinalpre_1: String;
    paintingdft_1: String;
    paitingprimer_2: String;
    paintingfinalpre_2: String;
    paintingdft_2: String;
    createAt: String;
  }>({
    client: "",
    pono: "",
    serialnumber: "",
    date: "",
    model: "",
    mfgsrno: "",
    tagnumber: "",
    qapnumber: "",
    drgnumber: "",
    materialmoc_1: "",
    materialheatno_1: "",
    materialmtcno_1: "",
    materialmoc_2: "",
    materialheatno_2: "",
    materialmtcno_2: "",
    materialmoc_3: "",
    materialheatno_3: "",
    materialmtcno_3: "",
    materialmoc_4: "",
    materialheatno_4: "",
    materialmtcno_4: "",
    materialmoc_5: "",
    materialheatno_5: "",
    materialmtcno_5: "",
    materialmoc_6: "",
    materialheatno_6: "",
    materialmtcno_6: "",
    dimentionobserved_1: "",
    dimentionreq_1: "",
    dimentionobserved_2: "",
    dimentionreq_2: "",
    dimentionobserved_3: "",
    dimentionreq_3: "",
    dimentionobserved_4: "",
    dimentionreq_4: "",
    dimentionobserved_5: "",
    dimentionreq_5: "",
    dimentionobserved_6: "",
    dimentionreq_6: "",
    dimentionobserved_7: "",
    dimentionreq_7: "",
    dimentionobserved_8: "",
    dimentionreq_8: "",
    dimentionobserved_9: "",
    dimentionreq_9: "",
    dimentionobserved_10: "",
    dimentionreq_10: "",
    dimentionobserved_11: "",
    dimentionreq_11: "",
    hyrodprocedureno: "",
    hydrotestpressurereqd: "",
    hydropressureguageno: "",
    hydrocertificateno: "",
    hydropressurehotside: "",
    hydroobspressue_1: "",
    hydropressurecoldside: "",
    hydroobspressue_2: "",
    hydroduration: "",
    hydroduration_obs: "",
    hydroresult: "",
    hydrodaccepted: "",
    paitingprimer_1: "",
    paintingfinalpre_1: "",
    paintingdft_1: "",
    paitingprimer_2: "",
    paintingfinalpre_2: "",
    paintingdft_2: "",
    createAt: "",
  });

  const lastPath = location.pathname.split("/")[2]; // get only last params

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "http://" + process.env.REACT_APP_URL + "/api/inspection/" + lastPath
      )
      .then((res) => {
        setInspeDetail(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [lastPath]);
  //   return <></>;
  console.log(inspeDetail);
  // if (isLoading) {
  //   return <p>loading</p>;
  // }
  return (
    <PDFViewer width="100%" height="800">
      <Document>
        <Page size="A4" style={styles.page} wrap={true}>
          <Header />
          <ReportHeaderRow items={inspeDetail} />
          <MaterialDetails material={inspeDetail} />
          <DimentionDetails material={inspeDetail} />
          <HydrotestDetails />
          <PaintingDetails />
          <WarrentyCondition />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfView;
