import React, { useState } from "react";

import {
  IonInput,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonRow,
} from "@ionic/react";

const NewInspectionHydroTest: React.FC<{
  onHydroTestDataChange: ({}) => void;
}> = (props) => {
  const [tbHydroTestDetails, setTbHydroTestDetails] = useState({
    procedureno: "",
    testpressurereqd: "",
    pressureguageno: "",
    certificateno: "",
    pressurehotside: "",
    obspressue1: "",
    pressurecoldside: "",
    obspressue2: "",
    duration: "",
    obs: "",
    result: "",
    accepted: "No",
  });

  const handlechangeHydro = (event: CustomEvent) => {
    const value = event.detail.target.value;
    const name = event.detail.target.name;

    console.log(name, value);

    setTbHydroTestDetails({
      ...tbHydroTestDetails,
      [name]: value,
    });

    // setTimeout(() => {
    props.onHydroTestDataChange({
      ...tbHydroTestDetails,
      [name]: value,
    });
    // }, 2000);
  };
  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>Hydro Test Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Procedure No.</th>
            <td>
              <IonInput
                type="text"
                name="procedureno"
                value={tbHydroTestDetails.procedureno}
                onIonBlur={handlechangeHydro}
                placeholder="enter Procedure no"
              ></IonInput>
            </td>
            <th>Test Pressure Required</th>
            <td>
              <IonInput
                type="text"
                name="testpressurereqd"
                value={tbHydroTestDetails.testpressurereqd}
                onIonBlur={handlechangeHydro}
                placeholder="enter test pressure reqd"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>Pressure Guage No.</th>
            <td>
              <IonInput
                type="text"
                name="pressureguageno"
                value={tbHydroTestDetails.pressureguageno}
                onIonBlur={handlechangeHydro}
                placeholder="enter  pressure guage no"
              ></IonInput>
            </td>
            <th>Certificate No.</th>
            <td>
              <IonInput
                type="text"
                name="certificateno"
                value={tbHydroTestDetails.certificateno}
                onIonBlur={handlechangeHydro}
                placeholder="enter certificate no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>Pressure Hot Side</th>
            <td>
              <IonInput
                type="text"
                name="pressurehotside"
                value={tbHydroTestDetails.pressurehotside}
                onIonBlur={handlechangeHydro}
                placeholder="enter pressure hot side"
              ></IonInput>
            </td>
            <th>Obs.Pressure</th>
            <td>
              <IonInput
                type="text"
                name="obspressue1"
                value={tbHydroTestDetails.obspressue1}
                onIonBlur={handlechangeHydro}
                placeholder="enter obs pressure"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>Pressure Cold Side</th>
            <td>
              <IonInput
                type="text"
                name="pressurecoldside"
                value={tbHydroTestDetails.pressurecoldside}
                defaultValue={tbHydroTestDetails.pressurecoldside}
                onIonBlur={handlechangeHydro}
                clearInput={true}
                placeholder="enter pressure cold side"
              ></IonInput>
            </td>
            <th> Obs.Pressure</th>
            <td>
              <IonInput
                type="text"
                name="obspressue2"
                clearOnEdit={true}
                value={tbHydroTestDetails.obspressue2}
                onIonBlur={handlechangeHydro}
                placeholder="enter obs pressure 2 "
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>
              <IonInput
                type="text"
                name="duration"
                value={tbHydroTestDetails.duration}
                onIonBlur={handlechangeHydro}
                placeholder="enter duration"
              ></IonInput>
            </td>
            <th>Obs.</th>
            <td>
              <IonInput
                type="text"
                name="obs"
                value={tbHydroTestDetails.obs}
                onIonBlur={handlechangeHydro}
                placeholder="enter obs"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>Result</th>
            <td>
              <IonInput
                type="text"
                name="result"
                value={tbHydroTestDetails.result}
                onIonBlur={handlechangeHydro}
                placeholder="enter result"
              ></IonInput>
            </td>
            <th>Accepted</th>
            <td>
              {/* <IonRadioGroup onIonChange={changeRadio} className="ion-padding">
                <IonRadio name="accepted" value="yes"></IonRadio>
                <IonLabel>Yes</IonLabel>
                <IonRadio name="accepted" value="no"></IonRadio> No
              </IonRadioGroup> */}
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewInspectionHydroTest;
