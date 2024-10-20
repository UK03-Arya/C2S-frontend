import About3 from "@/components/sections/abouts/About3";
import About6 from "@/components/sections/abouts/About6";
import About9 from "@/components/sections/abouts/About9";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import CoursesFilter from "@/components/sections/courses/CoursesFilter";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import Hero5 from "@/components/sections/hero-banners/Hero5";
import Instructors2 from "@/components/sections/instructors/Instructors2";
import PopularSubjects2 from "@/components/sections/popular-subjects/PopularSubjects2";
import Registration from "@/components/sections/registrations/Registration";
import SubjectMarque from "@/components/sections/sub-section/SubjectMarque";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import React from "react";

const Home5 = () => {
  return (
    <>
    <Hero5 />
    <About6/>

    {/* <SubjectMarque /> */}
    <PopularSubjects2/>
    <Instructors2 />
    <Testimonials2 />

    {/* <FeatureCourses title="Featured CoursesTestttt " /> */}
    {/* <About3 />
    <PopularSubjects2 /> */}
    {/* <CoursesFilter /> */}
    <About9 />
    <Blogs2 />

    <Registration />

  </>
  );
};

export default Home5;
