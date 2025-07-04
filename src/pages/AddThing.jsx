import ThingForm from '../components/things/ThingForm';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/layout/PageTitle';
import { getDatabase, ref, set } from 'firebase/database';
import { config } from '../firebaseConfig';

const AddThing = () => {
    console.log(`AddThing ... `);

    const navigate = useNavigate();

    async function onAddThing(thing) {
        console.log(`onAddThing ... `, thing);
        const db = getDatabase(config);
        await set(ref(db, 'things/' + thing.id), thing);
        await set(ref(db, 'thingId'), thing.id);
        navigate('/');
    }

    return (
        <section>
            <PageTitle>Add New Thing</PageTitle>
            <ThingForm onSubmit={onAddThing} />
        </section>
    );
};

export default AddThing;
