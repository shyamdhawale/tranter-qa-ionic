import React, { useState } from "react";
import { IonGrid, IonInput, IonRow, IonText } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import ChecklistPhoto from "./ChecklistPhoto";

const ChecklistPhotoMain: React.FC = () => {
  const [imageRes, setImageRes] = useState("");
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <IonGrid
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <IonRow>
        <IonText className="text-center">
          <h3>EQUIPMENT PHOTOGRAPHS</h3>
        </IonText>
      </IonRow>
      <IonGrid
        style={{
          border: "2px solid black",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <IonRow style={{ textAlign: "center" }}>
          <IonText className="text-center">
            <h6>Front View Photograph</h6>
          </IonText>
        </IonRow>
        <IonRow>
          <ChecklistPhoto uploadUrl="?photo=front" />
        </IonRow>
      </IonGrid>
      <IonGrid
        style={{
          paddingLeft: "20rem",
          paddingRight: "20rem",
          border: "2px solid black",
        }}
      >
        <IonRow>
          <IonText className="text-center">
            <h6>Side View Photograph</h6>
          </IonText>
        </IonRow>
        <IonRow>
          <ChecklistPhoto uploadUrl="?photo=side" />
          {/* <IonInput {...register("sidephoto")} value={imageRes} /> */}
        </IonRow>
      </IonGrid>
    </IonGrid>
  );
};

export default ChecklistPhotoMain;
