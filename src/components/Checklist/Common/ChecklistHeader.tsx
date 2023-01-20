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
      placeholder: "Enter Supplier Name",
    },
    labeltwo: "Customer",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "customer",
      placeholder: "Enter Customer ",
    },
  },
  {
    labelone: "Vendor Code",
    requiredone: true,
    typeone: "number",
    propsone: {
      name: "vendorcode",
      placeholder: "Enter Vendor Code",
    },
    labeltwo: "Classification",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
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
      placeholder: "Enter PartName",
    },
    labeltwo: "Critical",
    requiredtwo: true,
    typetwo: "text",
    propstwo: {
      name: "critical",
      placeholder: "Enter Critical ",
    },
  },
  {
    labelone: "Part No.",
    requiredone: true,
    typeone: "number",
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
    labelone: "Mfg.Sr.No.",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "mfgsrnumber",
      placeholder: "Enter Mfg. Number",
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
    labelone: "Drg.No.",
    requiredone: true,
    typeone: "text",
    propsone: {
      name: "drgno",
      placeholder: "Enter Drg. Number",
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

const ChecklistHeader: React.FC = () => {
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
            <strong>PRE-DESPATCH INSPECTION REPORT</strong>{" "}
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

export default ChecklistHeader;
