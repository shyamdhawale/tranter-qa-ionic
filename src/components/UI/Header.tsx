import React from "react";
import { IonButton, IonHeader, IonMenuButton, IonToolbar } from "@ionic/react";

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButton slot="start" fill="clear" color="dark" shape="round">
          <IonMenuButton autoHide={true}></IonMenuButton>
        </IonButton>
        <div className="ion-text-center">
          <img src="/assets/icon/Tranter-logo.png" alt="logo"></img>
        </div>
        {/* <IonTitle>QA App</IonTitle> */}
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
