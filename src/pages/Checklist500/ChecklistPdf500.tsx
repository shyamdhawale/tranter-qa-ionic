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

// import PdfView2000 from "../../components/Checklist/Common/Model2000/PDF2000/PdfView2000";
import PdfView500 from "../../components/Checklist/Common/Model500/Pdf500/PdfView500";

const ChecklistPdf500: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/2000">Back</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <PdfView2000 /> */}
        <PdfView500 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistPdf500;
