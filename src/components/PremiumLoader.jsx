import React from 'react';

const PremiumLoader = () => {
    return (
        <div className="fixed inset-0 z-9999 flex h-screen w-screen flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
        <div className="relative h-20 w-20">
            <div className="absolute inset-0 h-full w-full animate-[spin_1.5s_ease-in-out_infinite] rounded-full border-4 border-transparent border-b-blue-600 border-t-blue-600"></div>
            <div className="absolute left-[15%] top-[15%] h-[70%] w-[70%] animate-[spin_1s_linear_infinite_reverse] rounded-full border-4 border-transparent border-l-amber-500 border-r-amber-500"></div>
        </div>
        <div className="mt-6 animate-pulse font-sans text-lg font-medium uppercase tracking-[0.2em] text-slate-800">
            Loading...
        </div>
        </div>
    );
};

export default PremiumLoader;