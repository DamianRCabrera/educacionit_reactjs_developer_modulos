import ThemeContext from "../ThemeContext";

function ThemedText(props) {
  return (
    <ThemeContext.Consumer>
      {theme => <p style={{backgroundColor: theme.background}}>{props.children}</p>}
    </ThemeContext.Consumer>
  )
}

export default ThemedText;