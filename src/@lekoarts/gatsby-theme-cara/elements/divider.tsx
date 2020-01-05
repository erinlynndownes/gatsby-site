import React from "react"
import { css } from "theme-ui"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
  opacity?: number
  filter?: string
  transform? : string
}
const Divider = ({ speed, offset, factor, bg, fill, clipPath, children, className, opacity = 1, filter = 'none', transform = `translateZ(0)` }: DividerProps) => (
  <ParallaxLayer
    css={css({
      position: `absolute`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
      opacity,
      filter,
      transform
    })}
    speed={speed}
    offset={offset}
    factor={factor || 1}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Divider
