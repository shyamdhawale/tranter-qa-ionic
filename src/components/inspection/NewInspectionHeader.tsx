import React, { useState, useRef } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewInspectionHeader: React.FC<{
  // eslint-disable-next-line no-empty-pattern
  onHeaderDataChange: ({}) => void;
}> = (props) => {
  const [tbHeader, setTbHeader] = useState({
    clientname: "",
    pono: "",
    serialno: "",
    model: "",
    mfgsrno: "",
    tagno: "",
    qapno: "",
    drgno: "",
  });

  const tableChangeHandler = (event: CustomEvent) => {
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbHeader({
      ...tbHeader,
      [name]: value,
    });
    props.onHeaderDataChange({
      ...tbHeader,
      [name]: value,
    });
  };

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>INSPECTION REPORT</h3>
        </caption>
        <tbody>
          <tr>
            <th>Client</th>
            <td>
              <IonInput
                type="text"
                name="clientname"
                value={tbHeader.clientname}
                onIonBlur={tableChangeHandler}
                placeholder="enter client name"
              ></IonInput>
            </td>
            <th>PO No.</th>
            <td>
              <IonInput
                type="text"
                name="pono"
                value={tbHeader.pono}
                onIonBlur={tableChangeHandler}
                placeholder="enter PO no."
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>Serial No.</th>
            <td>
              <IonInput
                type="text"
                name="serialno"
                value={tbHeader.serialno}
                placeholder="enter Serial no "
                onIonBlur={tableChangeHandler}
              ></IonInput>
            </td>
            <th>Model</th>
            <td>
              <IonInput
                type="text"
                name="model"
                value={tbHeader.model}
                onIonBlur={tableChangeHandler}
                placeholder="enter Model"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>MFG. Sr. No.</th>
            <td>
              <IonInput
                type="text"
                name="mfgsrno"
                value={tbHeader.mfgsrno}
                onIonBlur={tableChangeHandler}
                placeholder="enter Mfg Sr No"
              ></IonInput>
            </td>
            <th>Tag No.</th>
            <td>
              <IonInput
                type="text"
                name="tagno"
                value={tbHeader.tagno}
                onIonBlur={tableChangeHandler}
                placeholder="enter Tag No"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>QAP No.</th>
            <td>
              <IonInput
                type="text"
                name="qapno"
                value={tbHeader.qapno}
                onIonBlur={tableChangeHandler}
                placeholder="enter Qap No."
              ></IonInput>
            </td>
            <th> Drg No.</th>
            <td>
              <IonInput
                type="text"
                name="drgno"
                value={tbHeader.drgno}
                onIonBlur={tableChangeHandler}
                placeholder="enter Drg No."
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewInspectionHeader;
