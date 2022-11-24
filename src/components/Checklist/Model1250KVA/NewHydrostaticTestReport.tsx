import React, { useState } from "react";

import { IonInput, IonRow } from "@ionic/react";

const NewHydrostaticTestReport: React.FC<{
  onThChangeData: ({}) => void;
}> = (props) => {
  const [tbHydrostaticTestReport, setTbHydrostaticTestReport] = useState({
    reportno: "",
    sono: "",
    date: "",
    customer: "",
    model: "",
    mfgsrno: "",
    tagno: "",
    pdirno: "",
    drgno: "",
  });

  const tableHydrostaticTestReport = (event: CustomEvent) => {
    console.log(event.detail.target.value);
    console.log(event.detail.target.name);
    const value = event.detail.target.value;
    const name = event.detail.target.name;
    setTbHydrostaticTestReport({
      ...tbHydrostaticTestReport,
      [name]: value,
    });
  };

  //   console.log(tbHydrostaticTestReport);

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>HYDROSTATIC TEST REPORT</h3>
        </caption>
        <tbody>
          <tr>
            <th>REPORT NO:</th>
            <td>
              <IonInput
                type="text"
                name="reportno"
                value={tbHydrostaticTestReport.reportno}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter report no"
              ></IonInput>
            </td>
            <th>DATE:</th>
            <td>
              <IonInput
                type="text"
                name="date"
                value={tbHydrostaticTestReport.date}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter date"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>S.O. NO.:</th>
            <td>
              <IonInput
                type="text"
                name="sono"
                value={tbHydrostaticTestReport.sono}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter s.o. no"
              ></IonInput>
            </td>
            <th>MFG.SR.NO:</th>
            <td>
              <IonInput
                type="text"
                name="mfgsrno"
                value={tbHydrostaticTestReport.mfgsrno}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter mfg.sr. no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>MODEL:</th>
            <td>
              <IonInput
                type="text"
                name="model"
                value={tbHydrostaticTestReport.model}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter model"
              ></IonInput>
            </td>
            <th>TAG NO.:</th>
            <td>
              <IonInput
                type="text"
                name="tagno"
                value={tbHydrostaticTestReport.tagno}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter tag no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>DRG.NO/REV NO.:</th>
            <td>
              <IonInput
                type="text"
                name="drgno"
                value={tbHydrostaticTestReport.drgno}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter drg.no/rev.no"
              ></IonInput>
            </td>
            <th> PDIR NO.:</th>
            <td>
              <IonInput
                type="text"
                name="pdirno"
                value={tbHydrostaticTestReport.pdirno}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter pdir no"
              ></IonInput>
            </td>
          </tr>
          <tr>
            <th>CUSTOMER:</th>
            <td>
              <IonInput
                type="text"
                name="customer"
                value={tbHydrostaticTestReport.customer}
                onIonBlur={tableHydrostaticTestReport}
                placeholder="enter customer"
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default NewHydrostaticTestReport;
