// @ts-ignore
import React from "react"
import { Styled, jsx, css, Flex } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const labelCss = css({
  ...tailwind.styles.h6,
  fontSize: [1, 2, 3],
  color: `secondary`,
  verticalAlign: `top`,
  display: `flex`
})


const inputCss = css({
  color: '#red',
  borderRadius: `10px`,
  margin: 0,
  fontSize: [1, 2, 3],
  marginLeft: `10px`,
  display: `flex`
})

const inputGroup = css({
  display: `flex`,
  flexDirection: `column`,
  flexFlow: `column wrap`,
  justifyContent: `space-around`,
  margin: `10px`
})

const formCss = css({
  display: `flex`,
  alignItems: `flex-start`,
  flexFlow: `row wrap`,
  justifyContent: `space-evenly`,
  padding: `10px`
})

const buttonCss = css({
  display: `block`,
  backgroundColor: `primary`,
  borderRadius: `10px`,
  width: `40%`,
  justifyContent: `center`,
  fontSize: `calc(1vw + 1vh)`,
  margin: `10px`,
  marginTop: `20px`,
  color: `text`
})

const buttonGroup = css({
  display: `flex`,
  flexDirection: `row`,
  flexFlow: `row wrap`,
  justifyContent: `center`
})


const ContactForm = () => (

  <Flex
    sx={{
      color: `text`,
      fontWeight: `semibold`,
      backgroundColor:tailwind.colors.gray[8],
      borderRadius: `10px`,
      flexDirection: `column`,
      flexFlow: `column wrap`,
      height: `100%`,
      width: `100%`,
      alignItems: `center`,
      justifyContent: `space-around`
    }}
  >
    <form css={formCss} method="post" action="#">
        <div css={inputGroup}>
          <label css={labelCss} htmlFor="name">Name</label>
          <input css={inputCss} type="text" name="name" id="name" />
          <label css={labelCss} htmlFor="email">Email</label>
          <input css={inputCss} type="text" name="email" id="email" />
          <div css={buttonGroup}>
            <input css={buttonCss} type="submit" value="Send" className="special" />
            <input css={buttonCss} type="reset" value="Reset" />
          </div>
        </div>
        <div css={inputGroup}>
          <label css={labelCss} htmlFor="message">Message</label>
          <textarea css={inputCss} name="message" id="message" rows={6}></textarea>
        </div>
    </form>
  </Flex>
)

export default ContactForm;
