/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/intro.mdx"

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} filter={`blur(16px)`}>
      <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
      <SVG icon="circle" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />\
      <SVG icon="circle" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="circle" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="circle" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Divider speed={0.2} offset={offset} filter={`blur(8px)`}>
      <UpDownWide>
        <SVG icon="circle" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="circle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="circle" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <SVG icon="circle" width={12} color="icon_darkest" left="40%" top="30%" />
        <SVG icon="circle" width={16} stroke color="icon_darker" left="10%" top="50%" />
      </UpDownWide>
    </Divider>
    <Divider speed={0.2} offset={offset} filter={`blur(2px)`}>
      <UpDown>
        <SVG icon="circle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
        <SVG icon="circle" width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
        <SVG icon="circle" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
        <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      </UpDown>
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
