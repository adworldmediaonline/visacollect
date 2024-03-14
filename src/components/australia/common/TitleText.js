import React from "react";

const TitleText = ({ title }) => {
    return (
        <h3 className="text-2xl font-semibold text-black md:text-4xl">
            {title}
        </h3>
    );
};

export default TitleText;
