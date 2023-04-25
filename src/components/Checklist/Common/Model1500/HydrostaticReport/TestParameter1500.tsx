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
      name: "hyd_test_hotside_1",
      placeholder: "Enter Hot Side ",
      defaultValue: "12 bar(g)",
    },
    propscold: {
      name: "hyd_test_coldside_1",
      placeholder: "Enter Cold Side",
      defaultValue: "12 bar(g)",
    },
  },
  {
    seq: 2,
    label: "Hydrostatic Test Pressure",
    type: "text",
    required: true,
    propshot: {
      name: "hyd_test_hotside_2",
      placeholder: "Enter Hot Side ",
      defaultValue: "16 bar(g)",
    },
    propscold: {
      name: "hyd_test_coldside_2",
      placeholder: "Enter Cold Side",
      defaultValue: "16 bar(g)",
    },
  },
  {
    seq: 3,
    label: "Test Medium",
    type: "text",
    required: true,
    propshot: {
      name: "hyd_test_hotside_3",
      placeholder: "Enter Hot Side ",
      defaultValue: "WATER",
    },
    propscold: {
      name: "hyd_test_coldside_3",
      placeholder: "Enter Cold Side",
      defaultValue: "WATER",
    },
  },
  {
    seq: 4,
    label: "Material Temprature",
    type: "text",
    required: true,
    propshot: {
      name: "hyd_test_hotside_4",
      placeholder: "Enter Hot Side ",
      defaultValue: "28-30°C",
    },
    propscold: {
      name: "hyd_test_coldside_4",
      placeholder: "Enter Cold Side",
      defaultValue: "28-30°C",
    },
  },
  {
    seq: 5,
    label: "Holding Time",
    type: "text",
    required: true,
    propshot: {
      name: "hyd_test_hotside_5",
      placeholder: "Enter Hot Side ",
      defaultValue: "30 MINUTES",
    },
    propscold: {
      name: "hyd_test_coldside_5",
      placeholder: "Enter Cold Side",
      defaultValue: "30 MINUTES",
    },
  },
  {
    seq: 6,
    label: "Test Position",
    type: "text",
    required: true,
    propshot: {
      name: "hyd_test_hotside_6",
      placeholder: "Enter Hot Side ",
      defaultValue: "VERTICAL",
    },
    propscold: {
      name: "hyd_test_coldside_6",
      placeholder: "Enter Cold Side",
      defaultValue: "VERTICAL",
    },
  },
];

const TestParameter1500: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>TEST PARAMETERS:</h3>
        </caption>
        <tbody>
          <tr>
            <th>Test Parameters</th>
            <th>Hot Side</th>
            <th>Cold Side</th>
          </tr>
          {testData.map((fileds, index) => {
            const { label, required, type, propshot, propscold } = fileds;
            return (
              <tr key={`form_material_${index}`}>
                <td>{label}</td>
                <td>
                  <IonInput
                    value={propshot.defaultValue}
                    readonly
                    {...register(propshot.name)}
                  ></IonInput>
                </td>
                <td>
                  <IonInput
                    value={propscold.defaultValue}
                    readonly
                    {...register(propscold.name)}
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

export default TestParameter1500;
