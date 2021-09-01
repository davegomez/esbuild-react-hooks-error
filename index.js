import React from "react";

function App(props) {
  const ref = React.useRef();
  return <div {...props} ref={ref} />;
}

export default App;
