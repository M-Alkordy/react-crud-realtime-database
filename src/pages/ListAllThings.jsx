import { useEffect, useState } from 'react';
import PageTitle from '../components/layout/PageTitle';
import ThingsList from '../components/things/ThingsList';
import { getDatabase, ref, onValue } from "firebase/database";
import { config } from '../firebaseConfig';


const ListAllThings = (props) => {
    console.log(`ListAllThings ... `, props);

    const [isLoading, setIsLoading] = useState(true);
    const [loadedThings, setLoadedThings] = useState([]);

    useEffect(() => {

        const database = getDatabase(config);
        setIsLoading(true)
        // Reference to the specific collection in the database
        const collectionRef = ref(database, "things");
        // Function to fetch data from the database
        const fetchData = () => {
            // Listen for changes in the collection
            onValue(collectionRef, (snapshot) => {
                const dataItem = snapshot.val();
                // Check if dataItem exists
                if (dataItem) {
                    // Convert the object values into an array
                    const displayItem = Object.values(dataItem);
                    setLoadedThings(displayItem);
                    setIsLoading(false);
                }
                setIsLoading(false);
            }, (error) => console.log(error));
        };

        // Fetch data when the component mounts
        fetchData();
    }, []);

    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else {
        content = <ThingsList things={loadedThings} />;
    }

    return (
        <section>
            <PageTitle>
                Things List <span>({loadedThings.length})</span>
            </PageTitle>
            {content}
        </section>
    );
};

export default ListAllThings;
