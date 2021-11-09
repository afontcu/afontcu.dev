import Typography from 'typography'
import TypographyTheme from 'typography-theme-lincoln'

TypographyTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

delete TypographyTheme.googleFonts

TypographyTheme.headerFontFamily = ['Source Sans Pro', 'sans-serif']
TypographyTheme.bodyFontFamily = ['Lora', 'Georgia', 'serif']
TypographyTheme.baseFontSize = '24px'
TypographyTheme.scaleRatio = 3

const typography = new Typography(TypographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

export const systemFonts = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
