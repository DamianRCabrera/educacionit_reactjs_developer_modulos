import ThemeContext from "../ThemeContext";

function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={props.theme} {...props}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;