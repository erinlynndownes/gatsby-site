// @ts-ignore
import React from "react"
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import { Link } from "gatsby"
import { css } from "theme-ui"

const exitBtnCss = (location) => {
  const btnLocation = location || 'right top'
  const locs = btnLocation.split(' ');
  const x = Math.max(locs.indexOf('left') , locs.indexOf('right') , locs.indexOf('center') , 0);
  const y = x === 0 ? 1 : 0;
  const cornerTop = locs[x] !== 'left' && !(locs[y] === 'top' && y === 0) ? '8px' : '0';
  const cornerRight = locs[x] === 'left' && !(locs[y] === 'top' && y === 0) ? '8px' : '0';
  const cornerBottom = locs[x] === 'left' && locs[y] === 'bottom' ? '8px' : '0';
  const cornerLeft = locs[x] !== 'left' && !(locs[y] === 'top' && y === 0 ) ? '8px' : '0';
  return css({
    ...getBtnX(locs[x]),
    ...getBtnY(locs[y]),
    display: `block`,
    position: `absolute`,
    margin: `auto`,
    backgroundColor: `secondary`,
    borderRadius: `${cornerTop} ${cornerRight} ${cornerBottom} ${cornerLeft}`,
    height: `auto`,
    width: `15%`,
    maxWidth: `80px`,
    padding: `8px`
  })

}

const getBtnX = (loc) => {
  return {
    right: loc === 'right' ? 0 : 'auto',
    left: loc === 'left' ? 0 : 'auto'
  }
}

const getBtnY = (loc) => {
  return {
    top: loc === 'top' ? '20px' : 'auto',
    bottom: loc === 'bottom' ? '20px' : 'auto'
  }
}

const GameView = ({location}) => {

  return (
  <Layout>
    <div css={exitBtnCss(location?.state?.btnLoc)}>
      <Link css={css({
        display: `block`,
        color: 'white',
        textDecoration: 'none',
        margin: 'auto',
        fontSize: [1, 2, 3]
      })} to={'/'}>EXIT</Link>
    </div>
    <iframe allow="gyroscope;accelerometer" sandbox="allow-same-origin allow-scripts" css={css({
      display: `block`,
      height: `100vh`,
      maxWidth: `100%`,
      margin: `auto`,
    })} scrolling="no" frameBorder="no" src={location?.state?.url} width="768px" height="1024px" title={location?.state?.title}></iframe>
  </ Layout>

)}

export default GameView