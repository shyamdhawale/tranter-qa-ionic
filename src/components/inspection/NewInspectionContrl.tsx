import React from "react";
import { save, refreshOutline } from "ionicons/icons";
import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";

const NewInspectionContrl: React.FC<{
    onSubmit: () => void;
//   onResetInput: () => void;
}> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonButton onClick={props.onSubmit}>
          <IonIcon slot="start" icon={save} />
          Submit
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton >
          <IonIcon slot="start" icon={refreshOutline} />
          Cancel
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default NewInspectionContrl;
