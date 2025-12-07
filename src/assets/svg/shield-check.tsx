import type { SVGAttributes } from 'react'

const ShieldCheck = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='374' height='300' viewBox='0 0 374 300' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        opacity='0.3'
        d='M187.335 89.7766C195.497 94.4846 207.97 99.7226 225.324 101.961C230.601 102.642 235.651 102.988 240.331 102.988C242.665 102.988 244.855 102.904 246.911 102.75C246.66 111.158 245.61 121.772 242.728 133.34C234.617 165.901 216.003 191.999 187.335 211.045C158.666 191.999 140.049 165.901 131.937 133.34C129.055 121.769 128.004 111.155 127.753 102.75C129.809 102.904 132 102.988 134.333 102.988C139.013 102.988 144.063 102.643 149.337 101.962C166.695 99.7236 179.172 94.4846 187.335 89.7766Z'
        stroke='url(#paint0_linear_17730_14030)'
        strokeWidth='6'
      />
      <path
        d='M187.336 69.3936C187.336 69.3936 175.337 81.8456 147.212 85.4716C142.32 86.1036 138.049 86.3616 134.334 86.3616C117.61 86.3616 112.167 81.1236 112.167 81.1236C112.167 81.1236 95.9149 177.593 187.336 230.607C278.751 177.593 262.499 81.1236 262.499 81.1236C262.499 81.1236 257.059 86.3616 240.332 86.3616C236.618 86.3616 232.345 86.1026 227.454 85.4716C199.332 81.8446 187.336 69.3936 187.336 69.3936Z'
        stroke='url(#paint1_linear_17730_14030)'
        strokeWidth='12'
      />
      <path
        d='M214 130L177.333 166.667L160.667 150'
        stroke='var(--primary)'
        strokeWidth='8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_17730_14030'
          x1='187.332'
          y1='89.7766'
          x2='187.332'
          y2='244.884'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--primary)' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_17730_14030'
          x1='187.333'
          y1='69.3936'
          x2='187.333'
          y2='235.242'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--primary)' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ShieldCheck
