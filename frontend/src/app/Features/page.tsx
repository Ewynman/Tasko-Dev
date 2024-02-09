"use client";

import { useState } from "react";
import Navbar from "@/Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const [faqOpen, setFaqOpen] = useState(false);

  const toggleFaq = () => {
    setFaqOpen(!faqOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center">

        <main className="flex-grow">
          <section className="hero bg-gray-100">
            <h1 className="text-4xl font-bold">Welcome to our Web App</h1>
            <p className="text-lg">
              Discover amazing features that will enhance your experience.
            </p>
          </section>

          <section className="features grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature 1 */}
            <div className="feature bg-white p-4 rounded-lg shadow relative">
            <FontAwesomeIcon icon={faImage} className="feature-image mx-auto my-auto text-4xl" />
              <div className="feature-overlay">
                <h2 className="text-2xl font-bold">Feature 1</h2>
                <p>Placeholder text for feature 1.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature bg-white p-4 rounded-lg shadow relative">
              <img
                src="feature2.jpg"
                alt="Feature 2"
                className="feature-image"
              />
              <div className="feature-overlay">
                <h2 className="text-2xl font-bold">Feature 2</h2>
                <p>Placeholder text for feature 2.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature bg-white p-4 rounded-lg shadow relative">
              <img
                src="feature3.jpg"
                alt="Feature 3"
                className="feature-image"
              />
              <div className="feature-overlay">
                <h2 className="text-2xl font-bold">Feature 3</h2>
                <p>Placeholder text for feature 3.</p>
              </div>
            </div>
          </section>

          <section className="faq">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={toggleFaq}
            >
              Toggle FAQ
            </button>

            {faqOpen && (
              <div className="faq-content bg-gray-200 p-4 rounded-lg mt-4">
                {/* FAQ content */}
                <p>Placeholder text for FAQ content.</p>
              </div>
            )}
          </section>
        </main>

        <footer className="bg-gray-800">{/* Footer */}</footer>
      </div>
      ); export default Page;
      <footer className="bg-gray-800">{/* Footer */}</footer>
    </div>
  );
};

export default Page;
