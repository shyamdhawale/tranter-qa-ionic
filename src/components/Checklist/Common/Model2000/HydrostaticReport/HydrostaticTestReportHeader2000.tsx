import React from "react";

import { IonInput, IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import { useFormContext } from "react-hook-form";

const fields = [
  {
    labelone: "REPORT NO",
    requiredone: true,
    typeone: "text",

    propsone: {
      name: "hyd_header_reportno",
      placeholder: "Enter REPORT NO.",
    },
    labeltwo: "Date",
    requiredtwo: true,
    typetwo: "date",
    propstwo: {
      name: "hyd_header_date",
      placeholder: "Enter Date",
    },
  },
  {
    labelone: "S.O. NO.",
    requiredone: true,
    typeone: "text",

    propsone: {
      name: "hyd_header_sono",
      placeholder: "Enter S.O. NO.",
    },
    labeltwo: "MFG. SR.NO.",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "hyd_header_mfgsrno",
      placeholder: "Enter MFG. SR. NO.",
    },
  },
  {
    labelone: "MODEL",
    requiredone: true,
    typeone: "text",

    propsone: {
      name: "hyd_header_model",
      placeholder: "Enter Model",
    },
    labeltwo: "TAG NO.",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "hyd_header_tagno",
      placeholder: "Enter TAG NO.",
    },
  },
  {
    labelone: "DRG. NO/REV NO.",
    requiredone: true,
    typeone: "text",

    propsone: {
      name: "hyd_header_drgno",
      placeholder: "Enter DRG No.",
    },
    labeltwo: "PDIR NO..",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "hyd_header_pdirno",
      placeholder: "Enter PDIR NO.",
    },
  },
];

const HydrostaticTestReportHeader2000: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <table>
        <caption className="ion-padding">
          <h2>
            <strong>HYDROSTATIC TEST REPORT</strong>{" "}
          </h2>
        </caption>
        {/* {hydroDetail.map((item, index) => ( */}
        <tbody>
          {fields.map((field, index) => {
            const {
              labelone,
              labeltwo,
              typeone,
              typetwo,
              requiredone,
              requiredtwo,
              propsone,
              propstwo,
            } = field;
            return (
              <tr key={`form_header_${index}`}>
                <th>{labelone}</th>
                <td>
                  <IonInput
                    className="custom"
                    {...propsone}
                    type={
                      typeone === "number"
                        ? "number"
                        : typeone === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(propsone.name, {
                      required: requiredone,
                      // disabled: propsone.disabled,
                    })}
                  >
                    {requiredone && errors[propsone.name] && (
                      <span>
                        <IonIcon icon={alertCircleOutline} color="danger" />
                      </span>
                    )}
                  </IonInput>
                </td>

                <th>{labeltwo}</th>
                <td>
                  <IonInput
                    className="custom"
                    {...propstwo}
                    type={
                      typetwo === "number"
                        ? "number"
                        : typetwo === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(propstwo.name, {
                      required: requiredtwo,
                    })}
                  >
                    {requiredtwo && errors[propstwo.name] && (
                      <span style={{ marginRight: "1rem" }}>
                        <IonIcon icon={alertCircleOutline} color="danger" />
                      </span>
                    )}
                  </IonInput>
                </td>
              </tr>
            );
          })}
          {/* <tr>
              <th>Report No</th>
              <td>{item.reportno}</td>
              <th>Date</th>
              <td>{item.date}</td>
            </tr>
            <tr>
              <th>S.O. No.</th>
              <td>{item.sono}</td>
              <th>MFG.Sr.No.</th>
              <td>{item.mfgsrno}</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>{item.model}</td>
              <th>Tag No.</th>
              <td>{item.tagno}</td>
            </tr>
            <tr>
              <th>DRG.NO/REV No.</th>
              <td>{item.drgno}</td>
            </tr>
            <tr>
              <th>PDIR.No.</th>
              <td>{item.pdirno}</td>
            </tr>
            <tr>
              <th>Customer</th>
              <td>{item.customer}</td>
            </tr> */}
        </tbody>
        {/* ))} */}
      </table>
    </>
  );
};

export default HydrostaticTestReportHeader2000;
