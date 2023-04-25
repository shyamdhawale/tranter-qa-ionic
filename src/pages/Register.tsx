import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router";
import jwtInterceoptor from "../hook/jwtInterceptor";

const Register: React.FC = () => {
  // const storedTokenInformation = localStorage.getItem("tokens");
  // const { user } = useContext(AuthContext);
  // if (localStorage.getItem("token")) {
  //   let tokens = JSON.parse(localStorage.getItem("token") || "");
  //   console.log(jwt_decode(tokens.accessToken));
  // }

  const history = useHistory();
  // const token = authctx.authToken;
  // console.log(token);
  // useIonViewWillEnter(() => {
  // if (storedTokenInformation) {
  useEffect(() => {
    jwtInterceoptor
      // axios
      .get("http://" + process.env.REACT_APP_URL + "/auth-endpoint")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // if (err.response.status === 401) {
        console.log(err.response.status);
        if (err.response.status === 406) {
          history.push("/login");
        }
        // history.push("/login");
        // }
      });
  }, [history]);

  // }
  // });
  return (
    <IonPage>
      <IonContent>
        <IonInput placeholder="Username" />
        <IonInput placeholder="Password" />
        <IonInput placeholder="Confirm Password" />
        <IonButton>Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
