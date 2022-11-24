import React, { useState, useRef } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewInspectionMaterial: React.FC<{
  onMaterialDataChange: ({}) => void;
}> = (props) => {
  const [tbMaterialDetails, setTbMaterialDetails] = useState({
    moc_1: "",
    heatno_1: "",
    mtcno_1: "",
    moc_2: "",
    heatno_2: "",
    mtcno_2: "",
    moc_3: "",
    heatno_3: "",
    mtcno_3: "",
    moc_4: "",
    heatno_4: "",
    mtcno_4: "",
    moc_5: "",
    heatno_5: "",
    mtcno_5: "",
    moc_6: "",
    heatno_6: "",
    mtcno_6: "",
  });

  const tableChangeMaterialDetails = (event: CustomEvent) => {
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbMaterialDetails({
      ...tbMaterialDetails,
      [name]: value,
    });
    props.onMaterialDataChange({
      ...tbMaterialDetails,
      [name]: value,
    });
  };

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>Material Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Sr. No</th>
            <th>Material Discription</th>
            <th>MOC</th>
            <th>HEAT NO</th>
            <th>MTC NO</th>
          </tr>

          <tr>
            <td>1</td>
            <td>Frame Plate</td>
            <td>
              <IonInput
                type="text"
                name="moc_1"
                value={tbMaterialDetails.moc_1}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter moc"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="heatno_1"
                value={tbMaterialDetails.heatno_1}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="mtcno_1"
                value={tbMaterialDetails.mtcno_1}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter mtc no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pressure Plate</td>
            <td>
              <IonInput
                type="text"
                name="moc_2"
                value={tbMaterialDetails.moc_2}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter moc"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="heatno_2"
                value={tbMaterialDetails.heatno_2}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>

            <td>
              <IonInput
                type="text"
                name="mtcno_2"
                value={tbMaterialDetails.mtcno_2}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter mtc no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Heat Transfer Plate</td>
            <td>
              <IonInput
                type="text"
                name="moc_3"
                value={tbMaterialDetails.moc_3}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter moc"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="heatno_3"
                value={tbMaterialDetails.heatno_3}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="mtcno_3"
                value={tbMaterialDetails.mtcno_3}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter mtc no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Tightening Bolt + Nut</td>
            <td>
              <IonInput
                type="text"
                name="moc_4"
                value={tbMaterialDetails.moc_4}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter moc"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="heatno_4"
                value={tbMaterialDetails.heatno_4}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="mtcno_4"
                value={tbMaterialDetails.mtcno_4}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter mtc no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nozzle Pipe</td>
            <td>
              <IonInput
                type="text"
                name="moc_5"
                value={tbMaterialDetails.moc_5}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter moc"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="heatno_5"
                value={tbMaterialDetails.heatno_5}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="mtcno_5"
                value={tbMaterialDetails.mtcno_5}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter mtc no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Nozzle Flanges</td>
            <td>
              <IonInput
                type="text"
                name="moc_6"
                value={tbMaterialDetails.moc_6}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter moc"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="heatno_6"
                value={tbMaterialDetails.heatno_6}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter heat no"
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                name="mtcno_6"
                value={tbMaterialDetails.mtcno_6}
                onIonBlur={tableChangeMaterialDetails}
                placeholder="enter mtc no"
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewInspectionMaterial;
