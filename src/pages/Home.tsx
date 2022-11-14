import React, { useState, useRef} from 'react';

import {
    IonApp,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonTitle,
    IonToolbar,
    setupIonicReact,
    IonAlert, 
  } from "@ionic/react";
  import BmiControl from "../components/BmiControl";
  import BmiResult from "../components/BmiResult";
  import InputControl from "../components/InputControl";
const Home = () => {
    const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnit, setCalcUnit] = useState<"mkg" | "ftlbs">("mkg");
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heighInputRef = useRef<HTMLIonInputElement>(null);
  const calculateBMI = () => {
    // value never be null
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeigh = heighInputRef.current!.value;

    if (
      !enteredHeigh ||
      !enteredWeight ||
      enteredHeigh <= 0 ||
      enteredWeight <= 0
    ) {
      setError("Please enter a valid (non-negative) input number.");
      return;
    }

    const bmi = +enteredWeight / (+enteredHeigh * +enteredHeigh);
    console.log(bmi);
    setCalculatedBMI(bmi);
  };
  const resetInut = () => {
    weightInputRef.current!.value = "";
    heighInputRef.current!.value = "";
  };

  const clearError = () => {
    setError("");
  };
  const selectCalsUnitHandler = (selectedValue: 'mkg' | 'ftlbs') =>{
    setCalcUnit(selectedValue);
  };
  return (
    <div><IonAlert
    isOpen={!!error}
    message={error}
    buttons={[{ text: "Okay", handler: clearError }]}
  />
  <IonApp>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>
            <InputControl selectedValue={ calcUnit }  onSelectedValue={ selectCalsUnitHandler}/>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Height ({calcUnit === 'mkg' ? 'meters' : 'feet'}) </IonLabel>
              <IonInput type="number" ref={heighInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Weight ({calcUnit ==='mkg' ? 'kg': 'lbs' }) </IonLabel>
              <IonInput type="number" ref={weightInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        {/* <BmiControl onCalculate={calculateBMI} onResetInput={resetInut} /> */}

        {calculatedBMI && <BmiResult calculatedBMI={calculatedBMI} />}
      </IonGrid>
    </IonContent>
  </IonApp></div>
  )
}

export default Home