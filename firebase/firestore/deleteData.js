import { firebase } from "../config";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebase);

export default async function deleteDocument(colllection, ...props) {
  let result = null;
  let error = null;

  try {
    result = await deleteDoc(doc(db, colllection, ...props));
  } catch (e) {
    error = e;
  }

  return { result, error };
}
