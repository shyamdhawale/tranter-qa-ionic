import React from "react";
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

import Header from "../components/UI/Header";
import Navigation from "../components/UI/Navigation";
import SeachBarInspection from "../components/inspection/SeachBarInspection";
import AuthContext from "../store/auth-context";
import InspectionEditMain from "../components/inspection/Edit/InspectionEditMain";

const InspectionEdit = () => {
  return (
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent className="ion-padding ion-text-center">
          <IonText>
            <h1>Inspection Reports</h1>
          </IonText>
          <InspectionEditMain />
        </IonContent>
      </IonPage>
    </>
  );
};

export default InspectionEdit;
