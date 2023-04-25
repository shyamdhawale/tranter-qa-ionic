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

import ChecklistSingle500 from "../../components/Checklist/Common/Model500/View/ChecklistSingle500";

const ChecklistView500: React.FC = () => {
  const location = useLocation();

  const lastPath = location.pathname.split("/")[4]; // get only last params need to change the last number depending on the router id
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/500">Back</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton routerLink={`${"/checklist/500/pdf/" + lastPath}`}>
              PDF
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ChecklistSingle500 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistView500;
