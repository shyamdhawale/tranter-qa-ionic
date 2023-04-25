import React from "react";
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

import PdfView1500 from "../../components/Checklist/Common/Model1500/Pdf1500/PdfView1500";

const ChecklistPdf1500: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/1500">Back</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PdfView1500 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistPdf1500;
