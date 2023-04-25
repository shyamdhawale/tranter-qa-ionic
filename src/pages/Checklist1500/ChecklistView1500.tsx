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
import { getPlatforms } from "@ionic/react";
import ChecklistSingle1500 from "../../components/Checklist/Common/Model1500/View/ChecklistSingle1500";

const ChecklistView1500: React.FC = () => {
  const location = useLocation();
  const platForm = getPlatforms();
  const isDesktop = platForm[1] === "desktop" ? true : false;
  const lastPath = location.pathname.split("/")[4]; // get only last params need to change the last number depending on the router id
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/1500">Back</IonButton>
          </IonButtons>
          {/* {isDesktop ? ( */}
          <IonButtons slot="end">
            <IonButton routerLink={`${"/checklist/1500/pdf/" + lastPath}`}>
              PDF
            </IonButton>
          </IonButtons>
          {/* // ) : undefined} */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ChecklistSingle1500 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistView1500;
