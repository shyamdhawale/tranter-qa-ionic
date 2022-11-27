import { IonInput, IonLabel } from '@ionic/react';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const NestedChecklist = () => {
    const { register, formState: { errors} } = useFormContext();
    console.log('nested error', errors)
    
  return (
    <>
    <IonLabel position="fixed"> test</IonLabel>
    <IonInput  {...register("test", { required:true})} />
    {errors.test && (<p style={{ color: 'red' }}>Test Error</p>)}
    </>
  )
};

export default NestedChecklist;