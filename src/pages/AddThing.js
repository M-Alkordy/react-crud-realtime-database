import ThingForm from '../components/things/ThingForm';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/layout/PageTitle';
import { config } from '../firbaseConfig';
import { getDatabase, ref, set } from 'firebase/database';

const AddThing = () => {
    console.log(`AddThing ... `);

    const navigate = useNavigate();

    async function onAddThing(thing) {
        console.log(`onAddThing ... `, thing);
        const db = getDatabase(config);
        await set(ref(db, 'things/' + thing.id), thing);
        navigate('/list-things');
    }

    return (
        <section>
            <PageTitle>Add New Thing</PageTitle>
            <ThingForm onSubmit={onAddThing} />
        </section>
    );
};

export default AddThing;
