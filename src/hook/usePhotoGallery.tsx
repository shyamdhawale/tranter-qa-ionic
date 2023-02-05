import { useState, useEffect } from "react";
import { isPlatform, useIonViewWillEnter } from "@ionic/react";

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Capacitor } from "@capacitor/core";

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
  fileblob: Blob;
}

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  useIonViewWillEnter(() => {
    for (let i = 0; i < 100; i++) {
      setPhotos([]);
    }
  });

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      saveToGallery: false,
      quality: 100,
    });

    const fileName = new Date().getTime() + ".jpeg";
    // return to blob file
    let newblob = await fetch(photo.webPath!).then((r) => r.blob());
    const newPhotos = [
      {
        filepath: fileName,
        fileblob: newblob,
        webviewPath: photo.webPath,
      },
      //   ...photos,
    ];
    setPhotos(newPhotos);
  };

  return {
    photos,
    takePhoto,
  };
}
