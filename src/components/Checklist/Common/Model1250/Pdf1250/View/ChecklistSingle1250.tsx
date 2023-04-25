import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { IonRow, IonText, IonGrid } from "@ionic/react";

import "../../../../../theme/custom.css";
import ChecklistPhotoView from "./ChecklistPhotoView";

const ChecklistSingle1500 = () => {
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
        "http://" + process.env.REACT_APP_URL + "/api/checklist1500/" + lastPath
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
            <strong>Pre-Despatch Inspection Checklist 1500KVA</strong>
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
              <td>Total Height Of Skid</td>
              <td>
                2180<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_1}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Overall Width Of Skid</td>
              <td>
                1055<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_2}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Main Frame Height</td>
              <td>
                1680<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_3}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lenth Of Frame</td>
              <td>
                1500<sup>±4</sup>
              </td>
              <td>{checklist.actualresult_4}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Center Distance Between Raw WaterOutlet At PHE to RAW WaterInlet
                At HTA PHE
              </td>
              <td>
                530<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_5}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                Distance From Base To Center HT Water Outlet/RAW Water Outlet/LT
                Water Outlet/RAW Water Inlet
              </td>
              <td>
                320<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_6}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                Distance between RAW Water Outlet(HTA) To LT Water Outlet(LTA)
              </td>
              <td>
                416<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_7}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Distance Of Lt Water Outlet From Base Plate</td>
              <td>
                164<sup>±2</sup>
              </td>
              <td>{checklist.actualresult_8}</td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                Distance From Base To Horizontal Channel (100x50) At Front /Back
                Side
              </td>
              <td>
                800<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_9}</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Distance Frame Plate To Front Base Channel</td>
              <td>
                370<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_10}</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Elevation Of MakeUp Water Tank(LTA)From Frame</td>
              <td>
                322<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_11}</td>
            </tr>
            <tr>
              <td>12</td>
              <td>
                Center Distance Between Of MakeUp Water Tank(LTA)To MakeUp Water
                Tank(HTA)
              </td>
              <td>
                750<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_12}</td>
            </tr>
            <tr>
              <td>13</td>
              <td>No Of Eye Bolts</td>
              <td>4</td>
              <td>{checklist.actualresult_13}</td>
            </tr>
            <tr>
              <td>14</td>
              <td>First Foundation Slot Elevation & CRS Distance</td>
              <td>
                155<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_14}</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Number Of Slots/Size</td>
              <td>8 Nos./Dia.14X34</td>
              <td>{checklist.actualresult_15}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>HTA COOLER(Model No.GC-026X26)</strong>
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Pack Length</td>
              <td>
                117<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_16}</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Nozzle Center To Center Length</td>
              <td>779</td>
              <td>{checklist.actualresult_17}</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Nozzle Center To Center Width</td>
              <td>230</td>
              <td>{checklist.actualresult_18}</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Nozzle Size/PCD/Qty No.</td>
              <td>OD 100/190.5/4</td>
              <td>{checklist.actualresult_19}</td>
            </tr>
            <tr>
              <td>20</td>
              <td>ELEVATION Of HT/RAW WaterOutlet From Base</td>
              <td>
                320<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_20}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>LTA COOLER(Model No.GC-026X52</strong>
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Pack Length</td>
              <td>
                234<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_21}</td>
            </tr>
            <tr>
              <td>22</td>
              <td>Nozzle Center To Center Length</td>
              <td>779</td>
              <td>{checklist.actualresult_22}</td>
            </tr>
            <tr>
              <td>23</td>
              <td>Nozzle Center To Center Width</td>
              <td>230</td>
              <td>{checklist.actualresult_23}</td>
            </tr>
            <tr>
              <td>24</td>
              <td>Nozzle Size/PCD/Qty No.</td>
              <td>OD 100/190.5/4No.</td>
              <td>{checklist.actualresult_24}</td>
            </tr>
            <tr>
              <td>25</td>
              <td>ELEVATION Of HT/RAW WaterOutlet From Base</td>
              <td>
                320<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_25}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>FUEL COOLER(Model No.GC-008X32</strong>
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Pack Length(Lta)</td>
              <td>
                80<sup>±3</sup>
              </td>
              <td>{checklist.actualresult_26}</td>
            </tr>
            <tr>
              <td>27</td>
              <td>Nozzle Center To Center Length</td>
              <td>640</td>
              <td>{checklist.actualresult_27}</td>
            </tr>
            <tr>
              <td>28</td>
              <td>Nozzle Center To Center Width</td>
              <td>60</td>
              <td>{checklist.actualresult_28}</td>
            </tr>
            <tr>
              <td>29</td>
              <td>Nozzle Size/PCD/Qty No.</td>
              <td>1.0''BSP SOCKET/4No.</td>
              <td>{checklist.actualresult_29}</td>
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

export default ChecklistSingle1500;
