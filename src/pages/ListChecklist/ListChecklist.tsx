import React, { useContext } from "react";

import {
  IonButton,
  IonContent,
  IonPage,
  IonCardContent,
  IonText,
  // IonItem,
  // IonLabel,
  // IonList,
  // IonSearchbar,
} from "@ionic/react";
// import { searchCircle } from "ionicons/icons";
// import { Redirect } from "react-router";

import Navigation from "../../components/UI/Navigation";
// import SeachBarInspection from "../../components/inspection/SeachBarInspection";
// import AuthContext from "../../store/auth-context";
import Header from "../../components/UI/Header";

const ListChecklist = () => {
  return (
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent className="ion-padding ion-text-center">
          <IonText>
            <h1>Checklist Reports</h1>
          </IonText>
          <IonCardContent>View Pdf reports.</IonCardContent>
          <IonButton routerLink="/list-checklist/500" className="ion-margin">
            List Model-500
          </IonButton>
          <IonButton routerLink="/list-checklist/1250" className="ion-margin">
            List Model-1250
          </IonButton>
          <IonButton routerLink="/list-checklist/1500" className="ion-margin">
            List Model-1500
          </IonButton>
          <IonButton routerLink="/list-checklist/2000" className="ion-margin">
            List Model-2000
          </IonButton>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ListChecklist;
