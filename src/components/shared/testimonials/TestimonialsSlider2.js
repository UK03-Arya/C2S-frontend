"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonialSlide2 from "./TestimonialSlide2";
import { Navigation } from "swiper/modules";
import testimonialImage2 from "@/assets/images/testimonial/testi_2.png";

const TestimonialsSlider2 = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      image: testimonialImage2,
      desig: "Frontend Developer",
      desc: "I had a fantastic experience with Console2Success. The course materials were well-structured, and the support provided by the instructors was top-notch. I was able to enhance my skills and apply them in real-world projects.",
    },
    {
      name: "Priya Mehta",
      image: testimonialImage2,
      desig: "Full Stack Developer",
      desc: "Console2Success helped me land my dream job. The practical examples and real-world scenarios made learning easy and enjoyable. I highly recommend it to anyone looking to upgrade their tech skills.",
    },
    {
      name: "Amit Patel",
      image: testimonialImage2,
      desig: "Software Engineer",
      desc: "The learning environment at Console2Success was amazing. The courses are up-to-date with industry trends, and the hands-on practice made it easier to grasp complex topics. I am really happy with my progress here.",
    },
    {
      name: "Neha Gupta",
      image: testimonialImage2,
      desig: "UI/UX Designer",
      desc: "As a designer, Console2Success gave me the opportunity to learn new design tools and techniques. The mentorship provided is invaluable, and I feel confident in my ability to handle challenging projects now.",
    },
    {
      name: "Arjun Kumar",
      image: testimonialImage2,
      desig: "Backend Developer",
      desc: "Joining Console2Success was one of the best decisions for my career. The courses are well-organized, and the instructors are knowledgeable. I gained significant insights into backend development.",
    },
    {
      name: "Sneha Verma",
      image: testimonialImage2,
      desig: "Data Analyst",
      desc: "I learned so much about data analytics through Console2Success. The course structure and assignments helped me build a solid foundation in data science, and I feel confident in my analytical skills now.",
    },
    {
      name: "Ravi Iyer",
      image: testimonialImage2,
      desig: "DevOps Engineer",
      desc: "Console2Success provided me with the tools and knowledge I needed to excel in DevOps. The lessons were comprehensive and covered all the latest tools and methodologies. It was a fantastic learning journey.",
    },
  ];
  
  return (
    <Swiper
      className="testimonial2"
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
    >
      {testimonials.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialSlide2 testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSlider2;
