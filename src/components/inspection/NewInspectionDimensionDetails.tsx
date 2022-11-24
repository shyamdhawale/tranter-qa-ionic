import React, { useState, useRef } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewInspectionDimensionDetails: React.FC<{
  onDimentionDataChange: ({}) => void;
}> = (props) => {
  const [tbDimensionDetails, setTbDimensionDetails] = useState({
    dimensionreq_1: "",
    dimensionobserved_1: "",
    dimensionreq_2: "",
    dimensionobserved_2: "",
    dimensionreq_3: "",
    dimensionobserved_3: "",
    dimensionreq_4: "",
    dimensionobserved_4: "",
    dimensionreq_5: "",
    dimensionobserved_5: "",
    dimensionreq_6: "",
    dimensionobserved_6: "",
    dimensionreq_7: "",
    dimensionobserved_7: "",
    dimensionreq_8: "",
    dimensionobserved_8: "",
    dimensionreq_9: "",
    dimensionobserved_9: "",
    dimensionreq_10: "",
    dimensionobserved_10: "",
    dimensionreq_11: "",
    dimensionobserved_11: "",
  });

  const tableChangeDimensionDetails = (event: CustomEvent) => {
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbDimensionDetails({
      ...tbDimensionDetails,
      [name]: value,
    });
    props.onDimentionDataChange({
      ...tbDimensionDetails,
      [name]: value,
    });
  };

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>Dimension Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>SR. NO.</th>
            <th>DESCRIPTION</th>
            <th>DIMENSION Reqd.(mm)</th>
            <th>DIMENSION OBSEREVED (mm)</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Frame Plate</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_1"
                value={tbDimensionDetails.dimensionreq_1}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="dimensionobserved_1"
                value={tbDimensionDetails.dimensionobserved_1}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pressure Plate</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_2"
                value={tbDimensionDetails.dimensionreq_2}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_2"
                value={tbDimensionDetails.dimensionobserved_2}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>No. Of Heat Transfer Plate</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_3"
                value={tbDimensionDetails.dimensionreq_3}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_3"
                value={tbDimensionDetails.dimensionobserved_3}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Length Of Plate Pack 'A' Max /'A'Min</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_4"
                value={tbDimensionDetails.dimensionreq_4}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_4"
                value={tbDimensionDetails.dimensionobserved_4}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Inlet/Outlet Connection Details</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_5"
                value={tbDimensionDetails.dimensionreq_5}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_5"
                value={tbDimensionDetails.dimensionobserved_5}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>P.C.D.X.I.D.X no. Of Stud</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_6"
                value={tbDimensionDetails.dimensionreq_6}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_6"
                value={tbDimensionDetails.dimensionobserved_6}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Distance Of Nozzle Dimensions(Horizontal/Vertical) </td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_7"
                value={tbDimensionDetails.dimensionreq_7}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_7"
                value={tbDimensionDetails.dimensionobserved_7}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Tightening bolts Size</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_8"
                value={tbDimensionDetails.dimensionreq_8}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_8"
                value={tbDimensionDetails.dimensionobserved_8}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>No.Of Bolts</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_9"
                value={tbDimensionDetails.dimensionreq_9}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_9"
                value={tbDimensionDetails.dimensionobserved_9}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Foundation Details</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_10"
                value={tbDimensionDetails.dimensionreq_10}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_10"
                value={tbDimensionDetails.dimensionobserved_10}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Total Length/Height/Width of PHE</td>
            <td>
              <IonInput
                type="text"
                name="dimensionreq_11"
                value={tbDimensionDetails.dimensionreq_11}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter Dimensionreq"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="dimensionobserved_11"
                value={tbDimensionDetails.dimensionobserved_11}
                onIonBlur={tableChangeDimensionDetails}
                placeholder="enter DimensionObserved"
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewInspectionDimensionDetails;
