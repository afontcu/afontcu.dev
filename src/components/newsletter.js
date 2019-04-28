import React from 'react'
import { rhythm, systemFonts } from '../utils/typography'

export default () => (
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/afontcu"
    method="post"
    target="popupwindow"
    onSubmit="window.open('https://buttondown.email/afontcu', 'popupwindow')"
    style={{
      backgroundColor: `white`,
      padding: rhythm(1.5),
      borderRadius: `0.5rem`,
      boxShadow: `rgba(0, 37, 49, 0.05) 0px -7px 20px 0px, rgba(0, 0, 0, 0.05) 0px 3px 11px 1px`,
      fontFamily: systemFonts,
      width: `85%`,
      margin: `0 auto`,
    }}
  >
    <p>
      <strong>Subscribe to the newsletter</strong> to receive my posts a week
      earlier, right to your inbox 🚀
    </p>
    <input type="hidden" value="1" name="embed" />
    <label
      style={{ display: `block`, width: `100%`, marginBottom: rhythm(0.25) }}
      for="newsletter-email"
    >
      Your email:
    </label>
    <input
      style={{
        width: `100%`,
        backgroundColor: `#f1f1f2`,
        border: 0,
        padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
        borderRadius: `4px`,
        marginBottom: rhythm(0.5),
      }}
      type="email"
      name="email"
      id="newsletter-email"
    />
    <button
      className="btn"
      style={{
        width: `100%`,
        color: `white`,
        border: 0,
        textTransform: `uppercase`,
        letterSpacing: `-0.5px`,
        fontSize: `0.9rem`,
        backgroundColor: `rgb(19, 72, 150)`,
        padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
        borderRadius: `4px`,
        cursor: `pointer`,
        transition: `all 0.15s ease`,
      }}
    >
      <span>Subscribe</span>
    </button>
  </form>
)
