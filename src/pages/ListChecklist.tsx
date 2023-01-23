import React, { useContext } from "react";

import {
  IonButton,
  IonContent,
  IonPage,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
} from "@ionic/react";
import { searchCircle } from "ionicons/icons";
import { Redirect } from "react-router";

import Header from "../components/UI/Header";
import Navigation from "../components/UI/Navigation";
import SeachBarInspection from "../components/inspection/SeachBarInspection";
import AuthContext from "../store/auth-context";

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
          <IonButton routerLink="/checklist500pdf" className="ion-margin">
            Model-500
          </IonButton>
          <IonButton routerLink="/checklist1250pdf" className="ion-margin">
            Model-1250
          </IonButton>
          <IonButton routerLink="/checklist1500pdf" className="ion-margin">
            Model-1500
          </IonButton>
          <IonButton routerLink="/checklist2900pdf" className="ion-margin">
            Model-2000
          </IonButton>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ListChecklist;
