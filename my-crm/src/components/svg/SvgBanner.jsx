import * as React from "react"
const SvgBanner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150"
    viewBox="0 0 1440 590"
    preserveAspectRatio="none"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
        <stop offset="5%" stopColor="#F78DA7" />
        <stop offset="95%" stopColor="#8ED1FC" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillOpacity={0.53}
      d="M0 600V200c81.828-25.866 163.656-51.732 255-35s192.206 76.062 303 93c110.794 16.938 231.522-8.517 335-11 103.478-2.483 189.708 18.005 278 14 88.292-4.005 178.646-32.502 269-61v400Z"
      className="transition-all duration-300 ease-in-out delay-150 path-0"
      transform="rotate(-180 720 300)"
    />
    <path
      fill="url(#a)"
      d="M0 600V400c87.35 20 174.699 40 277 42 102.301 2 219.555-14 317-39s175.081-59 258-42c82.919 17 171.12 85 270 100s208.44-23 318-61v200Z"
      className="transition-all duration-300 ease-in-out delay-150 path-1"
      transform="rotate(-180 720 300)"
    />
  </svg>
)
export default SvgBanner
