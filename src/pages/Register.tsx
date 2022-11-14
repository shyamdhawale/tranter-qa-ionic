import { IonButton, IonContent, IonHeader, IonInput, IonPage } from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <IonInput placeholder='Username' />
            <IonInput placeholder='Password' />
            <IonInput placeholder='Confirm Password' />
            <IonButton>Register</IonButton>
        </IonContent>
    </IonPage>
    
  )
}

export default Register;