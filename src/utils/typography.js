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

TypographyTheme.headerFontFamily = ['Patua One', 'sans-serif']
TypographyTheme.bodyFontFamily = ['Lora', 'Georgia', 'serif']
TypographyTheme.baseFontSize = '19px'
TypographyTheme.scaleRatio = 3

const typography = new Typography(TypographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
