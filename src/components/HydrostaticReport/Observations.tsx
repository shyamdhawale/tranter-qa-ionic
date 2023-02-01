import React, { useState, useRef } from "react";

import {
  IonInput,
  IonRow,
  IonRadio,
  IonRadioGroup,
  IonCheckbox,
  IonText,
} from "@ionic/react";

const Observations: React.FC = () => {
  const [tbObservationDetails, setTbObservationDetails] = useState({
    gaugeidno_1: "",
    guagerange_1: "",
    calibrationvalid_1: "",
    observedpressure_1: "",
    gaugeidno_2: "",
    guagerange_2: "",
    calibrationvalid_2: "",
    observedpressure_2: "",
  });

  const tableChangeObservationDetails = (event: CustomEvent) => {
    console.log("changeTable clicked");
    // console.log(event);
    console.log(event.detail);
    // console.log(event.detail.target.name);
    const value = event.detail.target.value;
    // const name = event.detail.target.name;
    // setTbObservationDetails({
    //   ...tbObservationDetails,
    //   [name]: value,
    // });
    // props.onThChangeData({
    //   ...tbObservationDetails,
    //   [name]: value,
    // });
  };

  //   console.log(tbObservationDetails);

  return (
    <IonRow className="ion-padding">
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
              <IonInput
                type="text"
                name="gaugeidno_1"
                value={tbObservationDetails.gaugeidno_1}
                onIonBlur={tableChangeObservationDetails}
                placeholder="Enter guageid no "
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="guagerange_1"
                value={tbObservationDetails.guagerange_1}
                onIonBlur={tableChangeObservationDetails}
                placeholder="Enter guage range"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="calibrationvalid_1"
                value={tbObservationDetails.calibrationvalid_1}
                onIonBlur={tableChangeObservationDetails}
                placeholder="Enter calibration valid"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="observedpressure_1"
                value={tbObservationDetails.observedpressure_1}
                onIonBlur={tableChangeObservationDetails}
                placeholder="enter observed pressure"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>
              <b>Cold Side</b>
            </td>
            <td>
              <IonInput
                type="text"
                name="gaugeidno_2"
                value={tbObservationDetails.gaugeidno_2}
                onIonBlur={tableChangeObservationDetails}
                placeholder="enter guageid no "
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="guagerange_2"
                value={tbObservationDetails.guagerange_2}
                onIonBlur={tableChangeObservationDetails}
                placeholder="enter guage range"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="calibrationvalid_2"
                value={tbObservationDetails.calibrationvalid_2}
                onIonBlur={tableChangeObservationDetails}
                placeholder="enter calibration valid"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="observedpressure_2"
                value={tbObservationDetails.observedpressure_2}
                onIonBlur={tableChangeObservationDetails}
                placeholder="enter observed pressure"
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h6>VISUAL INSPECTION: </h6>
        <td>
          <IonRadioGroup onIonChange={tableChangeObservationDetails}>
            <IonRadio value="NoLeakages"></IonRadio>NO LEAKAGES OBSERVED
            <br></br>
            <IonRadio value="Leakages"></IonRadio>LEAKAGES OBSERVED
            <br></br>
            <IonRadio value="No Visible"></IonRadio>NO VISIBLE PERMANENT
            DISTORTION OBSERVED
          </IonRadioGroup>
        </td>
      </div>
      <div>
        <h6>DICISION</h6>
        <IonRow>
          HYDROSTATIC TEST FOUND :-
          <IonRadioGroup onIonChange={tableChangeObservationDetails}>
            <IonRadio value="satisfactory"></IonRadio> SATISFACTORY
            <IonRadio value="unsatisfactory"></IonRadio> UNSATISFACTORY
          </IonRadioGroup>
        </IonRow>

        <IonRow>
          <IonCheckbox></IonCheckbox>
          <IonText>VERIFIED PRESESSURE GAUAGE (S) AFTER PRESSURE TEST.</IonText>
        </IonRow>
      </div>
    </IonRow>
  );
};

export default Observations;
