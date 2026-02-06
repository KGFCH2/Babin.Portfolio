import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MaterialsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Materials section has been removed — redirecting to home
        navigate("/", { replace: true });
    }, [navigate]);

    return null;
};

export default MaterialsPage;
