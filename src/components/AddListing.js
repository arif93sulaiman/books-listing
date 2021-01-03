import React , {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext'

function AddListing() {

    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const handleSubmit = (title, author) => {
        addBook(title, author)
        setAuthor('')
        setTitle('')
    }
    
    return ( 
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="please write your Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <input type="text" placeholder="please write your Author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                <input type="submit">Submit</input>
            </form>
    )

}

export default AddListing
