import { useState } from "react";

function BookCard({book}){
    const [isSaved , setSaved] = useState(true)
    const [isRead, setRead] = useState(false)
    return(
        <>
            <div className="booksCard">
                <h3>{book.name}</h3>
                <h4>
                    <strong>Author :</strong> {book.author} <br />
                    <strong>Gener : </strong> {book.Gener} <br />
                    <strong>Rating ⭐ : </strong> {book.Rating} <br />
                </h4>
                <button onClick={()=> setSaved(!isSaved)}>{isSaved ? "❤️ Save" : "🗑️  Remove"}</button>

                <button onClick={()=> setRead(!isRead)}>{isRead ? "Show Less" : "Read More"}</button>
                {
                    isRead &&(
                        <div>
                            <strong>Description</strong> <br />
                            <h3>{book.Description }</h3>
                        </div>
                    )
                }
            </div>
            
        </>
    )
}

export default BookCard;