import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import Achievements from "@/components/Achievements";

const AchievementsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageLayout>
            <Achievements />
        </PageLayout>
    );
};

export default AchievementsPage;
