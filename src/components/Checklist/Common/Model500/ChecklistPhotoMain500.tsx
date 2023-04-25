import React from "react";
import { IonGrid, IonRow, IonText } from "@ionic/react";

import ChecklistPhotoFront from "../../../Checklistphoto/ChecklistPhotoFront";
import ChecklistPhotoSide from "../../../Checklistphoto/ChecklistPhotoSide";
import ChecklistPhotoOne from "../../../Checklistphoto/ChecklistPhotoOne";
import ChecklistPhotoTwo from "../../../Checklistphoto/ChecklistPhotoTwo";

const ChecklistPhotoMain500: React.FC<{ reportSrNo: String }> = (props) => {
  console.log(props.reportSrNo);
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
          <ChecklistPhotoFront reportNo={props.reportSrNo} modelNo="500" />
        </IonRow>
      </IonGrid>
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
            <h6>Side View Photograph</h6>
          </IonText>
        </IonRow>
        <IonRow>
          {/* <ChecklistPhoto uploadUrl="?photo=sideview" /> */}
          <ChecklistPhotoSide reportNo={props.reportSrNo} modelNo="500" />
        </IonRow>
      </IonGrid>
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
            <h6>Photograph 1</h6>
          </IonText>
        </IonRow>
        <IonRow>
          {/* <ChecklistPhoto uploadUrl="?photo=sideview" /> */}
          <ChecklistPhotoOne reportNo={props.reportSrNo} modelNo="500" />
        </IonRow>
      </IonGrid>
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
            <h6>Photograph 2</h6>
          </IonText>
        </IonRow>
        <IonRow>
          {/* <ChecklistPhoto uploadUrl="?photo=sideview" /> */}
          <ChecklistPhotoTwo reportNo={props.reportSrNo} modelNo="500" />
        </IonRow>
      </IonGrid>
    </IonGrid>
  );
};

export default ChecklistPhotoMain500;
