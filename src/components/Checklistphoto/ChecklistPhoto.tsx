import {
  IonGrid,
  IonRow,
  IonIcon,
  IonText,
  IonButton,
  IonCol,
  IonImg,
  IonSpinner,
  IonInput,
  IonLoading,
  useIonAlert,
} from "@ionic/react";
import { useFormContext } from "react-hook-form";

import axios from "axios";
import { camera, trash, close, checkmark } from "ionicons/icons";
import React, { useState, useEffect } from "react";

import { usePhotoGallery } from "../../hook/usePhotoGallery";

const ChecklistPhoto: React.FC<{ uploadUrl: string; imageRes: string }> = (
  props
) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { photos, takePhoto } = usePhotoGallery();
  const [isUpload, setIsUpload] = useState(true);
  const [image, setImage] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [presentAlert] = useIonAlert();
  const [isuploadDone, setIsuploadDone] = useState(false);
  const [imageRes, setImageRes] = useState("");

  useEffect(() => {
    if (photos.length) {
      setImage(true);
    }
  }, [photos]);

  console.log(props.uploadUrl);

  const uploadImage = () => {
    const formData = new FormData();
    const fileBlob = photos[0].fileblob;
    formData.append("File", fileBlob, "frontview.jpeg");
    setImageRes("blablac");

    // setShowLoading(true);
    // axios
    //   .post("http://192.168.1.20:3001/api/checklistphoto", formData)
    //   .then((res) => {
    //     props.imageRes("abbcsd");
    //     console.log(res);
    //     if (res.data.message === "success") {
    //       setIsUpload(true);
    //       setShowLoading(false);
    //       setIsuploadDone(true);
    //       setImage(false);
    //       presentAlert({
    //         header: "Alert",
    //         message: "Successfully uploaded photo!",
    //         buttons: ["OK"],
    //       });
    //     }
    //     console.log("file upload", res.data);
    //   })
    //   .catch((err) => {
    //     setShowLoading(false);
    //     presentAlert({
    //       header: "Error!",
    //       message: "There was error to upload photo!",
    //       buttons: ["OK"],
    //     });
    //   });
  };

  console.log(imageRes);

  return (
    <IonGrid className="photo">
      {/* <IonRow>
        <IonText>{props.subtitle} </IonText>
      </IonRow> */}
      <IonGrid className="photo">
        <IonRow>
          {photos.map((photo, index) => (
            <IonCol key={index}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
          ))}
        </IonRow>

        {image ? (
          <IonRow>
            <IonButton onClick={uploadImage} disabled={isUpload}>
              Upload
            </IonButton>
          </IonRow>
        ) : undefined}
        {isuploadDone && (
          <IonRow>
            <IonButton
              onClick={uploadImage}
              disabled={isUpload}
              color="success"
            >
              Upload Done
              <IonIcon icon={checkmark}></IonIcon>
            </IonButton>
          </IonRow>
        )}

        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Uploading image..."}
          //   duration={5000}
        />
      </IonGrid>
      <IonRow>
        <IonButton
          onClick={() => {
            takePhoto();
            setIsUpload(false);
          }}
        >
          <IonIcon icon={camera}></IonIcon>
        </IonButton>
      </IonRow>
      <IonInput {...register("sidephotoChecklist")} value={imageRes} />
    </IonGrid>
  );
};

export default ChecklistPhoto;
