import React, { useContext } from "react";

import { IonContent, IonPage, IonText } from "@ionic/react";
// import { searchCircle } from "ionicons/icons";
import { Redirect } from "react-router";

import Header from "../../components/UI/Header";
import Navigation from "../../components/UI/Navigation";
// import SeachBarInspection from "../../components/inspection/SeachBarInspection";
import AuthContext from "../../store/auth-context";

import ListAllChecklist1500 from "../../components/Checklist/Common/Model1500/View/ListAllChecklist1500";

const ListChecklist1500: React.FC = () => {
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
            <h1>Checklist 1500 Reports</h1>
          </IonText>
          <ListAllChecklist1500 />
        </IonContent>
      </IonPage>
    </>
  );
};

export default ListChecklist1500;
