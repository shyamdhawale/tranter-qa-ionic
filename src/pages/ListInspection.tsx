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

const ListInspection: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;
  if (!isLogin) {
    return <Redirect to={{ pathname: "/login" }} />;
  }

  return (
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent className="ion-padding ion-text-center">
          <IonText>
            <h1>Inspection Reports</h1>
          </IonText>
          <SeachBarInspection />
        </IonContent>
      </IonPage>
    </>
  );
};

export default ListInspection;
