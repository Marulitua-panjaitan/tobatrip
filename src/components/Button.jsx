import React from 'react';

const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseStyle = "px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 active:scale-95 font-inter text-sm shadow-xl";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20",
    secondary: "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30",
    teal: "bg-teal-500 text-white hover:bg-teal-600 shadow-teal-500/20"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;