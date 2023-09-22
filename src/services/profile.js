import {  doc,  setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db, storage } from "./../config/firebase";
import {  getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function setProfileData(profile, uid) {
    try {
        const docRef = await setDoc(doc(db, "profile", uid), profile);
     
    } catch (e) {
        console.error("Erro ao adicionar o documento: ", e);
    }
}
export async function updateProfile(profile, uid) {
    try {
        const profileUserRef = doc(db, "profile", uid)
        const res = await updateDoc(profileUserRef, profile)
        conosole.log(res)

    } catch (e) {
        console.log("Erro ao adicionar o documento: ", e);
    }
}


 export async function getProfile(uid) {
    const profileUserRef = doc(db, "profile", uid)
    const docSnap = await getDoc(profileUserRef)
   return docSnap.data()
}

export async function setPhoto(file, uuid){
    try {
        const storageRef = ref(storage, uuid)
     const snapshot = await uploadBytes(storageRef, file)

     const urlDownloadData = await getDownloadURL(storageRef, snapshot)

        console.log("upload file")
        await updateProfile({urlImage:urlDownloadData}, uuid)

        return urlDownloadData
    } catch (error) {
        console.log(error)
        return error
    }
}