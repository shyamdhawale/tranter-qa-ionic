import {
  IonBackButton,
  IonContent,
  IonPage,
  IonText,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonLabel,
  IonItem,
  IonButton,
} from "@ionic/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import InspDetail from "../components/inspection/View/InspDetail";

const InspectionDetail: React.FC = () => {
  const location = useLocation();
  const lastPath = location.pathname.split("/")[2]; // get only last params
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState({
    client: "",
    pono: "",
  });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "http://" + process.env.REACT_APP_URL + "/api/inspection/" + lastPath
      )
      .then((res) => {
        setDetail(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [lastPath]);

  // console.log(detail);
  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-inspection">Back</IonButton>
            {/* <IonBackButton>Back</IonBackButton> */}
          </IonButtons>
          <IonButtons slot="end">
            <IonButton routerLink={`${"/inspectionpdf/" + lastPath}`}>
              PDF
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <InspDetail />
      </IonContent>
    </IonPage>
  );
};

export default InspectionDetail;
