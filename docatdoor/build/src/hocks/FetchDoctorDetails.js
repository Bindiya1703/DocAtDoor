import { database } from "../firebase";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { useState } from "react";

const Doctors = collection(database, "Doctors");

var Filed = [{}]
function setFiled(data) {
    Filed = data;
}

export const FetchDoctorDetials = (DoctorEmail) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Filed, setFiled] = useState([{}]);

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    const getDetails = () => {
        if (DoctorEmail){where
            const _query = query(Doctors)
            onSnapshot(_query, (response) => {
                console.log(response);
            })

        }
    }

    getDetails();
    // useEffect(() => {
    // }, [getDetails]);
    
    return { Filed };    
}

