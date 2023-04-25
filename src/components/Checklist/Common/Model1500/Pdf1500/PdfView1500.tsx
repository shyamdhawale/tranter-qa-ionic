import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { PDFViewer } from "@react-pdf/renderer";

import { Page, Document, StyleSheet, View } from "@react-pdf/renderer";

import ChecklistSign from "../../ChecklistSign";

import Header1500 from "./Header1500";
import Chracteristics1500 from "./Characteristics1500";
import ReportHeaderRow1500 from "./ReportHeaderRow1500";
import Remarks1500 from "./Remarks1500";
import Nozzel1500 from "./Nozzel1500";
import HeaterImage1500 from "./HeaterImage1500";
import PdfHydrostaticHeader1500 from "./PdfHydrostaticReport/PdfHydrostaticHeader1500";
import PdfTestParameter1500 from "./PdfHydrostaticReport/PdfTestParameter1500";
import PdfObservations1500 from "./PdfHydrostaticReport/PdfObservations1500";

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

const PdfView1500: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [checklist, setChecklist] = useState({
    header_supplier: "",
    header_customer: "",
    header_vendorcode: "",
    header_classification: "",
    header_partname: "",
    header_critical: "",
    header_parno: "",
    header_major: "",
    header_mfgsrno: "",
    header_minor: "",
    header_drgno: "",
    header_date: "",
    header_reportno: "",
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
    actualresult_33: "",
    actualresult_34: "",
    actualresult_35: "",
    actualresult_36: "",
    hyd_header_reportno: "",
    hyd_header_mfgsrno: "",
    hyd_header_sono: "",
    hyd_header_model: "",
    hyd_header_tagno: "",
    hyd_header_drgno: "",
    hyd_header_pdirno: "",
    hyd_test_hotside_1: "",
    hyd_test_coldside_1: "",
    hyd_test_hotside_2: "",
    hyd_test_coldside_2: "",
    hyd_test_hotside_3: "",
    hyd_test_coldside_3: "",
    hyd_test_hotside_4: "",
    hyd_test_coldside_4: "",
    hyd_test_hotside_5: "",
    hyd_test_coldside_5: "",
    hyd_test_hotside_6: "",
    hyd_test_coldside_6: "",
    hyd_obs_gaugeidno_1: "",
    hyd_obs_guagerange_1: "",
    hyd_obs_calibrationvalid_1: "",
    hyd_obs_observedpressure_1: "",
    hyd_obs_gaugeidno_2: "",
    hyd_obs_guagerange_2: "",
    hyd_obs_calibrationvalid_2: "",
    hyd_obs_observedpressure_2: "",
    hyd_obs_visual_noleakobs: "",
    hyd_obs_visual_leakobs: "",
    hyd_obs_visual_novisiblepermanentobs: "",
    hyd_obs_dicision_satisfactory: "",
    hyd_obs_dicision_unsatisfactory: "",
    hyd_obs_dicision_verifypresuretest: "",

    owner: "",
    updatedbyuser: "",
    frontviewphotoid: "",
    frontviewphotofilename: "",
    sideviewphotofilename: "",
    equipmentphotoone_id: "",

    equipmentphotofilename_one: "",
    equipmentphototwo_id: "",
    equipmentphotofilename_two: "",
    createAt: "",
  });

  const lastPath = location.pathname.split("/")[4]; // get only last params in this case path 4 is require

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "http://" + process.env.REACT_APP_URL + "/api/checklist1500/" + lastPath
      )
      .then((res) => {
        setChecklist(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [lastPath]);
  //   return <></>;
  console.log(checklist);
  if (isLoading) {
    return <p>loading</p>;
  }
  return (
    <PDFViewer width="100%" height="800">
      <Document
        producer="Tranter India"
        creator="Tranter India"
        author="Tranter India"
        title="Pre-despatch inspection checklist"
      >
        <Page size="A4" style={styles.page} wrap={true}>
          <View>
            <Header1500
              reportNo={checklist.header_mfgsrno}
              headerDate={checklist.header_date}
            />
            <ReportHeaderRow1500 mfgsrno={checklist.header_mfgsrno} />
          </View>

          <Chracteristics1500 results={checklist} />
          <Nozzel1500 results={checklist} />
          <Remarks1500 />
          <ChecklistSign />
          <PdfHydrostaticHeader1500 items={checklist} />
          <PdfTestParameter1500 results={checklist} />
          <PdfObservations1500 results={checklist} />
          <HeaterImage1500 checklist={checklist} />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfView1500;
