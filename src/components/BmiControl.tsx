import React from "react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";

const BmiControl: React.FC<{
  onCalculate: () => void;
  onResetInput: () => void;
}> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonButton onClick={props.onCalculate}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton onClick={props.onResetInput}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControl;
