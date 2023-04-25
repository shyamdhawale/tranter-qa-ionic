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
import ChecklistSingle1250 from "../../components/Checklist/Common/Model1250/View/ChecklistSingle1250";

const ChecklistView1250: React.FC = () => {
  const location = useLocation();
  const lastPath = location.pathname.split("/")[4]; // get only last params need to change the last number depending on the router id
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/1250">Back</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton routerLink={`${"/checklist/1250/pdf/" + lastPath}`}>
              PDF
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ChecklistSingle1250 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistView1250;
