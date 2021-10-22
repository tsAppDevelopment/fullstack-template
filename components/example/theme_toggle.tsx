import {useTheme} from 'next-themes'
import Dark from '@material-ui/icons/Brightness4'
import Light from '@material-ui/icons/Brightness7'

export const ThemeToggle = ({
  size = 36,
  outerCss = {},
}: {
  size?: number
  outerCss?: any
}) => {
  const {theme, setTheme} = useTheme()

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const iconProps = {
    width: size,
    style: {fontSize: size},
  }

  return (
    <button css={outerCss} onClick={toggleTheme}>
      {theme === 'light' ? <Dark {...iconProps} /> : <Light {...iconProps} />}
    </button>
  )
}