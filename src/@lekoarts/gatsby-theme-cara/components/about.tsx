/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import  AboutMDX  from '../sections/about.mdx'

const About = ({ offset }: { offset: number }) => (
  <div>
    <Divider speed={0.1} offset={offset} filter={`blur(16px)`}>
      <UpDown>
        <SVG icon="circle" width={2} color="icon_pink" left="80%" top="60%" />
        <SVG icon="circle" hiddenMobile width={4} color="icon_green" left="20%" top="90%" />
        <SVG icon="circle" width={2} color="icon_yellow" left="29%" top="26%" />
        <SVG icon="circle" width={4} stroke color="icon_red" left="75%" top="30%" />
        <SVG icon="circle" width={2} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="circle" width={4} color="icon_teal" left="70%" top="20%" />
        <SVG icon="circle" width={2} stroke color="icon_orange" left="25%" top="5%" />
      </UpDown>
    </Divider>
    <Divider speed={0.1} offset={offset} filter={`blur(6px)`}>
      <UpDownWide>
        <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <SVG icon="circle" width={8} stroke color="icon_yellow" left="80%" top="70%" />
        <SVG icon="circle" width={6} color="icon_orange" left="10%" top="10%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="circle" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
    </Divider>
    <Divider speed={0.1} offset={offset} filter={`blur(2px)`}>
      <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="77%" top="20%" />
      <SVG icon="circle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
      <SVG icon="circle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
      <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
