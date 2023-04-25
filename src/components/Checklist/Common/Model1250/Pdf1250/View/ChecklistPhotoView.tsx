import React from "react";
import { IonGrid, IonRow, IonText, IonImg } from "@ionic/react";

const ChecklistPhotoView: React.FC<{
  checklist: {
    frontviewphotofilename: String;
    sideviewphotofilename: String;
    equipmentphotofilename_one: String;
    equipmentphotofilename_two: String;
  };
}> = (props) => {
  //   console.log(props.checklist);
  const { checklist } = props;
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
            <h6 style={{ fontSize: "24px" }}>
              <strong>Front View Photograph</strong>
            </h6>
          </IonText>
        </IonRow>
        <IonRow
          style={{
            border: "2px solid black",
          }}
        >
          <IonImg
            style={{ width: "800px" }}
            src={`http://${process.env.REACT_APP_URL}/checklistphotos/${checklist.frontviewphotofilename}`}
            alt="frontview"
          />
        </IonRow>
      </IonGrid>
      <IonGrid
        style={{
          border: "2px solid black",
          display: "flex",
          alignItems: "center",
          margin: "10px",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <IonRow style={{ textAlign: "center" }}>
          <IonText className="text-center">
            <h6 style={{ fontSize: "24px" }}>
              <strong>Side View Photograph</strong>
            </h6>
          </IonText>
        </IonRow>
        <IonRow
          style={{
            border: "2px solid black",
          }}
        >
          <IonImg
            style={{ width: "800px" }}
            src={`http://${process.env.REACT_APP_URL}/checklistphotos/${checklist.sideviewphotofilename}`}
            alt="sideview"
          />
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
            <h6 style={{ fontSize: "24px" }}>
              <strong>Photograph 1</strong>
            </h6>
          </IonText>
        </IonRow>
        <IonRow
          style={{
            border: "2px solid black",
          }}
        >
          <IonImg
            style={{ width: "800px" }}
            src={`http://${process.env.REACT_APP_URL}/checklistphotos/${checklist.equipmentphotofilename_one}`}
            alt="photoone"
          />
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
            <h6 style={{ fontSize: "24px" }}>
              <strong>Photograph 2</strong>
            </h6>
          </IonText>
        </IonRow>
        <IonRow
          style={{
            border: "2px solid black",
          }}
        >
          <IonImg
            style={{ width: "800px" }}
            src={`http://${process.env.REACT_APP_URL}/checklistphotos/${checklist.equipmentphotofilename_two}`}
            alt="phototwo"
          />
        </IonRow>
      </IonGrid>
    </IonGrid>
  );
};

export default ChecklistPhotoView;
