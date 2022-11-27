import { useState } from "react";
import {
  IonButton,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";

import { FormProvider, useForm } from "react-hook-form";

import { alertCircleOutline, text } from "ionicons/icons";
import NestedChecklist from "./NestedChecklist";



const SomeData = () => {
	const [presentAlert] = useIonAlert();
	const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid,  },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  console.log(errors)

  const fields = [
    {
      label: "Firstname",
      required: true,
      requiredOptions: {
        maxLength: 10,
      },
      props: {
        name: "firstname",
        type: "text",
        // type: "text",
        placeholder: "Enter a username",
      },
    },

    {
      label: "Age",
      required: {
        value: true,
      },
      requiredOptions: {
        min: 18,
        max: 99,
      },
      props: {
        name: "age",
        type: "number",
        placeholder: "Enter your age",
      },
    },
  ];

  //   console.log("isValid", isValid);

  const onSubmit = (data: any) => {
	data.preventDefault()
  
  console.log(methods.getValues());
    // console.log(data);
    if (!methods.formState.isValid) {
		presentAlert({
            header: 'Alert!',
            subHeader: 'Some of the values are not entered',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  setHandlerMessage('canceled');
                },
              },
              {
                text: 'Save Draft',
                role: 'confirm',
                handler: () => {
                  setHandlerMessage('Save as Draft');
                },
              },
            ],
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
          })
    }
    reset();
  };

  const showError = (_fieldName: string) => {
    let error = (errors as any)[_fieldName];
    console.log(error)
    return error ? (
      <div style={{ color: "red", fontWeight: "bold" }}>
        {error.message || "Field Is Required"}
      </div>
    ) : null;
  };

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>React Hook Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">React Hook Form</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCardSubtitle className="ion-text-center ion-margin">
          An example using React Hook Form
        </IonCardSubtitle>
        <FormProvider {...methods} >
        <form onSubmit={onSubmit}>
          {fields.map((field, index) => {
            const { label, required, requiredOptions, props } = field;
            // console.log("required", required);
            let someValue: String = field.props.type;

            return (
              <IonItem key={`form_field_${index}`} lines="full">
                <>
                  <IonLabel position="fixed">{label}</IonLabel>
                  <IonInput
                    {...props}
                    type={someValue === "text" ? "text" : "number"}
                    {...methods.register(props.name, {
                      required: "Invalid",
                      ...requiredOptions,
                    })}
                  />
                </>
                {required && methods.formState.errors[props.name] && (
                  // showError(props.name)
					// <p> invalid {props.name}</p>
                  <IonIcon icon={alertCircleOutline} color="danger" />
                )}
                <NestedChecklist />
              </IonItem>
            );
          })}
			{isValid && <IonLabel>Form isValid </IonLabel>
 }
		  
          <IonButton
            type="submit"
            className="ion-margin-top"
            // expand="full"
            // disabled={!isValid}
          >
            Submit
          </IonButton>
		  <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
        </form>
        </FormProvider>
      </IonContent>
    </IonPage>
  );
};

export default SomeData;
