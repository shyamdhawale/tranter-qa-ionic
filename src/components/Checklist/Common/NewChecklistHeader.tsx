import React, { useState, useRef } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewChecklistHeader: React.FC<{
  onThChangeData: ({}) => void;
}> = (props) => {
  const [tbChecklistHeader, setTbChecklistHeader] = useState({
    customer: "",
    supplier: "",
    vendorcode: "",
    classification: "",
    partname: "",
    critical: "",
    partno: "",
    major: "",
    mfgsrno: "",
    minor: "",
    drgno: "",
  });

  const tableChangeCheckliistHandler = (event: CustomEvent) => {
    console.log(event.detail.target.value);
    console.log(event.detail.target.name);
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbChecklistHeader({
      ...tbChecklistHeader,
      [name]: value,
    });
    props.onThChangeData({
      ...tbChecklistHeader,
      [name]: value,
    });
  };

  //   console.log(tbChecklistHeader);

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>PRE-DESPATCH INSPECTION CHECKLIST</h3>
        </caption>
        <tbody>
          <tr>
            <th>SUPPLIER:</th>
            <td>
              <IonInput
                type="text"
                name="supplier"
                value={tbChecklistHeader.supplier}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter supplier"
              ></IonInput>
            </td>
            <th>CUSTOMER:</th>
            <td>
              <IonInput
                type="text"
                name="customer"
                value={tbChecklistHeader.customer}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter customer"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>VENDER CODE:</th>
            <td>
              <IonInput
                type="text"
                name="vendorcode"
                value={tbChecklistHeader.vendorcode}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter vendorcode"
              ></IonInput>
            </td>
            <th>CLASSIFICATION:</th>
            <td>
              <IonInput
                type="text"
                name="classification"
                value={tbChecklistHeader.classification}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter classification"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>PART NAME:</th>
            <td>
              <IonInput
                type="text"
                name="partname"
                value={tbChecklistHeader.partname}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter partname"
              ></IonInput>
            </td>
            <th>CRITICAL:</th>
            <td>
              <IonInput
                type="text"
                name="critical"
                value={tbChecklistHeader.critical}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter critical"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>PART NO:</th>
            <td>
              <IonInput
                type="text"
                name="partno"
                value={tbChecklistHeader.partno}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter partno"
              ></IonInput>
            </td>
            <th>MAJOR:</th>
            <td>
              <IonInput
                type="text"
                name="major"
                value={tbChecklistHeader.major}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter major"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>MFG. SR. NO.:</th>
            <td>
              <IonInput
                type="text"
                name="mfgsrno"
                value={tbChecklistHeader.mfgsrno}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter mfgsrno"
              ></IonInput>
            </td>
            <th>MINOR:</th>
            <td>
              <IonInput
                type="text"
                name="minor"
                value={tbChecklistHeader.minor}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter minor"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>TRANTER DRG NO.:</th>
            <td>
              <IonInput
                type="text"
                name="drgno"
                value={tbChecklistHeader.drgno}
                onIonBlur={tableChangeCheckliistHandler}
                placeholder="enter drgno"
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewChecklistHeader;
