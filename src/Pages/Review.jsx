import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import titlebg from "../assets/yellow-bg.png";
import { FaStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./Review.css";
import client1 from "../assets/testimonial-1.png";
import client2 from "../assets/testimonial-2.png";
import client3 from "../assets/testimonial-3.png";
import HomeFooter from "../Components/HomeFooter";
import Navigation from "../Components/Navbar";
import '../Responsive.css'

function Review() {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewsList, setReviewsList] = useState([]);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      fullName,
      email,
      review,
      rating,
    };
    setReviewsList([...reviewsList, newReview]);
    setFullName("");
    setEmail("");
    setReview("");
    setRating(0);
    setShowModal(false);
  };

  const handleWriteReviewClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="full-bg-color">
      <Navigation />
      <div className="review-page-wrapper container-fluid ">
        <div className="container">
          <div className="section-title">
            <h1>
              Our All Clients <span>Review</span>
            </h1>
            <img className="title-bg" src={titlebg} alt="" />
          </div>
          <div className="row write-review-wrapper">
            <div className="write-review col-7">
              <h4>Write Review Here</h4>
              <button
                className="btn btn-primary mb-3"
                onClick={handleWriteReviewClick}
              >
                Write Review
              </button>
            </div>
          </div>

          <div
            className={`modal ${showModal ? "show d-block" : ""}`}
            tabIndex="-1"
            style={{ display: showModal ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Write Review</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCancel}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        value={fullName}
                        onChange={handleFullNameChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="review" className="form-label">
                        Review:
                      </label>
                      <textarea
                        className="form-control"
                        id="review"
                        value={review}
                        onChange={handleReviewChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Rating:</label>
                      <div>
                        {[1, 2, 3, 4, 5].map((value) => (
                          <FaStar
                            key={value}
                            className={`star-icon ${
                              rating >= value ? "selected" : ""
                            }`}
                            onClick={() => handleRatingClick(value)}
                          />
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                      Submit Review
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="previus-cliend-review">
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="client-single-review">
                  <div className="review-details">
                    <p>
                      Creative Campus delivered outstanding work, exceeding
                      expectations. Highly recommended for their exceptional
                      software solutions.
                    </p>
                  </div>
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img src={client1} alt="" />{" "}
                    </div>

                    <div className="name-reating">
                      <div>
                        <h5>Sharmin Eity</h5>
                      </div>
                      <div className="client-reating-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="client-single-review">
                  <div className="review-details">
                    <p>
                      I am thoroughly impressed with Creative Campus. Their work
                      is exceptional, and their software solutions have truly
                      transformed my website. I highly recommend them for their
                      professionalism, expertise, and outstanding results.
                    </p>
                  </div>
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img src={client2} alt="" />{" "}
                    </div>

                    <div className="name-reating">
                      <div>
                        <h5>Munny CF</h5>
                      </div>
                      <div className="client-reating-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="client-single-review">
                  <div className="review-details">
                    <p>
                      Choosing Creative Campus was the best decision for my
                      company's website. I couldn't be happier with the
                      outstanding work they have done for us.
                    </p>
                  </div>
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img src={client3} alt="" />{" "}
                    </div>

                    <div className="name-reating">
                      <div>
                        <h5>Mahfuja Akther</h5>
                      </div>
                      <div className="client-reating-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="client-single-review">
                  <div className="review-details">
                    <p>
                      Working with Creative Campus has been a game-changer for
                      my business. Their software solutions have streamlined our
                      operations and improved our overall efficiency. I am
                      grateful for their expertise and highly recommend their
                      services.
                    </p>
                  </div>
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img src={client1} alt="" />{" "}
                    </div>

                    <div className="name-reating">
                      <div>
                        <h5>Sharmin Eity</h5>
                      </div>
                      <div className="client-reating-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="client-single-review">
                  <div className="review-details">
                    <p>
                      Creative Campus has been an invaluable partner in the
                      growth of my business. I am grateful for their expertise
                      and highly recommend their services to others.
                    </p>
                  </div>
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img src={client3} alt="" />{" "}
                    </div>

                    <div className="name-reating">
                      <div>
                        <h5>Sonu Sharma</h5>
                      </div>
                      <div className="client-reating-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="client-single-review">
                  <div className="review-details">
                    <p>
                      Creative Campus delivered outstanding work, exceeding
                      expectations. Highly recommended for their exceptional
                      software solutions.
                    </p>
                  </div>
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img src={client1} alt="" />{" "}
                    </div>

                    <div className="name-reating">
                      <div>
                        <h5>Sharmin Eity</h5>
                      </div>
                      <div className="client-reating-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="your-review-wrapper">
            <h2 className="mt-4">Your Review:</h2>
            <ul className="list-group">
              {reviewsList.map((review, index) => (
                <li key={index} className="list-group-item">
                  <h5>Name: {review.fullName}</h5>
                  <div className="details-star">
                    <p>Email: {review.email}</p>
                    <p>Details: {review.review}</p>
                    
                  </div>
                  <div className="all-stars" >
                      {[...Array(review.rating)].map((_, index) => (
                        <FaStar key={index} className="star-icon selected" />
                      ))}
                    </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Review;
