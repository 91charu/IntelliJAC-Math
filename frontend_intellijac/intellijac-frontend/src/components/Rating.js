import React, {useState} from "react";
import './Rating.css';
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";


function Ratings() {   
      
    // useState with onclick...
    const [rating, setRating] = useState(null)

    const handleclick=(e)=>{
        e.preventDefault()
        const ratings=e.target.value;
        console.log("I clicked the star!");
        fetch("http://localhost:8080/ratings/add", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(ratings)
        }).then(()=>{
            console.log("New rating added.");
        })
    }


    return (


            <div style= {{backgroundColor: "#DBCDF0"}}>

                <h1 style= {{ color: "#80202B"}}><u>Please rate our website!!</u></h1>
                <br />

                {/* mapped over 5 items using an empty array */}
                {/* added iterator i as another argument/parameter to assign each star a number. i+1 b/c arrays starts at 0 and we want 1 to start */}
                {[...Array(5)].map((star, i) => { 

                    const ratingNumber = i + 1;

                    return (
                    <label style= {{ marginLeft: "200px"}}>
                        {/* used radio input, so users can "click on stars". Radio input hidden using css  */}
                        {/* onclick... */}
                        <input type="radio" name="rating" value={ratingNumber} onClick={(handleclick) => setRating(ratingNumber)} onChange={(e)=>handleclick(e)}></input> 
                        {/* set colors of stars with ternary operator*/}
                        <FaStar className="star" size={50} color={ratingNumber <= rating ? "#ffa500" : "#808080"}/>

                    </label>                    
                    );                      
                })}
            
                <br></br>
                <br></br>
                <h4 style= {{ marginLeft: "650px", marginTop: "40px", fontSize: "30px", color: "#354B18"}}> Your rating is {rating}.</h4>

                {/* added link to comment box */}
                <br></br>
                <p> Do you wish to leave a comment about our app?? If so, then please <Link to={"/userComment/"} > click here!!


                </Link></p>

             <Link to="/">Go to HomePage</Link>


            </div>

    );

}

export default Ratings;