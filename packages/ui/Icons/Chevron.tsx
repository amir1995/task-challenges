import React from 'react'

type ChevronProps = {
  dir?: 'up' | 'down' | 'left' | 'right'
}

const Chevron: React.FC<ChevronProps> = ({ dir = 'right' }) => {
  const rotations = {
    up: 'rotate(-90deg)',
    down: 'rotate(90deg)',
    left: 'rotate(180deg)',
    right: 'rotate(0deg)',
  }
  return (
    <svg
      style={{ transform: rotations[dir] }}
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.29289 5.87868C8.46447 7.05026 8.46447 8.94975 7.29289 10.1213L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L5.87868 8.70711C6.26921 8.31658 6.2692 7.68342 5.87868 7.29289L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
        fill="#E2E2E2"
      />
    </svg>
  )
}

export default Chevron
