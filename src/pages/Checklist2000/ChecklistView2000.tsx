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
import ChecklistSingle2000 from "../../components/Checklist/Common/Model2000/View/ChecklistSingle2000";

const ChecklistView2000: React.FC = () => {
  const location = useLocation();
  const lastPath = location.pathname.split("/")[4]; // get only last params need to change the last number depending on the router id
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/2000">Back</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton routerLink={`${"/checklist/2000/pdf/" + lastPath}`}>
              PDF
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ChecklistSingle2000 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistView2000;
