import Home10 from "@/components/layout/main/Home10";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Console2Success | E-Learning Platform",
  description: "Console2Success - Empowering learners with cutting-edge online courses and tutorials for personal and professional development.",
};

const Home_10 = () => {
  return (
    <PageWrapper>
      <main>
        <Home10 />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Home_10;
