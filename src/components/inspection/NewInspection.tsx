import React, { useState } from "react";
import axios from "axios";
import {
  IonContent,
  IonInput,
  IonPage,
  useIonLoading,
  useIonViewWillLeave,
  IonBadge,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { Prompt } from "react-router-dom";

import { useForm } from "react-hook-form";

import Navigation from "../UI/Navigation";
import Header from "../UI/Header";

import "./NewInspection.module.css";
import NewInspectionHeader from "./NewInspectionHeader";
import NewInspectionHydroTestDetails from "./NewInspectionHydroTestDetails";
import NewInspectionMaterial from "./NewInspectionMaterial";
import NewInspectionDimensionDetails from "./NewInspectionDimensionDetails";
import NewInspectionPaintingDetails from "./NewInspectionPaintingDetails";
import ButtonControl from "../UI/ButtonControl";
import NewInspectionHydroTest from "./NewInspectionHydroTest";
import Home from "./testRectFrom";

const NewInspection: React.FC = () => {
  const history = useHistory();
  const [headerData, setHeaderData] = useState({});
  const [materialData, setMaterialData] = useState({});
  const [dimentionData, setDimentionData] = useState({});
  const [hydroTestData, setHydroTestData] = useState({});
  const [paintingData, setPaintingData] = useState({});
  const [present, dismiss] = useIonLoading();
  const [text, setText] = useState<string>("");
  useIonViewWillLeave(() => {
    setText("");
  });

  const onSubmitHandler = () => {
    const postData = {
      headerData,
      materialData,
      dimentionData,
      hydroTestData,
      paintingData,
    };
    console.log("Posting Data.");
    console.log(postData);
    present({
      message: "Storing data on the server",
      duration: 3000,
    });

    // axios
    //   .post("http://192.168.1.13:3001/inspection")
    //   .then((res) => console.log(res));
  };

  const onCancelHandler = () => {
    history.push("/");
  };

  return (
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent className="ion-padding">
          {/* <Home />/ */}
          <form>
            <NewInspectionHeader onHeaderDataChange={(e) => setHeaderData(e)} />
            <NewInspectionMaterial
              onMaterialDataChange={(e) => setMaterialData(e)}
            />
            <NewInspectionDimensionDetails
              onDimentionDataChange={(e) => setDimentionData(e)}
            />
            {/* <NewInspectionHydroTestDetails
              onHydroTestDataChange={(e) => setHydroTestData(e)}
            /> */}
            <NewInspectionHydroTest
              onHydroTestDataChange={(e) => setHydroTestData(e)}
            />

            <NewInspectionPaintingDetails
              onPaintinDataChange={(e) => setPaintingData(e)}
            />

            <ButtonControl
              onSubmit={onSubmitHandler}
              onCancel={onCancelHandler}
            />

            <Prompt
              when={true}
              message="You have unsaved changes, are you sure you want to leave?"
            />
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default NewInspection;
