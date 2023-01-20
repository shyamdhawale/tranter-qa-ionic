import {
  IonContent,
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonButton,
} from "@ionic/react";

import React from "react";
import PdfView from "../components/inspection/Pdf/PdfView";

const InspectionDetailPdf: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-inspection">Back</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PdfView></PdfView>
      </IonContent>
    </IonPage>
  );
};

export default InspectionDetailPdf;
