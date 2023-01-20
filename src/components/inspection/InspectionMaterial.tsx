import React from "react";

import { IonInput, IonRow } from "@ionic/react";
import { useFormContext } from "react-hook-form";

const materailData = [
  {
    seq: 1,
    label: "Frame Plate",
    type: "text",
    required: true,
    propsmoc: {
      name: "materialmoc_1",
      placeholder: "Enter MOC ",
    },
    propsheat: {
      name: "materialheatno_1",
      placeholder: "Enter Heat No",
    },
    propsmtc: {
      name: "materialmtcno_1",
      placeholder: "Enter MTC No",
    },
  },
  {
    seq: 2,
    label: "Pressure Plate",
    type: "text",
    required: true,
    propsmoc: {
      name: "materialmoc_2",
      placeholder: "Enter MOC",
    },
    propsheat: {
      name: "materialheatno_2",
      placeholder: "Enter Heat No",
    },
    propsmtc: {
      name: "materialmtcno_2",
      placeholder: "Enter MTC No",
    },
  },
  {
    seq: 3,
    label: "Heat Transfer Plate",
    type: "text",
    required: true,
    propsmoc: {
      name: "materialmoc_3",
      placeholder: "Enter MOC",
    },
    propsheat: {
      name: "materialheatno_3",
      placeholder: "Enter Heat No",
    },
    propsmtc: {
      name: "materialmtcno_3",
      placeholder: "Enter MTC No",
    },
  },
  {
    seq: 4,
    label: "Tightening Bolt + Nut",
    type: "text",
    required: true,
    propsmoc: {
      name: "materialmoc_4",
      placeholder: "Enter MOC",
    },
    propsheat: {
      name: "materialheatno_4",
      placeholder: "Enter Heat No",
    },
    propsmtc: {
      name: "materialmtcno_4",
      placeholder: "Enter MTC No",
    },
  },
  {
    seq: 5,
    label: "Nozzle Pipe",
    type: "text",
    required: true,
    propsmoc: {
      name: "materialmoc_5",
      placeholder: "Enter MOC",
    },
    propsheat: {
      name: "materialheatno_5",
      placeholder: "Enter Heat No",
    },
    propsmtc: {
      name: "materialmtcno_5",
      placeholder: "Enter MTC No",
    },
  },
  {
    seq: 6,
    label: "Nozzle Flanges",
    type: "text",
    required: true,
    propsmoc: {
      name: "materialmoc_6",
      placeholder: "Enter MOC",
    },
    propsheat: {
      name: "materialheatno_6",
      placeholder: "Enter Heat No",
    },
    propsmtc: {
      name: "materialmtcno_6",
      placeholder: "Enter MTC No",
    },
  },
];

const InspectionMaterial: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
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
          {materailData.map((fileds, index) => {
            const {
              seq,
              label,
              required,
              type,
              propsmoc,
              propsheat,
              propsmtc,
            } = fileds;
            return (
              <tr key={`form_material_${index}`}>
                <td>{seq}</td>
                <td>{label}</td>
                <td>
                  <IonInput
                    className="custom"
                    {...propsmoc}
                    type={
                      type === "number"
                        ? "number"
                        : type === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(propsmoc.name, { required: required })}
                  ></IonInput>
                </td>
                <td>
                  <IonInput
                    className="custom"
                    {...propsheat}
                    type={
                      type === "number"
                        ? "number"
                        : type === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(propsheat.name, { required: required })}
                  ></IonInput>
                </td>
                <td>
                  <IonInput
                    className="custom"
                    {...propsmtc}
                    type={
                      type === "number"
                        ? "number"
                        : type === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(propsmtc.name, { required: required })}
                  ></IonInput>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </IonRow>
  );
};

export default InspectionMaterial;
