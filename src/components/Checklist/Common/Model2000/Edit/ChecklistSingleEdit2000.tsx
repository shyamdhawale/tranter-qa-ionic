import React from "react";
import {
  IonContent,
  IonGrid,
  IonPage,
  useIonAlert,
  useIonViewWillEnter,
  useIonLoading,
  useIonViewWillLeave,
  IonLoading,
  IonInput,
  IonButton,
  IonRow,
} from "@ionic/react";

import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";
import Navigation from "../../../../UI/Navigation";
import Header from "../../../../UI/Header";
import Model2000Header from "../Model2000Header";

interface defaultValues {
  client: String;
  pono: Number;
  somename: String;
  header_date: Date;
  header_mfgsrno: String;
}

const ChecklistSingleEdit2000 = () => {
  const methods = useForm<defaultValues>({
    // defaultValues: {
    //   // abbc: false,
    // },
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  return (
    <>
      <IonContent>
        <FormProvider {...methods}>
          <form>
            <IonGrid>
              <Model2000Header />
            </IonGrid>
          </form>
        </FormProvider>
      </IonContent>
    </>
  );
};

export default ChecklistSingleEdit2000;
