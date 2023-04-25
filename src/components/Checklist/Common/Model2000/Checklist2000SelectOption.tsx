import React from "react";
import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
const Checklist2000SelectOption = () => {
  return (
    <IonList>
      <IonItem>
        <IonSelect placeholder="Select fruit">
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
};

export default Checklist2000SelectOption;
