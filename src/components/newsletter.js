import React from 'react'
import { rhythm, systemFonts } from '../utils/typography'

export default class Newsletter extends React.Component {
  handleSubmit() {
    window.open('https://buttondown.email/afontcu', 'popupwindow')
  }

  render() {
    return (
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/afontcu"
        method="post"
        target="popupwindow"
        data-testid="form"
        onSubmit={this.handleSubmit}
        style={{
          backgroundColor: `white`,
          padding: rhythm(1.5),
          borderRadius: `0.5rem`,
          boxShadow: `rgba(0, 37, 49, 0.05) 0px -7px 20px 0px, rgba(0, 0, 0, 0.05) 0px 3px 11px 1px`,
          fontFamily: systemFonts,
          width: `70%`,
          minWidth: `310px`,
          margin: `0 auto`,
        }}
      >
        <p>
          <strong>Subscribe to the newsletter</strong> to receive my posts a
          week earlier, right to your inbox 🚀
        </p>
        <input type="hidden" value="1" name="embed" />
        <label
          style={{
            display: `block`,
            width: `100%`,
            marginBottom: rhythm(0.25),
          }}
          htmlFor="newsletter-email"
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
            padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
          }}
        >
          <span>Subscribe</span>
        </button>
      </form>
    )
  }
}
