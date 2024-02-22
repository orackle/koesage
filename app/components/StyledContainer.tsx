import React, { ReactNode } from "react";

// Define the Props type for the StyledContainer component
type StyledContainerProps = {
    children: ReactNode;
}

// Define the StyledContainer component
const StyledContainer: React.FC<StyledContainerProps> = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default StyledContainer;
