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

import ChecklistSingleEdit1250 from "../../components/Checklist/Common/Model1250/Edit/ChecklistSingleEdit1250";

const ChecklistEdit1250: React.FC = () => {
  const location = useLocation();
  const lastPath = location.pathname.split("/")[4]; // get only last params need to change the last number depending on the router id
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/1250">Back</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ChecklistSingleEdit1250 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistEdit1250;
