import { IonInput, IonRow, IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import React from "react";
import { useFormContext } from "react-hook-form";

const fields = [
  {
    labelone: "Supplier",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "supplier",
      placeholder: "Enter Suppliername Name",
    },

    labeltwo: "Customer",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "customer",
      placeholder: "Enter Customer",
    },
  },
  {
    labelone: "Vendor Code",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "vendorcode",
      placeholder: "Enter Vendor code",
    },
    labeltwo: "Classification",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "classification",
      placeholder: "Enter Classification",
    },
  },
  {
    labelone: "Part Name",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "partname",
      placeholder: "Enter Part Name",
    },
    labeltwo: "Critical",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "critical",
      placeholder: "Enter Critical",
    },
  },
  {
    labelone: "Part No.",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "partno",
      placeholder: "Enter Part Number",
    },
    labeltwo: "Major",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "major",
      placeholder: "Enter Major",
    },
  },
  {
    labelone: "MFG.Sr.No.",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "mfgsrno",
      placeholder: "Enter MFG.Sr.No.",
    },
    labeltwo: "Minor",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "minor",
      placeholder: "Enter Minor",
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

const Model1250Header: React.FC = () => {
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
            <strong>Pre-Despatch Inspection Checklist 1250KVA</strong>{" "}
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

export default Model1250Header;
