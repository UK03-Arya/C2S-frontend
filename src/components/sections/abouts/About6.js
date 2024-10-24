import Image from "next/image";
import aboutImage from "@/assets/images/logo/card1.jpg";
import aboutImage15 from "@/assets/images/about/about_15.png";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import SectionName from "@/components/shared/section-names/SectionName";

import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About6 = () => {
  return (
    <section>
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left */}
          <div data-aos="fade-up">
            <TiltWrapper>
              <div className="tilt">
                <Image
                  className="w-full rounded-lg2"
                  src={aboutImage}
                  alt="Console2Success Learning"
                  placeholder="blur"
                />
              </div>
            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">

            {/* <SectionName>About Console2Success</SectionName> */}
            <p className="flex items-center gap-x-4 text-lg text-blackColor dark:text-blackColor-dark mb-25px">

            <HeadingPrimary>
              Welcome to Your Success Pathway
            </HeadingPrimary>
            <Image loading="lazy" src={aboutImage15} alt="about experience" />
</p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-25px">
  Console2Success is your gateway to skill enhancement and personal growth. 
  Our platform offers a wide range of courses designed to boost your career in various fields.
</p>

<p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-25px">
  We focus on providing a user-friendly learning experience, helping you navigate through course materials with ease. 
  Join us and take your skills to the next level.
</p>

<p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
  Our expert mentors guide you through every step of your learning journey, ensuring that you gain not just theoretical knowledge, but also practical skills. 
  With Console2Success, you're not just learning — you're evolving.
</p>

            <div className="mt-30px">
              <ButtonPrimary path="/about" arrow={true}>
                Learn More
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About6;
