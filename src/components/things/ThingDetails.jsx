import { Link, useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import classes from './ThingDetails.module.css';
import { getDatabase, ref, remove } from 'firebase/database';
import { config } from '../../firebaseConfig';

const ThingDetails = (props) => {
    console.log(`ThingDetails ... `, props);
    const t = props.thing;
    console.log(t)

    const navigate = useNavigate();

    async function deleteThingHandler() {
        console.log(`deleteThingHandler ...`, t);

        if (!window.confirm(`Sure delete thing '${t.title}'?`)) {
            return;
        }

        console.log('deleteThingHandler id DELETE:', t.id);
        const db = getDatabase(config);
        await remove(ref(db, `things/${t.id}`));
        navigate('/')
    }

    return (
        <Card backgroundImage={t.image}>
            <div className={classes.content}>
                <h2>{t.title}</h2>
                <h3>{t.subtitle}</h3>
                <p>{t.description}</p>
            </div>
            <div className={classes.actions}>
                <Link to={`/edit-thing/${t.id}`} state={t}>
                    <button>Edit</button>
                </Link>
                <button onClick={deleteThingHandler}>Delete</button>
            </div>
        </Card>
    );
};

export default ThingDetails;
