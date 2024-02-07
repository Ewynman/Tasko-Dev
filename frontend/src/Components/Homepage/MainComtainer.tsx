import React from 'react';

const MainContainer: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-4xl font-bold text-center text-gray-800">
                Welcome to Tasko
            </div>
            <div className="text-lg text-center text-gray-600 mt-4">
                Where tasks meet efficiency
            </div>
            <div className="animate-bounce mt-8">
                <svg
                    className="w-6 h-6 text-gray-800 animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View Plans
            </button>
        </div>
    );
};

export default MainContainer;
