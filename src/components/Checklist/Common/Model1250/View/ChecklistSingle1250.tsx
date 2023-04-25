import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { IonRow, IonText, IonGrid } from "@ionic/react";

import "../../../../../theme/custom.css";
import ChecklistPhotoView from "./ChecklistPhotoView";

const ChecklistSingle1250 = () => {
  const location = useLocation();
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
    hyd_header_sono: "",
    hyd_header_model: "",
    hyd_header_tagno: "",
    hyd_header_mfgsrno: "",
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
  const lastPath = location.pathname.split("/")[4]; // get only last params

  useEffect(() => {
    axios
      .get(
        "http://" + process.env.REACT_APP_URL + "/api/checklist1250/" + lastPath
      )
      .then((res) => {
        // console.log(res);
        setChecklist(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [lastPath]);

  return (
    <IonGrid style={{ margin: "10px" }}>
      <table style={{ paddingTop: "10px" }}>
        <caption className="ion-padding">
          <h2>
            <strong>Pre-Despatch Inspection Checklist 1250KVA</strong>
          </h2>
        </caption>
        <tbody>
          <tr>
            <th>MFG. Sr. No.</th>
            <td>{checklist.header_mfgsrno}</td>
            <th>Date</th>
            <td>{checklist.header_date}</td>
          </tr>
        </tbody>
      </table>
      <div style={{ paddingTop: "15px" }}>
        <table>
          <tbody>
            <tr>
              <th>Sr. No</th>
              <th>Characteristics</th>
              <th>Dimention Reqd. (mm)</th>
              <th>Actual Results</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Total Height of Skid</td>
              <td>
                2140<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_1}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Overall Width of Skid</td>
              <td>
                1085<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_2}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Main Frame Height</td>
              <td>
                1585<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_3}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Width of Frame</td>
              <td>
                850<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_4}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Length of Frame</td>
              <td>
                1228<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_5}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Height of Raw Outlet Pipe From Base</td>
              <td>
                1099<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_6}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Height From Base To Horizontal Angle(50x6))</td>
              <td>
                715<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_7}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Height From Base To Side Support Angle(50x50x5)</td>
              <td>
                918<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_8}</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Distance From Base To Upper Angle(50x6)</td>
              <td>
                1028.5<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_9}</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Centre Distance of Pressure Tank From Frame</td>
              <td>
                375<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_10}</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Centre Distance of Pressure Tank From Base</td>
              <td>
                1850<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_11}</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Centre Cap Elevation From Pressure Tank End</td>
              <td>
                157<sup>±2</sup>
              </td>
              <td>{checklist.actualresult_12}</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Tapping Holes On Drum</td>
              <td>1/4 Inch NPT 10 Places</td>
              <td>{checklist.actualresult_13}</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Centre To Centre Distance Between Adjacent Cap</td>
              <td>
                300 <sup>±3</sup> / 400 <sup>±3</sup>155
              </td>
              <td>{checklist.actualresult_14}</td>
            </tr>
            <tr>
              <td>15</td>
              <td>No of Eye Bolts/CRS Distance</td>
              <td>
                4/1178 <sup>±4</sup> X 750 <sup>±4</sup>
              </td>
              <td>{checklist.actualresult_15}</td>
            </tr>

            <tr>
              <td>16</td>
              <td>First Foundation Slot Elevation & CRS Distance</td>
              <td>
                225 <sup>±3</sup> / 200 <sup>±2</sup>
              </td>
              <td>{checklist.actualresult_16}</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Number Of Slots/Size</td>
              <td>6 Nos./ Dia. 14X34</td>
              <td>{checklist.actualresult_17}</td>
            </tr>
            <tr>
              <td>18</td>
              <td>
                LTA & HTA Coolers Frame Plate Elevation From Front of Skid Frame
              </td>
              <td>
                330<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_18}</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Distance From Front Base Channel To Frame Plates</td>
              <td>
                330<sup>±3</sup> (105+225)
              </td>
              <td>{checklist.actualresult_19}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>HTA COOLER (Model No. GC-026X26)</strong>
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Pack Length (HTA)</td>
              <td>
                117<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_20}</td>
            </tr>
            <tr>
              <td>21</td>
              <td>Nozzle Center To Center Length</td>
              <td>779</td>
              <td>{checklist.actualresult_21}</td>
            </tr>
            <tr>
              <td>22</td>
              <td>Nozzle Center To Center Width</td>
              <td>230</td>
              <td>{checklist.actualresult_22}</td>
            </tr>
            <tr>
              <td>23</td>
              <td>Nozzle Size/PCD</td>
              <td>OD 100/ 190.5</td>
              <td>{checklist.actualresult_23}</td>
            </tr>
            <tr>
              <td>24</td>
              <td>Height From Base To M2 Centre (Cold Water Outlet)</td>
              <td>
                320 <sup>±3</sup>
              </td>
              <td>{checklist.actualresult_24}</td>
            </tr>
            <tr>
              <td>25</td>
              <td>Tapping Hole On Pipe Raw Water Outlet</td>
              <td>1/2 Inch NPT 5 Places</td>
              <td>{checklist.actualresult_25}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>LTA COOLER (Model No. GX-004X39)</strong>
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Pack Length (LTA)</td>
              <td>
                133<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_26}</td>
            </tr>
            <tr>
              <td>27</td>
              <td>Nozzle Center To Center Length</td>
              <td>303</td>
              <td>{checklist.actualresult_27}</td>
            </tr>
            <tr>
              <td>28</td>
              <td>Nozzle Center To Center Width</td>
              <td>135</td>
              <td>{checklist.actualresult_28}</td>
            </tr>
            <tr>
              <td>29</td>
              <td>Nozzle Size</td>
              <td>OD 38.1</td>
              <td>{checklist.actualresult_29}</td>
            </tr>
            <tr>
              <td>30</td>
              <td>Height From Base To Centre Of Pipe Raw Water Inlet(LTA)</td>
              <td>
                623 <sup>±3</sup> (320+303)
              </td>
              <td>{checklist.actualresult_30}</td>
            </tr>
            <tr>
              <td>31</td>
              <td>Tapping Hole On HTA LTA Interconnecting Pipe</td>
              <td>1/8 Inch NPT 4 Places</td>
              <td>{checklist.actualresult_31}</td>
            </tr>
            <tr>
              <td>32</td>
              <td>
                Distance From Front End To Center Of Make Pipe (38 Od) Of Tank
              </td>
              <td>
                270 <sup>±3</sup>
              </td>
              <td>{checklist.actualresult_32}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ paddingTop: "15px" }}>
        <table>
          <tbody>
            <tr>
              <th>REPORT NO</th>
              <td></td>
              <th>Date</th>
              <td></td>
            </tr>
            <tr>
              <th>S.O. NO.</th>
              <td></td>
              <th>MFG. SR.NO.</th>
              <td></td>
            </tr>
            <tr>
              <th>MODEL</th>
              <td></td>
              <th>TAG NO.</th>
              <td></td>
            </tr>
            <tr>
              <th>DRG. NO/REV NO.</th>
              <td></td>
              <th>PDIF NO.</th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ paddingTop: "15px" }}>
        <table>
          <tbody>
            <tr>
              <th>Test Parameters</th>
              <th>Hot Side</th>
              <th>Cold Side</th>
            </tr>
            <tr>
              <td>Design Pressure</td>
              <td>{checklist.hyd_test_hotside_1}</td>
              <td>{checklist.hyd_test_coldside_1}</td>
            </tr>
            <tr>
              <td>Hydrostatic Test Pressure</td>
              <td>{checklist.hyd_test_hotside_2}</td>
              <td>{checklist.hyd_test_coldside_2}</td>
            </tr>
            <tr>
              <td>Test Medium</td>
              <td>{checklist.hyd_test_hotside_3}</td>
              <td>{checklist.hyd_test_coldside_3}</td>
            </tr>
            <tr>
              <td>Material Temprature</td>
              <td>{checklist.hyd_test_hotside_4}</td>
              <td>{checklist.hyd_test_coldside_4}</td>
            </tr>
            <tr>
              <td>Holding Time</td>
              <td>{checklist.hyd_test_hotside_5}</td>
              <td>{checklist.hyd_test_coldside_5}</td>
            </tr>
            <tr>
              <td>Test Position</td>
              <td>{checklist.hyd_test_hotside_6}</td>
              <td>{checklist.hyd_test_coldside_6}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <caption>
            <h3>OBSERVATIONS:</h3>
          </caption>
          <tbody>
            <tr>
              <th>HYDRO SIDE</th>
              <th>GAUGE ID NO.</th>
              <th>
                GAUGE RANGE KG/CM<sup>2</sup>{" "}
              </th>
              <th>CALIBRATION VALID UPTO</th>
              <th>
                OBSERVED PRESSURE KG/CM<sup>2</sup>
              </th>
            </tr>

            <tr>
              <td>
                <b>Hot Side</b>
              </td>
              <td>
                <IonText>{checklist.hyd_obs_gaugeidno_1}</IonText>
              </td>
              <td>
                <IonText>{checklist.hyd_obs_guagerange_1}</IonText>
              </td>
              <td>
                <IonText>{checklist.hyd_obs_calibrationvalid_1}</IonText>
              </td>
              <td>
                <IonText>{checklist.hyd_obs_observedpressure_1}</IonText>
              </td>
            </tr>
            <tr>
              <td>
                <b>Cold Side</b>
              </td>
              <td>
                <IonText>{checklist.hyd_obs_gaugeidno_2}</IonText>
              </td>
              <td>
                <IonText>{checklist.hyd_obs_guagerange_2}</IonText>
              </td>
              <td>
                <IonText>{checklist.hyd_obs_calibrationvalid_2}</IonText>
              </td>
              <td>
                <IonText>{checklist.hyd_obs_observedpressure_2}</IonText>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>
            <h6>VISUAL INSPECTION: </h6>
          </caption>
          <tbody>
            <tr>
              <td>
                <IonRow className="visualCheckbox">
                  <IonText style={{ marginLeft: "10px", marginRight: "10px" }}>
                    NO LEAKAGES OBSERVED: -
                  </IonText>
                  {/* <IonCheckbox checked></IonCheckbox> */}
                  <IonText>
                    <strong>{checklist.hyd_obs_visual_noleakobs}</strong>
                  </IonText>
                </IonRow>
                <IonRow className="visualCheckbox">
                  <IonText style={{ marginLeft: "10px", marginRight: "10px" }}>
                    LEAKAGES OBSERVED
                  </IonText>
                  <IonText>
                    <strong>{checklist.hyd_obs_visual_leakobs}</strong>
                  </IonText>
                </IonRow>
                <IonRow className="visualCheckbox">
                  <IonText style={{ marginLeft: "10px", marginRight: "10px" }}>
                    NO VISIBLE PERMANENT DISTORTION OBSERVED
                  </IonText>
                  <IonText>
                    <strong>
                      {checklist.hyd_obs_visual_novisiblepermanentobs}
                    </strong>
                  </IonText>
                </IonRow>
              </td>
            </tr>
          </tbody>
        </table>
        <IonGrid>
          <IonRow>
            HYDROSTATIC TEST FOUND :-
            <IonRow>
              <IonRow className="visualCheckbox">
                <IonText style={{ marginLeft: "10px", marginRight: "10px" }}>
                  SATISFACTORY
                </IonText>
                <IonText>
                  <strong>{checklist.hyd_obs_dicision_satisfactory}</strong>
                </IonText>
              </IonRow>
              <IonRow className="visualCheckbox">
                <IonText style={{ marginLeft: "10px", marginRight: "10px" }}>
                  UNSATISFACTORY
                </IonText>

                <IonText>
                  <strong>{checklist.hyd_obs_dicision_unsatisfactory}</strong>
                </IonText>
              </IonRow>
              <IonRow>
                <IonRow className="visualCheckbox">
                  <IonText style={{ marginLeft: "10px", marginRight: "10px" }}>
                    VERIFIED PRESESSURE GAUAGE (S) AFTER PRESSURE TEST.
                  </IonText>
                  <IonText>
                    <strong>
                      {checklist.hyd_obs_dicision_verifypresuretest}
                    </strong>
                  </IonText>
                </IonRow>
              </IonRow>
            </IonRow>
          </IonRow>
        </IonGrid>
      </div>
      <ChecklistPhotoView checklist={checklist} />
    </IonGrid>
  );
};

export default ChecklistSingle1250;
