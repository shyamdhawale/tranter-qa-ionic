import React, { useState, useRef } from "react";

import { IonInput, IonRow, IonRadio, IonRadioGroup } from "@ionic/react";

const NewObservations: React.FC<{
  onThChangeData: ({}) => void;
}> = (props) => {
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
    console.log(event.detail.target.value);
    console.log(event.detail.target.name);
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbObservationDetails({
      ...tbObservationDetails,
      [name]: value,
    });
    props.onThChangeData({
      ...tbObservationDetails,
      [name]: value,
    });
  };

  //   console.log(tbObservationDetails);

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>OBSERVATIONS</h3>
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
                placeholder="enter guageid no "
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="guagerange_1"
                value={tbObservationDetails.guagerange_1}
                onIonBlur={tableChangeObservationDetails}
                placeholder="enter guage range"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="calibrationvalid_1"
                value={tbObservationDetails.calibrationvalid_1}
                onIonBlur={tableChangeObservationDetails}
                placeholder="enter calibration valid"
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
        <caption>VISUALINSPECTION</caption>
        <td>
          <IonRadioGroup onIonChange={tableChangeObservationDetails}>
            <IonRadio value="NoLeakages"></IonRadio> NO LEAKAGES OBSERVED
            <br></br>
            <IonRadio value="Leakages"></IonRadio> LEAKAGES OBSERVED
            <br></br>
            <IonRadio value="No Visible"></IonRadio> NO VISIBLE PERMANENT
            DISTORTION OBSERVED
          </IonRadioGroup>
        </td>
      </div>
      <div>
        <caption>DICISION</caption>
        <td>
          HYDROSTATIC TEST FOUND :-
          <IonRadioGroup onIonChange={tableChangeObservationDetails}>
            <IonRadio value="NoLeakages"></IonRadio> SATISFACTORY
            <IonRadio value="Leakages"></IonRadio> UNSATISFACTORY
            <IonRadio value="No Visible"></IonRadio> VERIFIED PRESSURE GAUAGE(s)
            AFTER PRESSURE TEST DISTORTION OBSERVED
          </IonRadioGroup>
        </td>
      </div>
    </IonRow>
  );
};

export default NewObservations;
