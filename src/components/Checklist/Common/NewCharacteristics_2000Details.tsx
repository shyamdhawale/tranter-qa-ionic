import React, { useState, useRef } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewCharacteristics_2000Details: React.FC<{
  onCharacteristicsChange: ({}) => void;
}> = (props) => {
  const [tbActualResultDetails, setTbActualResultDetails] = useState({
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
  });

  const tableChangeActualResultDetails = (event: CustomEvent) => {
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbActualResultDetails({
      ...tbActualResultDetails,
      [name]: value,
    });
    props.onCharacteristicsChange({
      ...tbActualResultDetails,
      [name]: value,
    });
  };

  return (
    <IonRow className="ion-padding">
      <table>
        <tbody>
          <tr>
            <th>Sr. No</th>
            <th>CHARACTERISTICS</th>
            <th>DIMENSION REQ(mm)</th>
            <th>ACTUAL RESULTS</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Total Height Of Skid</td>
            <td>2176-2184</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_1"
                value={tbActualResultDetails.actualresult_1}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Overall Width Of Skid</td>
            <td>1051-1059</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_2"
                value={tbActualResultDetails.actualresult_2}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Main Frame Height</td>
            <td>1676-1684</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_3"
                value={tbActualResultDetails.actualresult_3}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lenth Of Frame</td>
            <td>1496-1504</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_4"
                value={tbActualResultDetails.actualresult_4}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              Center Distance Between Raw WaterOutlet At PHE to RAW WaterInlet
              At HTA PHE
            </td>
            <td>527-533</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_5"
                value={tbActualResultDetails.actualresult_5}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              Distance From Base To Center HT Water Outlet/RAW Water Outlet/LT
              Water Outlet/RAW Water Inlet{" "}
            </td>
            <td>317-323</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_6"
                value={tbActualResultDetails.actualresult_6}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              Distance between RAW Water Outlet(HTA) To LT Water Outlet(LTA)
            </td>
            <td>413-419</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_7"
                value={tbActualResultDetails.actualresult_7}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Distance Of Lt Water Outlet From Base Plate</td>
            <td>162-166</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_8"
                value={tbActualResultDetails.actualresult_8}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              Distance From Base To Horizontal Channel (100x50) At Front /Bsack
              Side
            </td>
            <td>797-803</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_9"
                value={tbActualResultDetails.actualresult_9}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Distance Frame Plate To Front Base Channel</td>
            <td>367-373</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_10"
                value={tbActualResultDetails.actualresult_10}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Elevation Of MakeUp Water Tank(LTA)From Frame</td>
            <td>319-325</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_11"
                value={tbActualResultDetails.actualresult_11}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              Center Distance Between Of MakeUp Water Tank(LTA)To MakeUp Water
              Tank(HTA)
            </td>
            <td>747-753</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_12"
                value={tbActualResultDetails.actualresult_12}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>No Of Eye Bolts/</td>
            <td>4</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_13"
                value={tbActualResultDetails.actualresult_13}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>First Foundation Slot Elevation & CRS Distance</td>
            <td>152-158/ 248-252</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_14"
                value={tbActualResultDetails.actualresult_14}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>Number Of Slots/Size </td>
            <td>8 Nos./Dia.14X34</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_15"
                value={tbActualResultDetails.actualresult_15}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <b>HTA COOLER (Model No. GC-026 X 26)</b>
          </tr>
          <tr>
            <td>16</td>
            <td>Pack Length</td>
            <td>114-120%</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_16"
                value={tbActualResultDetails.actualresult_16}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>Nozzle Center To Center Length</td>
            <td>779</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_17"
                value={tbActualResultDetails.actualresult_17}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>Nozzle Center To Center Width</td>
            <td>230</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_18"
                value={tbActualResultDetails.actualresult_18}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>Nozzle Size/PCD/Qty</td>
            <td>OD 100/190.5/4 No.</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_19"
                value={tbActualResultDetails.actualresult_19}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>ELEVATION Of HT/RAW WaterOutlet From Base</td>
            <td>317-323</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_20"
                value={tbActualResultDetails.actualresult_20}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <b>LTA COOLER(Model No. GX-004X39)</b>
          </tr>
          <tr>
            <td>21</td>
            <td>Pack Length</td>
            <td>231-237%</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_21"
                value={tbActualResultDetails.actualresult_21}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td>Nozzle Center To Center Length</td>
            <td>779</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_22"
                value={tbActualResultDetails.actualresult_22}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>Nozzle Center To Center Width</td>
            <td>230</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_23"
                value={tbActualResultDetails.actualresult_23}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>Nozzle Size/PCD/Qty</td>
            <td>OD 100/190.5/4 No.</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_24"
                value={tbActualResultDetails.actualresult_24}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td>ELEVATION Of LT/RAW WaterOutlet /RAW WaterInletFrom Base</td>
            <td>317-323</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_25"
                value={tbActualResultDetails.actualresult_25}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <b>FUAL COOLER (Model No. GL-008X32)</b>
          </tr>
          <tr>
            <td>26</td>
            <td>Pack Length</td>
            <td>80-86%</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_26"
                value={tbActualResultDetails.actualresult_26}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>27</td>
            <td>Nozzle Center To Center Length</td>
            <td>640</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_27"
                value={tbActualResultDetails.actualresult_27}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>28</td>
            <td>Nozzle Center To Center Width</td>
            <td>60</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_28"
                value={tbActualResultDetails.actualresult_28}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>29</td>
            <td>Nozzle Size/PCD/Qty</td>
            <td>1.0"BSP SOCKET/ 4 No.</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_29"
                value={tbActualResultDetails.actualresult_29}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <b>
            <tr>NOZZLE SCHEDULE</tr>
          </b>
          <tr>
            <th></th>
            <th>NOZZLE NO.</th>
            <th>SIZE</th>
            <th>SERVICE BASE ON PHE</th>
            <th>EQUIPMENT TO BE USED</th>
            <th>REMARKS</th>
          </tr>
          <tr>
            <td rowSpan={12}>30</td>
            <td rowSpan={4}>LTA PHE </td>
            <td>76.2 OD</td>
            <td>LT Water Inlet</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>76.2 OD</td>
            <td>LT Water Outlet</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>

          <tr>
            <td>4.0"NB</td>
            <td>Raw Water Inlet </td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>4.0"NB</td>
            <td>Raw Water Outlet</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td rowSpan={4}>HTA PHE</td>
            <td>4.0"NB</td>
            <td>Raw Water Inlet </td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>4.0"NB</td>
            <td>Raw Water Outlet </td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>127 OD</td>
            <td>Engine Water Inlet</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>127 OD</td>
            <td>Engine Water Outlet</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td rowSpan={4}>FUEL PHE</td>
            <td>1.0" NB</td>
            <td>Diesel Fual Inlet</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>1.0" NB</td>
            <td>Diesel Fual Outlet</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>1.0" NB</td>
            <td>Cooling Water Outlet</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewCharacteristics_2000Details;
