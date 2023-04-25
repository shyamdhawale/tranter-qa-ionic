import React from "react";
import {
  IonContent,
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonButton,
  
} from "@ionic/react";

import PdfView1250 from "../../components/Checklist/Common/Model1250/Pdf1250/PdfView1250";

const ChecklistPdf1250: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/list-checklist/1250">Back</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PdfView1250 />
      </IonContent>
    </IonPage>
  );
};

export default ChecklistPdf1250;
