import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    jobTitle: "Web Developer",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Jane Smith",
    jobTitle: "Graphic Designer",
    comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    jobTitle: "Marketing Specialist",
    comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];




function Testimonial(testimonials) {
  return (
    <div className="text-center">
      <p className="mb-4 text-lg">{testimonials.comment}</p>
      <p className="font-semibold">{testimonials.name}</p>
      <p className="text-gray-500">{testimonials.jobTitle}</p>
    </div>
  );
}

function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  return (
    <div className="max-w-xl px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button className="text-gray-500 hover:text-gray-700" onClick={handlePrev}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button className="text-gray-500 hover:text-gray-700" onClick={handleNext}>
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <Transition
        // as={React.Fragment}
        show={true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Testimonial testimonial={testimonials[currentTestimonial]} key={currentTestimonial} />
      </Transition>
    </div>
  );
}

export default TestimonialSlider;