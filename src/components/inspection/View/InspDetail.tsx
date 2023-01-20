import { IonButton, IonContent, IonGrid, IonPage } from "@ionic/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

const InspDetail: React.FC = () => {
  const location = useLocation();

  const [inspeDetail, setInspeDetail] = useState([
    {
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
    },
  ]);

  const lastPath = location.pathname.split("/")[2]; // get only last params

  useEffect(() => {
    axios
      .get(
        "http://" + process.env.REACT_APP_URL + "/api/inspection/" + lastPath
      )
      .then((res) => {
        setInspeDetail([res.data.data]);
      })
      .catch((err) => console.log(err));
  }, [lastPath]);
  console.log(inspeDetail);
  return (
    <>
      <table>
        <caption className="ion-padding">
          <h2>
            <strong>INSPECTION REPORT</strong>{" "}
          </h2>
        </caption>

        <tbody>
          <tr>
            <th>Client</th>
            <td>{inspeDetail[0].client}</td>
            <th>Po No.</th>
            <td>{inspeDetail[0].pono}</td>
          </tr>
          <tr>
            <th>Serial No.</th>
            <td>{inspeDetail[0].serialnumber}</td>
            <th>Date</th>
            <td>{inspeDetail[0].date}</td>
          </tr>
          <tr>
            <th>Model</th>
            <td>{inspeDetail[0].model}</td>
            <th>MFG. SR. No.</th>
            <td>{inspeDetail[0].mfgsrno}</td>
          </tr>
          <tr>
            <th>TAG No.</th>
            <td>{inspeDetail[0].tagnumber}</td>
            <th>QAP No.</th>
            <td>{inspeDetail[0].qapnumber}</td>
          </tr>
          <tr>
            <th>Drg. No.</th>
            <td>{inspeDetail[0].drgnumber}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption className="ion-padding">
          <h3>Material Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Sr. No</th>
            <th>Material Discription</th>
            <th>MOC</th>
            <th>HEAT NO</th>
            <th>MTC NO</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Frame Plate</td>
            <td>{inspeDetail[0].materialmoc_1}</td>
            <td>{inspeDetail[0].materialheatno_1}</td>
            <td>{inspeDetail[0].materialmtcno_1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pressure Plate</td>
            <td>{inspeDetail[0].materialmoc_2}</td>
            <td>{inspeDetail[0].materialheatno_2}</td>
            <td>{inspeDetail[0].materialmtcno_2}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Heat Transfer Plate</td>
            <td>{inspeDetail[0].materialmoc_3}</td>
            <td>{inspeDetail[0].materialheatno_3}</td>
            <td>{inspeDetail[0].materialmtcno_3}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Tightening Bolt + Nut</td>
            <td>{inspeDetail[0].materialmoc_4}</td>
            <td>{inspeDetail[0].materialheatno_4}</td>
            <td>{inspeDetail[0].materialmtcno_4}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nozzle Pipe</td>
            <td>{inspeDetail[0].materialmoc_5}</td>
            <td>{inspeDetail[0].materialheatno_5}</td>
            <td>{inspeDetail[0].materialmtcno_5}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Nozzle Flanges</td>
            <td>{inspeDetail[0].materialmoc_6}</td>
            <td>{inspeDetail[0].materialheatno_6}</td>
            <td>{inspeDetail[0].materialmtcno_6}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>
          <h3>Dimention Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Sr. No</th>
            <th>Description</th>
            <th>Dimention Reqd. (mm)</th>
            <th>Dimention Observed (mm)</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Frame Plate</td>
            <td>{inspeDetail[0].dimentionreq_1}</td>
            <td>{inspeDetail[0].dimentionobserved_1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pressure Plate</td>
            <td>{inspeDetail[0].dimentionreq_2}</td>
            <td>{inspeDetail[0].dimentionobserved_2}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>No. Of Heat Transfer Plate</td>
            <td>{inspeDetail[0].dimentionreq_3}</td>
            <td>{inspeDetail[0].dimentionobserved_3}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Length Of Plate Pack 'A' Max /'A'Min</td>
            <td>{inspeDetail[0].dimentionreq_4}</td>
            <td>{inspeDetail[0].dimentionobserved_4}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Inlet/Outlet Connection Details</td>
            <td>{inspeDetail[0].dimentionreq_5}</td>
            <td>{inspeDetail[0].dimentionobserved_5}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>P.C.D.X.I.D.X no. Of Stud"</td>
            <td>{inspeDetail[0].dimentionreq_6}</td>
            <td>{inspeDetail[0].dimentionobserved_6}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Distance Of Nozzle Dimensions (Horizontal / Vertical)</td>
            <td>{inspeDetail[0].dimentionreq_7}</td>
            <td>{inspeDetail[0].dimentionobserved_7}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Tightening bolts Size</td>
            <td>{inspeDetail[0].dimentionreq_8}</td>
            <td>{inspeDetail[0].dimentionobserved_8}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>No.Of Bolts</td>
            <td>{inspeDetail[0].dimentionreq_9}</td>
            <td>{inspeDetail[0].dimentionobserved_9}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Foundation Details</td>
            <td>{inspeDetail[0].dimentionreq_10}</td>
            <td>{inspeDetail[0].dimentionobserved_10}</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Total Length / Height / Width of PHE</td>
            <td>{inspeDetail[0].dimentionreq_11}</td>
            <td>{inspeDetail[0].dimentionobserved_11}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>
          <h3>Hydro Test Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Procedure No</th>
            <td>{inspeDetail[0].hyrodprocedureno}</td>
            <th>Test Pressure Required</th>
            <td>{inspeDetail[0].hydrotestpressurereqd}</td>
          </tr>
          <tr>
            <th>Pressure Gauge No.</th>
            <td>{inspeDetail[0].hydropressureguageno}</td>
            <th>Certificate No.</th>
            <td>{inspeDetail[0].hydrocertificateno}</td>
          </tr>
          <tr>
            <th>Pressure Hot Side</th>
            <td>{inspeDetail[0].hydropressurehotside}</td>
            <th>Obs. Pressure</th>
            <td>{inspeDetail[0].hydroobspressue_1}</td>
          </tr>
          <tr>
            <th>Duration Cold Side</th>
            <td>{inspeDetail[0].hydropressurecoldside}</td>
            <th>Obs. Pressure</th>
            <td>{inspeDetail[0].hydroobspressue_2}</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>{inspeDetail[0].hydroduration}</td>
            <th>Obs</th>
            <td>{inspeDetail[0].hydroduration_obs}</td>
          </tr>
          <tr>
            <th>Result</th>
            <td>{inspeDetail[0].hydroresult}</td>
            <th>Accepted</th>
            <td>{inspeDetail[0].hydrodaccepted}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>
          <h3>Painting Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Painting</th>
            <th>Shot Blasting</th>
            <th>Primer</th>
            <th>Final Preparation</th>
            <th>Total DFT</th>
          </tr>
          <tr>
            <td>Required</td>
            <td>As per SA 2.5 Grade</td>
            <td>{inspeDetail[0].paitingprimer_1}</td>
            <td>{inspeDetail[0].paintingfinalpre_1}</td>
            <td>{inspeDetail[0].paintingdft_1}</td>
          </tr>
          <tr>
            <td>Observed</td>
            <td>Satisfactory</td>
            <td>{inspeDetail[0].paitingprimer_2}</td>
            <td>{inspeDetail[0].paintingfinalpre_2}</td>
            <td>{inspeDetail[0].paintingdft_2}</td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: "2rem" }}></div>
    </>
  );
};

export default InspDetail;
