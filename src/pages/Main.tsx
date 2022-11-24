import {
  IonButton,
  IonContent,
  IonItemDivider,
  IonItemGroup,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
} from "@ionic/react";
import React from "react";
import TestingLoop from "../components/Checklist/TestingLoop";
import Header from "../components/UI/Header";
import Navigation from "../components/UI/Navigation";

const Main: React.FC = () => {
  return (
    // <IonPage>
    //     <IonHeader>
    //         <IonToolbar>
    //             <IonTitle>Tranter QA App</IonTitle>
    //         </IonToolbar>
    //     </IonHeader>
    //     <IonContent className='ion-padding'>
    //         <IonButton routerLink='/login'> Login</IonButton>
    //         <IonButton routerLink='/register' color="secondary">Register</IonButton>
    //     </IonContent>
    // </IonPage>
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent className="ion-padding ion-text-center">
          <IonText>
            <h1>QA Reports Dashboard</h1>
          </IonText>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Checklist</IonCardTitle>
              <IonCardSubtitle>Pre-Despatch Checklist</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Create a new report using model number.
            </IonCardContent>

            <IonButton routerLink="/register" className="ion-margin">
              Model-500
            </IonButton>
            <IonButton routerLink="/checklist/new/1250" className="ion-margin">
              Model-1250
            </IonButton>
            <IonButton routerLink="/register" className="ion-margin">
              Model-1500
            </IonButton>
            <IonButton routerLink="/checklist/new/2000" className="ion-margin">
              Model-2000
            </IonButton>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Inspection</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Create a new inspection report</IonCardContent>
            <IonButton routerLink="/inspection/new" className="ion-margin">
              Inspection
            </IonButton>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Main;
