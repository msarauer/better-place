import React, {useState, useEffect} from 'react'
import axios from "axios"

const AddReview = ({token, setToken, opportunities, opportunity, city, completedOpportunities}) => {

const [userFeedback, setUserFeedback] = useState("")
const [rating, setRating] = useState("Rating")
const [reviews, setReviews] = useState([]);

console.log("OPP ID ID I D----", opportunity.opportunity_id)

// useEffect(() => {
//   axios
//   .get(`/api/reviews`)
//   .then((data) => {
//     const newReviews = data.data.reviews;
//     console.log("DATA NEW REVIEWS----", newReviews)
//     setReviews('test')
//     console.log('SHABLAGOOO----', reviews)
//   })
//   .then(() => {

//     })
//     .catch((e) => {
//       console.log("axiosError:", e);
//     });
// }, [token]);



const handleSubmitReview = (e) => {
  e.preventDefault();
  const userSave = (data) => {
    axios
      .post(`/api/reviews`, data)
      .then((data) => {
        console.log("SHABLAGOOOO TOKEN-----", data);
      })
      .catch((e) => {
        console.log("post error:", e.message);
      });
  };

  const saveData = {
    user_id: token.id,
    opportunity_id: opportunity.opportunity_id,
    user_feedback: userFeedback,
    rating
    
  };
  console.log("SAVED DATA-----", saveData)
  userSave(saveData);
  

};

// console.log("REIVIEWS INSIDE OF ADD REVIEW----", reviews)

return (
  <div className="mb-2">
    <form action="">
      <div className="form-row">
        <div className="form-group col-8">
          {/* <label htmlFor="name">Name</label>
          <input
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="name"
            type="text"
            className="form-control"
          /> */}
        </div>
        <div className="form-group col-4">
          <label htmlFor="rating">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            id="rating"
            className="custom-select"
          >
            <option disabled>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="Review">Review</label>
        <textarea
          value={userFeedback}
          onChange={(e) => setUserFeedback(e.target.value)}
          id="Review"
          className="form-control"
        ></textarea>
      </div>
      <button
        type="submit"
        onClick={handleSubmitReview}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
);



}






export default AddReview