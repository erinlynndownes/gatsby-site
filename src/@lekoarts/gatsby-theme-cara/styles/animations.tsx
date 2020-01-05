import { keyframes, css } from "@emotion/core"
import styled from "@emotion/styled"

const wave = keyframes`
  0% {
    d: path("M 0 150 C 125 100 300 150 400 175 C 500 200 750 225 800 200 L 800 0 L 0 0 L 0 200 Z");
  }
  50% {
    d: path("M 0 175 C 125 150 300 175 400 175 C 500 175 750 200 800 175 L 800 0 L 0 0 L 0 200 Z");
  }
  100% {
    d: path("M 0 200 C 125 225 300 200 400 175 C 500 150 750 125 800 150 L 800 0 L 0 0 L 0 200 Z");
  }
`

const waveOrig = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 200 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 200 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 200 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const waveAnimation = (length: string) => css`
  animation: ${wave} ${length} linear infinite alternate;
`
