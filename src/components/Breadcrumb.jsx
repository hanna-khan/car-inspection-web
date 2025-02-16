import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumb = (props: any) => {
    const { menuTitle } = props;
    const navigate = useNavigate();

    return (
        <div className="text-lg font-semibold text-secondary mb-6 pb-4 border-b-2">
            <span 
                className="text-accent cursor-pointer"
                onClick={() => navigate("/")}
            >
                Home {" "}
            </span> 
            &gt; <span>{menuTitle}</span>
        </div>
    );
};

export default Breadcrumb;
