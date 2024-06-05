import { useTheme } from "next-themes"

export function Logo({ height }: { height?: number }) {
  const { theme } = useTheme()

  return (
    <svg
      data-v-423bf9ae=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129.73469556961803 60"
      height={height ?? 25}
    >
      <g
        data-v-423bf9ae=""
        id="69074bb8-71d2-46b2-9c2b-c1857451947d"
        fill={theme === "dark" ? "#fff" : "#000"}
        transform="matrix(6.122449456230433,0,0,6.122449456230433,-1.7755095279252373,-11.816328097660907)"
      >
        <path d="M0.50 6.39L0.50 1.94L5.41 1.94L5.41 3.57L2.45 3.57L2.45 5.89L5.00 5.89L5.04 5.91L5.02 5.95Q5.00 6.44 5.00 6.52L5.00 6.52L4.72 6.52L4.72 6.54Q4.72 6.71 4.69 7.29L4.69 7.29L4.95 7.29Q4.95 7.57 4.90 7.57L4.90 7.57L3.10 7.57L3.10 7.91L2.17 7.91L2.17 8.09L2.45 8.09L2.45 8.94L3.38 8.94L3.38 9.09L2.45 9.09L2.45 11.46L2.43 11.58L1.42 11.58L1.42 11.73L0.53 11.73Q0.50 11.73 0.50 11.70L0.50 11.70L0.50 11.45L0.52 11.29L1.00 11.29L1.00 11.04L0.50 11.04L0.50 10.10L0.73 10.10L0.73 6.64L1.13 6.64L1.13 6.39L0.50 6.39ZM0.33 8.75L0.33 8.44L0.40 8.44Q0.44 8.44 0.44 8.47L0.44 8.47L0.44 8.70Q0.44 8.80 0.49 8.80L0.49 8.80L0.55 8.80Q0.57 8.80 0.60 8.75L0.60 8.75L0.60 8.47Q0.61 8.44 0.64 8.44L0.64 8.44L0.70 8.44L0.70 8.75Q0.70 8.89 0.50 8.89L0.50 8.89Q0.33 8.87 0.33 8.75L0.33 8.75ZM2.48 8.68L2.48 8.60L2.50 8.60Q2.75 8.72 2.80 8.72L2.80 8.72L2.80 8.81L2.50 8.91L2.48 8.91L2.48 8.86Q2.48 8.84 2.68 8.76L2.68 8.76L2.68 8.75Q2.65 8.75 2.48 8.68L2.48 8.68ZM2.43 8.94L1.54 8.94L1.54 9.09L2.43 9.09L2.43 8.94ZM0.47 9.01L0.47 9.01L0.49 9.01Q0.66 9.01 0.66 9.16L0.66 9.16L0.55 9.16Q0.55 9.09 0.47 9.09L0.47 9.09Q0.44 9.09 0.42 9.14L0.42 9.14Q0.66 9.24 0.66 9.28L0.66 9.28Q0.66 9.29 0.68 9.32L0.68 9.32Q0.68 9.45 0.49 9.47L0.49 9.47Q0.30 9.45 0.30 9.30L0.30 9.30L0.42 9.30Q0.42 9.37 0.45 9.37L0.45 9.37L0.53 9.37Q0.57 9.37 0.57 9.34L0.57 9.34L0.57 9.30Q0.32 9.24 0.32 9.17L0.32 9.17L0.32 9.11Q0.38 9.01 0.47 9.01ZM0.30 9.58L0.30 9.58L0.36 9.58Q0.45 9.58 0.49 9.72L0.49 9.72L0.60 9.58L0.68 9.58L0.68 9.62Q0.57 9.78 0.57 9.84L0.57 9.84Q0.59 9.84 0.70 10.01L0.70 10.01L0.70 10.04L0.60 10.04Q0.59 10.04 0.49 9.90L0.49 9.90Q0.42 10.02 0.38 10.04L0.38 10.04L0.29 10.04Q0.40 9.83 0.44 9.82L0.44 9.82Q0.30 9.62 0.30 9.58ZM5.60 3.57L5.60 1.93L11.34 1.93L11.34 3.57L9.44 3.57L9.44 10.34L10.30 10.34L10.30 10.54L9.44 10.54L9.44 11.29L8.93 11.29L8.93 11.55L9.29 11.55L9.29 11.73L7.55 11.73Q7.51 11.73 7.51 11.70L7.51 11.70L7.51 3.57L5.60 3.57ZM9.43 10.34L8.76 10.34L8.76 10.54L9.43 10.54L9.43 10.34ZM11.04 8.85L11.04 1.93L12.98 1.93L12.98 5.95L12.61 5.95L12.61 10.10L15.50 10.10L15.50 10.97L14.92 10.97L14.92 11.17L15.50 11.17L15.50 11.73L13.62 11.73L13.62 11.58L11.05 11.58Q11.04 11.42 11.04 11.33L11.04 11.33L11.04 9.15L11.53 9.15L11.53 8.85L11.04 8.85ZM12.87 9.79L12.74 9.59L12.85 9.59Q12.93 9.71 12.95 9.71L12.95 9.71Q13.00 9.59 13.03 9.59L13.03 9.59L13.13 9.59Q13.11 9.65 13.00 9.79L13.00 9.79Q13.04 9.86 13.15 10.02L13.15 10.02L13.03 10.02Q12.95 9.95 12.95 9.88L12.95 9.88Q12.93 9.88 12.83 10.02L12.83 10.02L12.74 10.02L12.74 10.00L12.87 9.80L12.87 9.79ZM15.50 11.17L15.50 10.97L16.21 10.97L16.21 11.17L15.50 11.17ZM16.31 8.85L16.31 1.93L18.25 1.93L18.25 5.95L17.88 5.95L17.88 10.10L20.77 10.10L20.77 10.97L20.19 10.97L20.19 11.17L20.77 11.17L20.77 11.73L18.89 11.73L18.89 11.58L16.32 11.58Q16.31 11.42 16.31 11.33L16.31 11.33L16.31 9.15L16.80 9.15L16.80 8.85L16.31 8.85ZM18.14 9.79L18.01 9.59L18.12 9.59Q18.20 9.71 18.22 9.71L18.22 9.71Q18.27 9.59 18.30 9.59L18.30 9.59L18.40 9.59Q18.38 9.65 18.27 9.79L18.27 9.79Q18.31 9.86 18.42 10.02L18.42 10.02L18.30 10.02Q18.22 9.95 18.22 9.88L18.22 9.88Q18.20 9.88 18.10 10.02L18.10 10.02L18.01 10.02L18.01 10.00L18.14 9.80L18.14 9.79ZM20.77 11.17L20.77 10.97L21.48 10.97L21.48 11.17L20.77 11.17Z"></path>
      </g>
      <style>{`
        svg {
          mask-image: linear-gradient(
            60deg,
            black 25%,
            rgba(0, 0, 0, 0.2) 50%,
            black 75%
          );
          mask-size: 400%;
          mask-position: 0%;
        }
        svg:hover {
          mask-position: 100%;
          transition:
            mask-position 1s ease,
            -webkit-mask-position 1s ease;
        }
      `}</style>
    </svg>
  )
}