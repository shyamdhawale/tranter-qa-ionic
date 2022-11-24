import React, { useState, useRef } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewInspectionPaintingDetails: React.FC<{
  onPaintinDataChange: ({}) => void;
}> = (props) => {
  const [tbPaintingDetails, setTbPaintingDetails] = useState({
    shotblasting_1: "",
    primer_1: "",
    final_prep_1: "",
    total_dft_1: "",
    shotblasting_2: "",
    primer_2: "",
    final_prep_2: "",
    total_dft_2: "",
  });

  const tableChangePaintingDetails = (event: CustomEvent) => {
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbPaintingDetails({
      ...tbPaintingDetails,
      [name]: value,
    });
    props.onPaintinDataChange({
      ...tbPaintingDetails,
      [name]: value,
    });
  };

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>Painting Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Painting</th>
            <th> Short blasting</th>
            <th>Primer</th>
            <th>Final Preparation</th>
            <th>Total DFT</th>
          </tr>

          <tr>
            <td>
              <b>Required</b>
            </td>
            <td>
              <IonInput
                type="text"
                name="shotblasting_1"
                value={tbPaintingDetails.shotblasting_1}
                onIonBlur={tableChangePaintingDetails}
                placeholder="enter Shotblasting "
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="primer_1"
                value={tbPaintingDetails.primer_1}
                onIonBlur={tableChangePaintingDetails}
                placeholder="enter Primer"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="final_prep_1"
                value={tbPaintingDetails.final_prep_1}
                onIonBlur={tableChangePaintingDetails}
                placeholder="enter final prep"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="total_dft_1"
                value={tbPaintingDetails.total_dft_1}
                onIonBlur={tableChangePaintingDetails}
                placeholder="enter total Dft"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>
              <b>Observed</b>
            </td>
            <td>
              <IonInput
                type="text"
                name="shotblasting_2"
                value={tbPaintingDetails.shotblasting_2}
                onIonBlur={tableChangePaintingDetails}
                placeholder="enter Shotblasting "
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="primer_2"
                value={tbPaintingDetails.primer_2}
                onIonBlur={tableChangePaintingDetails}
                placeholder="enter Primer"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="final_prep_2"
                value={tbPaintingDetails.final_prep_2}
                onIonBlur={tableChangePaintingDetails}
                placeholder="enter final prep"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="total_dft_2"
                value={tbPaintingDetails.total_dft_2}
                onIonBlur={tableChangePaintingDetails}
                placeholder="enter total Dft"
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewInspectionPaintingDetails;
