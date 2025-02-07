import React, { useRef } from 'react'
import ReactQuill from 'react-quill'
import {setDoc, doc} from 'firebase/firestore' 
import {db} from 'firebase-config'


const Editor = () => {
    const quillRef = useRef<any>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);

  const documentRef = doc(db, 'documents', 'test-doc');

  const saveContent ():any =>{
    if(quillRef.current){
        const content = quillRef.current.getEditor().getContents();
        console.log('saving to db...',content);

    setDoc(documentRef, {content: content.ops}, merge: true)
        .then(() => {console.log('content saved to db')})
        .catch(console.error)
    }
  }

  useEffect(() => {
    if(quillRef.current){
        quillRef.current.getEditor().on('text-change', () => {
            setIsEditing(true);
        })
    }
  }, [isEditing])


  return (
    <div>
      <ReactQuill/>
    </div>
  )
}

export default Editor




