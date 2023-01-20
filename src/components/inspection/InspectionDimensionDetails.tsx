import React from "react";
import { IonGrid, IonInput, IonRow } from "@ionic/react";
import { useFormContext } from "react-hook-form";

const dimentionData = [
  {
    seq: 1,
    label: "Frame Plate",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_1",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_1",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 2,
    label: "Pressure Plate",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_2",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_2",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 3,
    label: "No. Of Heat Transfer Plate",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_3",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_3",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 4,
    label: "Length Of Plate Pack 'A' Max /'A'Min",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_4",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_4",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 5,
    label: "Inlet/Outlet Connection Details",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_5",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_5",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 6,
    label: "P.C.D.X.I.D.X no. Of Stud",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_6",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_6",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 7,
    label: "Distance Of Nozzle Dimensions (Horizontal / Vertical)",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_7",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_7",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 8,
    label: "Tightening bolts Size",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_8",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_8",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 9,
    label: "No.Of Bolts",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_9",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_9",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 10,
    label: "Foundation Details",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_10",
      placeholder: "Enter Dim Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_10",
      placeholder: "Enter Dim Obs",
    },
  },
  {
    seq: 11,
    label: "Total Length / Height / Width of PHE",
    type: "text",
    required: true,
    propsdimentionreq: {
      name: "dimentionreq_11",
      placeholder: "Enter Dime Reqd",
    },
    propsdimentionobserved: {
      name: "dimentionobserved_11",
      placeholder: "Enter Dim Obs",
    },
  },
];

const InspectionDimensionDetails: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <IonGrid className="col-sm-auto">
      <IonRow className="ion-padding">
        <table>
          <caption>
            <h3>Dimention Details</h3>
          </caption>
          <tbody>
            <tr>
              <th>Sr. No</th>
              <th>Description</th>
              <th>Dimention Reqd. (mm)</th>
              <th>Dimention Observed (mm)</th>
            </tr>
            {dimentionData.map((fields, index) => {
              return (
                <tr key={`form_dimention_${index}`}>
                  <td style={{ maxWidth: "1px" }}>{fields.seq}</td>
                  <td>{fields.label}</td>
                  <td>
                    <IonInput
                      className="custom"
                      {...fields.propsdimentionreq}
                      type={
                        fields.type === "number"
                          ? "number"
                          : fields.type === "date"
                          ? "date"
                          : "text"
                      }
                      {...register(fields.propsdimentionobserved.name, {
                        required: fields.required,
                      })}
                    />
                  </td>
                  <td>
                    <IonInput
                      className="custom"
                      {...fields.propsdimentionobserved}
                      type={
                        fields.type === "number"
                          ? "number"
                          : fields.type === "date"
                          ? "date"
                          : "text"
                      }
                      {...register(fields.propsdimentionreq.name, {
                        required: fields.required,
                      })}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </IonRow>
    </IonGrid>
  );
};

export default InspectionDimensionDetails;
