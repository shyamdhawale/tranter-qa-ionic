import React, { useContext } from "react";
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
import AuthContext from "../../store/auth-context";

const Navigation: React.FC = () => {
  const authctx = useContext(AuthContext);

  const handleLogout = () => {
    console.log("click on logout");
    authctx.onLogout();
  };
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
          <IonItem button routerLink="/list-checklist">
            <IonLabel>Checklists</IonLabel>
          </IonItem>
          <IonItem button routerLink="/list-inspection">
            <IonLabel>Inspection</IonLabel>
          </IonItem>
          <IonItem button onClick={handleLogout}>
            <IonLabel>Log Out</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonContent>
    </IonMenu>
  );
};

export default Navigation;
