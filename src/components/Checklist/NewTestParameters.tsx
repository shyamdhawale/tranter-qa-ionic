import React, { useState, useRef } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewTestParameters: React.FC<{
  onThChangeData: ({}) => void;
}> = (props) => {
  const [tbTestParametersDetails, setTbTestParametersDetails] = useState({
    hot_1: "",
    cold_1: "",
    hot_2: "",
    cold_2: "",
    hot_3: "",
    cold_3: "",
    hot_4: "",
    cold_4: "",
    hot_5: "",
    cold_5: "",
    hot_6: "",
    cold_6: "",
  });

  const tableTestparametersDetails = (event: CustomEvent) => {
    console.log(event.detail.target.value);
    console.log(event.detail.target.name);
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbTestParametersDetails({
      ...tbTestParametersDetails,
      [name]: value,
    });
  };

  //   console.log(tbTestParametersDetails);

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>TEST PARAMETERS</h3>
        </caption>
        <tbody>
          <tr>
            <th>TEST PARAMETERS</th>
            <th>HOT SIDE</th>
            <th>COLD SIDE</th>
          </tr>
          <tr>
            <td>Design Pressure</td>
            <td>
              <IonInput
                type="text"
                name="hot_1"
                value={tbTestParametersDetails.hot_1}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter hot side"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="cold_1"
                value={tbTestParametersDetails.cold_1}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>Hydrostatic Pressure</td>

            <td>
              <IonInput
                type="text"
                name="hot_2"
                value={tbTestParametersDetails.hot_2}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter hot side"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="cold_2"
                value={tbTestParametersDetails.cold_2}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>Test Medium</td>
            <td>
              <IonInput
                type="text"
                name="hot_3"
                value={tbTestParametersDetails.hot_3}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter hot side"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="cold_3"
                value={tbTestParametersDetails.cold_3}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>Material Temprature</td>
            <td>
              <IonInput
                type="text"
                name="hot_4"
                value={tbTestParametersDetails.hot_4}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter hot side"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="cold_4"
                value={tbTestParametersDetails.cold_4}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>Holding Time</td>
            <td>
              <IonInput
                type="text"
                name="hot_5"
                value={tbTestParametersDetails.hot_5}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter hot side"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="cold_5"
                value={tbTestParametersDetails.cold_5}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>Test Position</td>
            <td>
              <IonInput
                type="text"
                name="hot_6"
                value={tbTestParametersDetails.hot_6}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter hot side"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="cold_6"
                value={tbTestParametersDetails.cold_6}
                onIonBlur={tableTestparametersDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewTestParameters;
