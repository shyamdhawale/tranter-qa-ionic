import React, { useContext } from "react";

import { IonContent, IonPage, IonText } from "@ionic/react";
// import { searchCircle } from "ionicons/icons";
import { Redirect } from "react-router";

import Header from "../../components/UI/Header";
import Navigation from "../../components/UI/Navigation";
// import SeachBarInspection from "../../components/inspection/SeachBarInspection";
import AuthContext from "../../store/auth-context";

import ListAllChecklist500 from "../../components/Checklist/Common/Model500/View/ListAllChecklist500";

const ListChecklist500: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;
  // if (!isLogin) {
  //   return <Redirect to={{ pathname: "/login" }} />;
  // }

  return (
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent className="ion-padding ion-text-center">
          <IonText>
            <h1>Checklist 500 Reports</h1>
          </IonText>
          <ListAllChecklist500 />
        </IonContent>
      </IonPage>
    </>
  );
};

export default ListChecklist500;
