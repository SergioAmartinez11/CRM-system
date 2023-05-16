import * as React from "react"
export const SvgFooter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150"
    viewBox="0 0 1440 690"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
        <stop offset="5%" stopColor="#F78DA7" />
        <stop offset="95%" stopColor="#8ed1fc" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillOpacity={0.265}
      d="M0 700V140c100.944 24.5 201.887 49 274 43s115.395-42.5 198-68 204.533-40 285-26c80.467 14 119.472 56.5 189 56s169.58-44 257-52c87.42-8 162.21 19.5 237 47v560Z"
      className="transition-all duration-300 ease-in-out delay-150 path-0"
    />
    <path
      fill="url(#a)"
      fillOpacity={0.4}
      d="M0 700V280c89.79-13.018 179.58-26.036 267-32 87.42-5.964 172.472-4.874 250 4 77.528 8.874 147.533 25.533 208 34 60.467 8.467 111.395 8.741 195-4s199.887-38.497 292-41 160.056 18.249 228 39v420Z"
      className="transition-all duration-300 ease-in-out delay-150 path-1"
    />
    <path
      fill="url(#a)"
      fillOpacity={0.53}
      d="M0 700V420c84.915-11.715 169.83-23.43 252-32 82.17-8.57 161.592-13.992 239-16 77.408-2.008 152.8-.6 227 10 74.2 10.6 147.208 30.392 239 31 91.792.608 202.37-17.97 286-20 83.63-2.03 140.315 12.485 197 27v280Z"
      className="transition-all duration-300 ease-in-out delay-150 path-2"
    />
    <path
      fill="url(#a)"
      d="M0 700V560c81.836-20.197 163.672-40.395 248-50 84.328-9.605 171.149-8.618 249 5s146.733 39.867 212 41c65.267 1.133 126.918-22.849 207-17s178.595 41.528 269 50c90.405 8.472 172.703-10.264 255-29v140Z"
      className="transition-all duration-300 ease-in-out delay-150 path-3"
    />
  </svg>
)
