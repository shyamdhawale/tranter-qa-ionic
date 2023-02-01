import { useContext, useRef, useState } from "react";
import { Route } from "react-router-dom";
import { IonApp, setupIonicReact, IonRouterOutlet } from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";

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

/* custom variables */
import "./theme/custom.css";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ListInspection from "./pages/ListInspection";
import NewInspection from "./components/inspection/NewInspection";
import InspectionDetail from "./pages/InspectionDetail";
import AuthContext from "./store/auth-context";
import PdfView from "./components/inspection/Pdf/PdfView";
import InspectionDetailPdf from "./pages/InspectionDetailPdf";
import NewModel2000 from "./components/Checklist/Common/Model2000/NewModel2000";
import NewModel500 from "./components/Checklist/Common/Model500/NewModel500";
import NewModel1250 from "./components/Checklist/Common/Model1250/NewModel1250";
import PdfView2000 from "./components/Checklist/Common/Model2000/PDF2000/PdfView2000";
import NewModel1500 from "./components/Checklist/Common/Model1500/NewModel1500";
import InspectionEdit from "./pages/InspectionEdit";
import ListChecklist from "./pages/ListChecklist";
import PdfView500 from "./components/Checklist/Common/Model500/Pdf500/PdfView500";
import PdfView1250 from "./components/Checklist/Common/Model1250/Pdf1250/PdfView1250";
import PdfView1500 from "./components/Checklist/Common/Model1500/Pdf1500/PdfView1500";
import ChecklistPdf500 from "./pages/ChecklistPdf500";

// import NewModel500 from "./components/Checklist/Common/Model2000/NewModel500";
setupIonicReact();

const App: React.FC = () => {
  const authctx = useContext(AuthContext);
  const isAuthed = authctx.isLoggedIn;
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
          <Route
            path="/checklist/new/500"
            component={NewModel500}
            exact
          ></Route>
          <Route
            path="/checklist/new/1250"
            component={NewModel1250}
            exact
          ></Route>
          <Route
            path="/checklist/new/1500"
            component={NewModel1500}
            exact
          ></Route>
          <Route
            path="/checklist/new/2000"
            component={NewModel2000}
            exact
          ></Route>
          <Route
            path="/inspection/new"
            exact
            render={() => {
              return isAuthed ? <NewInspection /> : <Login />;
            }}
          ></Route>
          <Route
            path="/inspectiondetail/:id"
            component={InspectionDetail}
            exact
          ></Route>
          <Route
            path="/inspectionedit/:id"
            component={InspectionEdit}
            exact
          ></Route>
          <Route
            path="/inspectionpdf/:id"
            component={InspectionDetailPdf}
            exact
          ></Route>
          <Route
            path="/checklist500pdf"
            component={ChecklistPdf500}
            exact
          ></Route>
          <Route path="/checklist1250pdf" component={PdfView1250} exact></Route>
          <Route path="/checklist1500pdf" component={PdfView1500} exact></Route>
          <Route path="/checklist2000pdf" component={PdfView2000} exact></Route>
          <Route
            path="/list-inspection"
            // component={ListInspection}
            exact
            render={() => {
              return isAuthed ? <ListInspection /> : <Login />;
            }}
          ></Route>
          <Route
            path="/list-checklist"
            exact
            render={() => {
              return isAuthed ? <ListChecklist /> : <Login />;
            }}
          ></Route>
          <Route path="/pdf" component={PdfView2000}></Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
