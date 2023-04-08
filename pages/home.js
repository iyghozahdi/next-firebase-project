import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import getDocument from "@/firebase/firestore/getData";
import addData from "@/firebase/firestore/addData";
import deleteDocument from "@/firebase/firestore/deleteData";

const Home = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleForm = async () => {
    const data = {
      name: "John snow",
      house: "Stark",
      aa: {
        john: "a",
        stark: "b",
      },
    };
    const { result, error } = await addData("users", "user-id", data);

    console.log(result);

    if (error) {
      return console.log(error);
    }
  };

  const getData = async () => {
    const { result, error } = await getDocument(
      "users",
      "user-id",
      "id",
      "2keqgjtmk6s4bhFSiOFy"
    );

    console.log(result.data());

    if (error) {
      return console.log(error);
    }
  };

  const deleteData = async () => {
    const { result, error } = await deleteDocument(
      "users",
      "user-id",
      "id",
      "2keqgjtmk6s4bhFSiOFy"
    );

    console.log(result);

    if (error) {
      return console.log(error);
    }
  };

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <>
      <h1>Only logged in users can view this page</h1>
      <button onClick={handleForm}>Post Data</button>
      <button onClick={getData}>Get Data</button>
      <button onClick={deleteData}>Delete Data</button>
    </>
  );
};

export default Home;
