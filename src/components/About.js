
export default function About(props) {  
  return (
    <div className="container my-5" style={{backgroundColor: props.mode==='light'?'white':'#606060', color: props.mode === 'light'?'black':'white'}}>
      <h3>About Us</h3>
      <p>Text Utils gives you a way to analyze your text quickly and efficiently. It is free to use.</p>
      <p>Text Utils is a free character counter tool that provides instant character count and word count statistics for a given text inserted by the user. Thus it is suitable for writing text with word/ character limit.</p>
      <p>This word counter software works in any web browsers such as Chrome, firefox, Internet Explorer, Safari, Opera etc. It allows us to count characters, convert text to UpperCase, LowerCase, clear form text, copy text and able to remove extra spaces.</p>
      <p>Text Utils has two modes, light mode and dark mode which made it easier to use even in low lights without giving strain to the eyes of the user.</p>
    </div>
  );
}
