import ThingForm from '../components/things/ThingForm';
import { useNavigate, useLocation } from 'react-router-dom';
import PageTitle from '../components/layout/PageTitle';
import { getDatabase, ref, update } from 'firebase/database';
import { config } from '../firbaseConfig';

const EditThing = (props) => {
    const t = useLocation().state;
    console.log(`EditThing ... `, t);

    let contents = <p>Not possible to show thing.</p>;
    if (t) {
        contents = <ThingForm thing={t} onSubmit={onEditThing} />;
    }

    const navigate = useNavigate();

    async function onEditThing(thing) {
        console.log(`onEditThing ... `, thing);
        const db = getDatabase(config);
        await update(ref(db,`things/${t.id}`) , thing)
        navigate("/list-things")
    }

    return (
        <section>
            <PageTitle>
                Edit Thing <span>({t.id})</span>
            </PageTitle>
            {contents}
        </section>
    );
};

export default EditThing;
