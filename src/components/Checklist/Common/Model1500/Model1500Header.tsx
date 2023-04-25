import { IonInput, IonRow, IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const fields = [
  {
    labelone: "MFG. Sr. No.",
    requiredone: true,
    typeone: "text",

    propsone: {
      name: "header_mfgsrno",
      placeholder: "Enter MFG. Sr. No.",
    },
    labeltwo: "Date",
    requiredtwo: true,

    typetwo: "date",

    propstwo: {
      name: "header_date",
      placeholder: "Enter Date",
    },
  },
];

const Model1500Header: React.FC = () => {
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
            <strong>Pre-Despatch Inspection Checklist 1500KVA</strong>
          </h2>
        </caption>
        <tbody>
          <tr>
            <th>MFG. Sr. No.</th>
            <td>
              <IonInput
                className="custom"
                placeholder="enter MFG Sr No."
                {...register("header_mfgsrno", {
                  required: true,
                })}
              ></IonInput>
              <ErrorMessage
                errors={errors}
                name="header_mfgsrno"
                render={({ message }) => (
                  <p style={{ color: "red" }}>Enter value</p>
                )}
              ></ErrorMessage>
            </td>

            <th>Date</th>
            <td>
              <IonInput
                type="date"
                className="custom"
                {...register("header_date", {
                  required: true,
                })}
              ></IonInput>
              <ErrorMessage
                errors={errors}
                name="header_date"
                render={({ message }) => (
                  <p style={{ color: "red" }}>Enter value</p>
                )}
              ></ErrorMessage>
            </td>
          </tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default Model1500Header;
