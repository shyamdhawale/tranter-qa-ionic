import React from "react";

import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

const ButtonControl: React.FC<{
  onSubmit: () => void;
  onCancel: () => void;
}> = (props) => {
  return (
    <IonGrid>
      <IonRow style={{ textAlign: "center" }}>
        <IonCol>
          <IonButton onClick={props.onSubmit}>
            {/* <IonIcon slot="start" icon={save} /> */}
            Submit
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton fill="outline" onClick={props.onCancel}>
            {/* <IonIcon icon={refreshOutline} /> */}
            Cancel
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ButtonControl;
