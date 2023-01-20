import { IonInput, IonRow, IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import React from "react";
import { useFormContext } from "react-hook-form";

const fields = [
  {
    labelone: "Client",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "client",
      placeholder: "Enter Client Name",
    },
    labeltwo: "PO No.",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "pono",
      placeholder: "Enter PO Number",
    },
  },
  {
    labelone: "Serial No",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "serialnumber",
      placeholder: "Enter Serial Number",
    },
    labeltwo: "Date",
    requiredtwo: true,
    typetwo: "date",
    propstwo: {
      name: "date",
      placeholder: "Enter Date Number",
    },
  },
  {
    labelone: "Model",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "model",
      placeholder: "Enter Model Number",
    },
    labeltwo: "MFG. SR. No.",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "mfgsrno",
      placeholder: "Enter MFG Sr. Number",
    },
  },
  {
    labelone: "TAG No.",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "tagnumber",
      placeholder: "Enter Tag Number",
    },
    labeltwo: "QAP No.",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "qapnumber",
      placeholder: "Enter QAP Number",
    },
  },
  {
    labelone: "Drg. No.",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "drgnumber",
      placeholder: "Enter DRG Number",
    },
    labeltwo: "",
    requiredtwo: false,
    typetwo: "text",
    propstwo: {
      name: "dummy",
      placeholder: "",
      disabled: true,
    },
  },
];

const InspectionHeader: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // console.log("errors", errors);

  return (
    <IonRow className="ion-padding">
      <table>
        <caption className="ion-padding">
          <h2>
            <strong>INSPECTION REPORT</strong>{" "}
          </h2>
        </caption>
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
                {!propstwo.disabled && (
                  <>
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
                          disabled: propstwo.disabled,
                        })}
                      >
                        {requiredtwo && errors[propstwo.name] && (
                          <span style={{ marginRight: "1rem" }}>
                            <IonIcon icon={alertCircleOutline} color="danger" />
                          </span>
                        )}
                      </IonInput>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </IonRow>
  );
};

export default InspectionHeader;
