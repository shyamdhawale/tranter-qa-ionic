import React from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Navigation: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonMenuToggle>
          <IonItem button routerLink="/">
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Checklist</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Inspection</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Log Out</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonContent>
    </IonMenu>
  );
};

export default Navigation;
