import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { COLLECTION_NAME } from '../../constants'



const getAllDataByColName = async (collectionName) => {
    const userCollection = collection(db, collectionName);
    const data = await getDocs(userCollection);
    return data.docs;
}

const getDataByDocName = async (collectionName, docName) => {
    const docRef = doc(db, collectionName, docName);
    const data = await getDoc(docRef);
    return data;
}


export const getAllData = () =>
    async dispatch =>
        getAllDataByColName(COLLECTION_NAME).then(r => {
            const data = r.map(doc => ({ [doc.id]: doc.data() }))
            console.log(data);
        })


export const getDataByName = (docName) =>
    async dispatch =>
        getDataByDocName(COLLECTION_NAME, docName).then(r => {
            const data = r.data();
            console.log(data);
        })