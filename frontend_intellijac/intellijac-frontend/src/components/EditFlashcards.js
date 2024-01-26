import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function EditFlashcards() {

    const {id}=useParams()
    
    const [flashcard, setFlashcard] = useState({
        name: "",
        description: "",
    }
    )

    const {name, description}=flashcard

    const onInputChange = (e) => {
        setFlashcard({...flashcard, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadFlashcard()
    }, []);

//    const onSubmit = async (e) => {
//
//        await axios.put(`http://localhost:8080/flashcards/flashcard/${id}`, flashcard);
//    };

const onSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.put(`http://localhost:8080/flashcards/flashcard/${id}`, flashcard);

        console.log("Flashcard updated successfully");
    } catch (error) {
        console.error("Error updating flashcard:", error);

    }
};


    const loadFlashcard = async ()=>{
        const result=await axios.get(`http://localhost:8080/flashcards/flashcard/${id}`)
        setFlashcard(result.data)
    }

    return (
        <div style= {{backgroundColor: "#E5D3B3"}}>
            <br></br>
            <br></br>
            <h1 style= {{ fontSize: "50px", color: "orange"}}>Edit Your Math Flashcards Here!!</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <div style= {{textAlign: "center", fontSize: "30px"}}>
                <label for="flashcard-name"> Your question:</label>
                </div>
                <div>
                <input type="text" id="flashcard-name" name="name" placeholder="Your flashcard's title" style= {{ marginLeft: "625px", fontSize: "20px", textAlign: "center" }} onChange={(e) => onInputChange(e)} value={name}/>
                </div>
                <br />
                <div style= {{textAlign: "center", fontSize: "30px"}}>
                <label for="flashcard-description"> Your answer:</label>
                </div>
                <div>
                <textarea type="text" id="flashcard-description" name="description" placeholder="Your flascard's text" style= {{ marginLeft: "625px", fontSize: "20px", textAlign: "center" }} onChange={(e) => onInputChange(e)} value={description}/>
                </div>
                <br />
                <button style= {{marginLeft: "660px", fontSize: "20px", color: "purple"}} type="submit"> Edit your flashcard!</button>
            </form>
            <br />
            <Link className="btn btn-outline-primary mx-2" to="/flashcards">
              Back to Flashcard list!
              </Link>
        </div>

    // {/* // return (
    // //     <div>
    // //         <Link className="btn btn-outline-primary mx-2" to="/flashcards">
    // //         Back to Flashcard list!    
    // //         </Link>
    // //         <br></br>
    // //         Edit Flashcards page
    // //     </div>
    // // ) */}
    
    );
}

export default EditFlashcards;