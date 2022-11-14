import { useRef, useState } from "react";
import { Route } from "react-router-dom";
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
  IonRouterOutlet,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";

import { calculatorOutline, refreshOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewInspection from "./components/inspection/NewInspection";

setupIonicReact();

const App: React.FC = () => {
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
  const selectCalsUnitHandler = (selectedValue: "mkg" | "ftlbs") => {
    setCalcUnit(selectedValue);
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/checklist/new/500" component={Register} exact></Route>
          <Route path="/checklist/new/1250" component={Register} exact></Route>
          <Route path="/checklist/new/1500" component={Register} exact></Route>
          <Route path="/checklist/new/2000" component={Register} exact></Route>
          <Route path="/inspection/new" component={NewInspection} exact></Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
