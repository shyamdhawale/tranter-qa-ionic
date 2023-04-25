import {
  IonContent,
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import { useLocation } from "react-router";

import React from "react";

import ChecklistSingleEdit1500 from "../../components/Checklist/Common/Model1500/Edit/ChecklistSingleEdit1500";

const ChecklistEdit1500: React.FC = () => {
  const location = useLocation();
  const lastPath = location.pathname.split("/")[4]; // get only last params need to change the last number depending on the router id
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/1500">Back</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ChecklistSingleEdit1500 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistEdit1500;
