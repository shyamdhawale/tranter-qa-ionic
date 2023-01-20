import React from "react";
import { IonInput, IonRow } from "@ionic/react";
import { useFormContext } from "react-hook-form";

const paintingData = [
  {
    paiting: "Required",
    shotblasting: "As per SA 2.5 Grade",
    type: "text",
    required: true,
    propsprimer: {
      name: "paitingprimer_1",
      placeholder: "Enter Primer",
    },
    propsfinalpre: {
      name: "paintingfinalpre_1",
      placeholder: "Enter Final Preparation",
    },
    propsdft: {
      name: "paintingdft_1",
      placeholder: "Enter Total DFT",
    },
  },
  {
    paiting: "Observed",
    shotblasting: "Satisfactory",
    type: "text",
    equired: true,
    propsprimer: {
      name: "paitingprimer_2",
      placeholder: "Enter Primer",
    },
    propsfinalpre: {
      name: "paintingfinalpre_2",
      placeholder: "Enter Final Preparation",
    },
    propsdft: {
      name: "paintingdft_2",
      placeholder: "Enter Total DFT",
    },
  },
];
const InspectionPaintingDetails: React.FC = () => {
  const { register } = useFormContext();
  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>Painting Details</h3>
        </caption>
        <tbody>
          <tr>
            <th>Painting</th>
            <th>Shot Blasting</th>
            <th>Primer</th>
            <th>Final Preparation</th>
            <th>Total DFT</th>
          </tr>
          {paintingData.map((fields, index) => {
            return (
              <tr key={`form_painting_${index}`}>
                <td>{fields.paiting} </td>
                <td>{fields.shotblasting} </td>
                <td>
                  <IonInput
                    className="custom"
                    {...fields.propsprimer}
                    type={
                      fields.type === "number"
                        ? "number"
                        : fields.type === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(fields.propsprimer.name, {
                      required: fields.required,
                    })}
                  ></IonInput>
                </td>
                <td>
                  <IonInput
                    className="custom"
                    {...fields.propsfinalpre}
                    type={
                      fields.type === "number"
                        ? "number"
                        : fields.type === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(fields.propsfinalpre.name, {
                      required: fields.required,
                    })}
                  ></IonInput>
                </td>
                <td>
                  <IonInput
                    className="custom"
                    {...fields.propsdft}
                    type={
                      fields.type === "number"
                        ? "number"
                        : fields.type === "date"
                        ? "date"
                        : "text"
                    }
                    {...register(fields.propsdft.name, {
                      required: fields.required,
                    })}
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

export default InspectionPaintingDetails;
