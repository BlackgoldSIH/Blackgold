import React from 'react';

function CustomCircularProgress({ value, primaryColor = '#111', secondaryColor = '#c4c4c4' }) {
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Total circumference of the circle
  const strokeDashoffset = circumference - (value / 100) * circumference; // Offset for progress

  return (
    <div style={{ display: 'inline-block' }}>
      <svg width="120" height="120">
        {/* Background circle filled with primary color */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={primaryColor}
          strokeWidth="10"
          fill="none" // Transparent to show only stroke as the background
        />
        {/* Progress circle filled with secondary color */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={secondaryColor}
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)" // Rotates circle to start at the top
        />
        {/* Text displaying the progress percentage */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="20px"
          fill={secondaryColor}
        >
          {`${value}%`}
        </text>
      </svg>
    </div>
  );
}
export default CustomCircularProgress