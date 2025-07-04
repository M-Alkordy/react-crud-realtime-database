import ThingForm from '../components/things/ThingForm';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import PageTitle from '../components/layout/PageTitle';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { config } from '../firebaseConfig';
import { useEffect, useState } from 'react';

const EditThing = () => {
    const params = useParams()
    const [oldThing , setOldThing] = useState({})
        useEffect(()=>{
            const database = getDatabase(config);
                    // Reference to the specific collection in the database
                    const collectionRef = ref(database, `things/${params.id}`);
                        onValue(collectionRef, (snapshot) => {
                            const dataItem = snapshot.val();
                            // Check if dataItem exists
                            if (dataItem) {
                                // Convert the object values into an array
                                setOldThing(dataItem);
                                console.log(dataItem)
                            }
                        }, (error) => console.log(error));
        } , [])

    let contents = <p>Not possible to show thing.</p>;
    if (oldThing) {
        contents = <ThingForm thing={oldThing} onSubmit={onEditThing} />;
    }

    const navigate = useNavigate();

    async function onEditThing(thing) {
        console.log(`onEditThing ... `, thing);
        const db = getDatabase(config);
        await update(ref(db,`things/${oldThing.id}`) , thing)
        navigate("/")
    }

    return (
        <section>
            <PageTitle>
                Edit Thing <span>({oldThing.id})</span>
            </PageTitle>
            {contents}
        </section>
    );
};

export default EditThing;
