import React, { useState, useEffect } from "react";
import { Testimonials } from "../models";
import { DataStore, Storage } from "aws-amplify";
import { Rating } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";

export default function TestimonialForm() {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [imageKey, setImageKey] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);

    // Update the model's rating value (assuming you have a 'rating' state)
    setModelRating(newRating); // Replace 'setModelRating' with the appropriate setter function for your model's rating state
  };

  const processFile = async ({ file }) => {
    const fileExtension = file.name.split(".").pop();

    return file
      .arrayBuffer()
      .then((filebuffer) => window.crypto.subtle.digest("SHA-1", filebuffer))
      .then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((a) => a.toString(16).padStart(2, "0"))
          .join("");
        return { file, key: `${hashHex}.${fileExtension}` };
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new instance of Testimonials with the form data
    const newTestimonial = await DataStore.save(
      new Testimonials({
        content: content,
        name: name,
        location: location,
        rating: rating,
        image: imageKey, // Save the S3 image key in the Testimonials model
      })
    );

    console.log("New testimonial:", newTestimonial);
    setContent("");
    setName("");
    setLocation("");
    setRating(0);
    setImageKey("");
  };

  return (
    <div className="text-gray-900 py-10 pr-0 pl-0 bg-white m-5 rounded" style={{marginTop: "70px"}}>
      <section className="text-gray-800">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-6">
                <textarea
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="testimonialContent"
                  rows="3"
                  placeholder="Enter your testimonial content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="testimonialName"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="testimonialLocation"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="testimonialRating"
                  className="block mb-2 text-gray-800"
                >
                  Rating:
                </label>
                <Rating
                  id="testimonialRating"
                  value={rating}
                  onChange={handleRatingChange}
                  required
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="testimonialImage"
                  className="block mb-2 text-gray-800"
                >
                  Image:
                </label>
                <StorageManager
                  acceptedFileTypes={["image/*"]}
                  accessLevel="public"
                  maxFileCount={1}
                  // processFile={processFile}
                  path="images/"
                  onUploadSuccess={({ key }) => {setImageKey(key)}}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
