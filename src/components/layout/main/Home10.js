import About6 from "@/components/sections/abouts/About6";
import About9 from "@/components/sections/abouts/About9";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import Hero10 from "@/components/sections/hero-banners/Hero10";
import Hero5 from "@/components/sections/hero-banners/Hero5";
import Hero8 from "@/components/sections/hero-banners/Hero8";
import Instructors2 from "@/components/sections/instructors/Instructors2";
import PopularSubjects from "@/components/sections/popular-subjects/PopularSubjects";
import PopularSubjects2 from "@/components/sections/popular-subjects/PopularSubjects2";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";

import Programs2 from "@/components/sections/programs/Programs2";
import Registration from "@/components/sections/registrations/Registration";
import Counter2 from "@/components/sections/sub-section/Counter2";
import ImageGallery from "@/components/sections/sub-section/ImageGallery";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import React from "react";

const Home10 = () => {
  return (
    <>
     <Hero5 />
     <Hero8/>
    <About6/>

    {/* <SubjectMarque /> */}
    <PopularSubjects2/>
    {/* <Instructors2 /> */}
    <Testimonials2 />

   
    <About9 />
    <Blogs2 />

    <Registration />
    </>
  );
};

export default Home10;
