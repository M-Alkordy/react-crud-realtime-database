import { useEffect, useRef, useState } from 'react'
import classes from './ThingForm.module.css'
import { getDatabase, onValue, ref } from 'firebase/database'
import { config } from '../../firebaseConfig'

const ThingForm = props => {
  console.log(`ThingForm ... `, props)
  const [lastId , setLastId] = useState(0)

  const t = props.thing
  const titleInputRef = useRef()
  const subtitleInputRef = useRef()
  const imageInputRef = useRef()
  const descriptionInputRef = useRef()
    useEffect(() => {
      if (!t) {
        const database = getDatabase(config)
        // Reference to the specific collection in the database
        const collectionRef = ref(database, `thingId`)
        onValue(
          collectionRef,
          snapshot => {
            const dataItem = snapshot.val()
            // Check if dataItem exists
            if (dataItem) {
              // Convert the object values into an array
              setLastId(dataItem)
              console.log(dataItem)
            }
          },
          error => console.log(error)
        )
      }
      else{
        setLastId(t.id)
      }
    }, [])
    
  function submitHandler (event) {
    console.log(`submitHandler ... `)
    event.preventDefault() // do not submit the form automatically

    const title = titleInputRef.current.value
    const subtitle = subtitleInputRef.current.value
    const image = imageInputRef.current.value
    const description = descriptionInputRef.current.value


    const thingData = {
      id: lastId!=0 ? lastId+1 : 1 ,
      title,
      subtitle,
      image,
      description
    }
    if (t) {
      thingData.id = t.id
    }

    console.log('submitHandler thing data:', thingData)
    props.onSubmit(thingData)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input
          defaultValue={t ? t.title : ''}
          type='text'
          required
          id='title'
          ref={titleInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor='subtitle'>Subtitle</label>
        <input
          defaultValue={t ? t.subtitle : ''}
          type='text'
          required
          id='subtitle'
          ref={subtitleInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>Image</label>
        <input
          defaultValue={t ? t.image : ''}
          type='url'
          required
          id='image'
          ref={imageInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Description</label>
        <textarea
          defaultValue={t ? t.subtitle : ''}
          required
          id='description'
          rows='5'
          ref={descriptionInputRef}
        />
      </div>
      <div className={classes.actions}>
        <button> {t ? 'Edit' : 'Add'} Thing</button>
      </div>
    </form>
  )
}

export default ThingForm
