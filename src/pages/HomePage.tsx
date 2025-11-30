import Hero from "@/components/Hero";
import InteractiveStats from "@/components/InteractiveStats";
import PageLayout from "@/components/PageLayout";

const HomePage = () => {
    return (
        <PageLayout>
            <Hero />
            <InteractiveStats />
        </PageLayout>
    );
};

export default HomePage;
