import React from "react";

import { IonInput, IonRow } from "@ionic/react";
import { useFormContext } from "react-hook-form";

const testData = [
  {
    seq: 1,
    label: "Design Pressure",
    type: "text",
    required: true,
    propshot: {
      name: "hotside_1",
      placeholder: "Enter Hot Side ",
    },
    propscold: {
      name: "coldside_1",
      placeholder: "Enter Cold Side",
    },
  },
  {
    seq: 2,
    label: "Hydrostatic Test Pressure",
    type: "text",
    required: true,
    propshot: {
      name: "hotside_2",
      placeholder: "Enter Hot Side ",
    },
    propscold: {
      name: "coldside_2",
      placeholder: "Enter Cold Side",
    },
  },
  {
    seq: 3,
    label: "Test Medium",
    type: "text",
    required: true,
    propshot: {
      name: "hotside_3",
      placeholder: "Enter Hot Side ",
    },
    propscold: {
      name: "coldside_3",
      placeholde: "Enter Cold Side",
    },
  },
  {
    seq: 4,
    label: "Material Temprature",
    type: "text",
    required: true,
    propshot: {
      name: "hotside_4",
      placeholder: "Enter Hot Side ",
    },
    propscold: {
      name: "coldside_4",
      placeholder: "Enter Cold Side",
    },
  },
  {
    seq: 5,
    label: "Holding Time",
    type: "text",
    required: true,
    propshot: {
      name: "hotside_5",
      placeholder: "Enter Hot Side ",
    },
    propscold: {
      name: "coldside_5",
      placeholder: "Enter Cold Side",
    },
  },
  {
    seq: 6,
    label: "Test Position",
    type: "text",
    required: true,
    propshot: {
      name: "hotside_6",
      placeholder: "Enter Hot Side ",
    },
    propscold: {
      name: "coldside_6",
      placeholder: "Enter Cold Side",
    },
  },
];

const TestParameter: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>Test Parameters:</h3>
        </caption>
        <tbody>
          <tr>
            <th>Test Parameters</th>
            <th>Hot Side</th>
            <th>Cold Side</th>
          </tr>
          {testData.map((fileds, index) => {
            const { seq, label, required, type, propshot, propscold } = fileds;
            return (
              <tr key={`form_material_${index}`}>
                <td>{seq}</td>
                <td>{label}</td>
                <td>
                  <IonInput
                    className="custom"
                    {...propshot}
                    type={
                      type === "number"
                        ? "number"
                        : type === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(propshot.name, { required: required })}
                  ></IonInput>
                </td>
                <td>
                  <IonInput
                    className="custom"
                    {...propscold}
                    type={
                      type === "number"
                        ? "number"
                        : type === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(propscold.name, { required: required })}
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

export default TestParameter;
