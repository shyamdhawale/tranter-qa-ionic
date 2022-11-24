import React, { useState, useRef } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewCharacteristics_1250Details: React.FC<{
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
    actualresult_30: "",
    actualresult_31: "",
    actualresult_32: "",
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
            <td>2136-2144</td>
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
            <td>1081-1089</td>
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
            <td>1581-1589</td>
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
            <td>Width Of Frame</td>
            <td>847-853</td>
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
            <td>Length Of Frame</td>
            <td>1224-1232</td>
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
            <td>Height Of Raw Outlet Pipe From Base</td>
            <td>1095-2003</td>
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
            <td>Height From Base To Horizontal Angel(50x6)</td>
            <td>712-718</td>
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
            <td>Height From Base To Side Support Angel(50x50x5)</td>
            <td>925-931</td>
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
            <td>Distance From Base To Upper Angel(50x6)</td>
            <td>1246-1254</td>
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
            <td>Center Distance Of Pressure Tank From Frame</td>
            <td>372-378</td>
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
            <td>Center Distance Of Pressure Tank From Base</td>
            <td>1846-1854</td>
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
            <td>Center Cap Elevation From Pressure Tank End</td>
            <td>155-159</td>
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
            <td>Tapping Holes On Drum</td>
            <td>1/4 Inch NPT 5 Places</td>
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
            <td>Center To Center Distance Between Cap</td>
            <td>697-703</td>
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
            <td>No Of Eye Bolts/CRS Distance</td>
            <td>4/1174-1182 X 747-753</td>
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
            <td>16</td>
            <td>First Foundation Slot Elevation CRS Distance</td>
            <td>222-228/198-202</td>
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
            <td>Number Of Slots/Size</td>
            <td>6 No./Dia.14 X 34</td>
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
            <td>
              LTA & HTA Coolers Frame Plate Elevation From Front Of Skid Frame
            </td>
            <td>327-333</td>
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
            <td>Distance From Front Base Channel To Frame Plates</td>
            <td>327-333(105+225)</td>
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
            <b>HTA COOLER (Model No. GC-026 X 26)</b>
          </tr>
          <tr>
            <td>20</td>
            <td>Pack Length (HTA)</td>
            <td>114-200%</td>
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
            <td>21</td>
            <td>Nozzle Center To Center Length</td>
            <td>779</td>
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
            <td>Nozzle Center To Center Width</td>
            <td>230</td>
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
            <td>Nozzle Size/PCD</td>
            <td>OD 100/190.5</td>
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
            <td>Height From Base To M2 Center (Cold Water Outlet)</td>
            <td>317-323</td>
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
            <td>Tapping Hole On Pipe Raw Water Outlet</td>
            <td>1/2 Inch NPT 5 Places</td>
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
            <b>LTA COOLER(Model No. GX-004X39)</b>
          </tr>
          <tr>
            <td>26</td>
            <td>Pack Length (HTA)</td>
            <td>130-136%</td>
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
            <td>303</td>
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
            <td>135</td>
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
            <td>Nozzle Size</td>
            <td>OD 38.1</td>
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
          <tr>
            <td>30</td>
            <td>Height From Base To Center Of Pipe Raw Water Inlet (LTA)</td>
            <td>620-626 (320+303)</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_30"
                value={tbActualResultDetails.actualresult_30}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>31</td>
            <td>Tapping Hole On HTA LTA Interconnecting Pipe</td>
            <td>1/8 Inch NPT 4 Places</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_31"
                value={tbActualResultDetails.actualresult_31}
                onIonBlur={tableChangeActualResultDetails}
                placeholder="enter actualresult"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>32</td>
            <td>
              Distance From Front End To Center Of Make Pipe(38 Od) Of Tank
            </td>
            <td>267-273</td>
            <td>
              <IonInput
                type="text"
                name="actualresult_32"
                value={tbActualResultDetails.actualresult_32}
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
            <th>NOZZLE NO.</th>
            <th>SIZE</th>
            <th>SERVICE BASE ON PHE</th>
            <th>EQUIPMENT TO BE USED</th>
            <th>REMARKS</th>
          </tr>
          <tr>
            <td>S1</td>
            <td>2.5"NB</td>
            <td>Raw Water Inlet LTA</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>S2</td>
            <td>2.5"NB</td>
            <td>Raw Water Inlet LTA</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>S3</td>
            <td>2.5"NB</td>
            <td>Raw Water Inlet HTA</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>S4</td>
            <td>100 MM OD</td>
            <td>Raw Water Inlet HTA</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>M1</td>
            <td>127.5MM OD</td>
            <td>HOT Water Inlet To PHE From Engine</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>M2</td>
            <td>127.5MM OD</td>
            <td>Cold Water Outlet From PHE</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>M3</td>
            <td>38.1MM OD</td>
            <td>HOT Water Inlet To PHE From Engine</td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
          <tr>
            <td>M4</td>
            <td>38.1MM OD</td>
            <td>Cold Water Outlet From PHE </td>
            <td>Vernier Caliper</td>
            <td>Verified</td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewCharacteristics_1250Details;
