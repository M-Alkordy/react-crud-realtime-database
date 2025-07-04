import { useParams } from 'react-router-dom';
import ThingDetails from '../components/things/ThingDetails';
import PageTitle from '../components/layout/PageTitle';
import { useEffect, useState } from 'react';
import { config } from '../firebaseConfig';
import { getDatabase, onValue, ref } from 'firebase/database';

const Thing = () => {
    const params = useParams()
    const [thing , setThing] = useState({})
    useEffect(()=>{
        const database = getDatabase(config);
                // Reference to the specific collection in the database
                const collectionRef = ref(database, `things/${params.id}`);
                    onValue(collectionRef, (snapshot) => {
                        const dataItem = snapshot.val();
                        // Check if dataItem exists
                        if (dataItem) {
                            // Convert the object values into an array
                            setThing(dataItem);
                            console.log(dataItem)
                        }
                    }, (error) => console.log(error));
    } , [])

    let contents = <p>Not possible to show thing.</p>;

    if (thing) {
        contents = <ThingDetails thing={thing} />;
    }

    return (
        <section>
            <PageTitle>
                Things Details <span>({thing?.id})</span>
            </PageTitle>
            {contents}
        </section>
    );
};
export default Thing;
