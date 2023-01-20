import React from "react";
import { IonInput, IonRow } from "@ionic/react";
import { useFormContext } from "react-hook-form";

const hydroData = [
  {
    labelone: "Procedure No",
    typeone: "text",
    requiredone: true,
    propsone: {
      name: "hyrodprocedureno",
      placeholder: "Enter Procedure No.",
    },
    labeltwo: "Test Pressure Required",
    typetwo: "text",
    requiredtwo: true,
    propstwo: {
      name: "hydrotestpressurereqd",
      placeholder: "Enter Test Pressure Reqd",
    },
  },
  {
    labelone: "Pressure Gauge No.",
    typeone: "text",
    requiredone: true,
    propsone: {
      name: "hydropressureguageno",
      placeholder: "Enter Pressure Guage No.",
    },
    labeltwo: "Certificate No.",
    typetwo: "text",
    requiredtwo: true,
    propstwo: {
      name: "hydrocertificateno",
      placeholder: "Enter Certificate No.",
    },
  },
  {
    labelone: "Pressure Hot Side",
    typeone: "text",
    requiredone: true,
    propsone: {
      name: "hydropressurehotside",
      placeholder: "Enter Pressure Hot Side",
    },
    labeltwo: "Obs. Pressure",
    typetwo: "text",
    requiredtwo: true,
    propstwo: {
      name: "hydroobspressue_1",
      placeholder: "Enter Obs. Pressure",
    },
  },
  {
    labelone: "Duration Cold Side",
    typeone: "text",
    requiredone: true,
    propsone: {
      name: "hydropressurecoldside",
      placeholder: "Enter Duration Cold Side",
    },
    labeltwo: "Obs. Pressure",
    typetwo: "text",
    requiredtwo: true,
    propstwo: {
      name: "hydroobspressue_2",
      placeholder: "Enter Obs. Pressure",
    },
  },
  {
    labelone: "Duration",
    typeone: "text",
    requiredone: true,
    propsone: {
      name: "hydroduration",
      placeholder: "Enter Duration in min",
    },
    labeltwo: "Obs:",
    typetwo: "text",
    requiredtwo: true,
    propstwo: {
      name: "hydroduration_obs",
      placeholder: "Enter Obs. Duration in min",
    },
  },
  {
    labelone: "Result",
    typeone: "text",
    requiredone: true,
    propsone: {
      name: "hydroresult",
      placeholder: "Enter Result",
    },
    labeltwo: "Accepted:",
    typetwo: "text",
    requiredtwo: true,
    propstwo: {
      name: "hydrodaccepted",
      placeholder: "Enter Accepted Result",
    },
  },
];

const InspectionHydroTestDetails = () => {
  const { register } = useFormContext();
  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>Hydro Test Details</h3>
        </caption>
        <tbody>
          {hydroData.map((fields, index) => {
            return (
              <tr key={`form_hydro_${index}`}>
                <th>{fields.labelone}</th>
                <td>
                  <IonInput
                    className="custom"
                    {...fields.propsone}
                    type={
                      fields.typeone === "number"
                        ? "number"
                        : fields.typeone === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(fields.propsone.name, {
                      required: fields.requiredone,
                    })}
                  />
                </td>
                <th>{fields.labeltwo}</th>
                <td>
                  <IonInput
                    className="custom"
                    {...fields.propstwo}
                    type={
                      fields.typetwo === "number"
                        ? "number"
                        : fields.typetwo === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(fields.propstwo.name, {
                      required: fields.requiredtwo,
                    })}
                  />
                </td>
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
    </IonRow>
  );
};

export default InspectionHydroTestDetails;
