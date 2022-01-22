import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';



const getDataByColName = async (collectionName) => {
    const userCollection = collection(db, collectionName);
    const data = await getDocs(userCollection);
    return data.docs;
}


export const getData = () =>
    async dispatch =>
        getDataByColName('categories').then(r => {
            const data = r.map(doc => ({ [doc.id]: doc.data() }))
            console.log(data);
        })