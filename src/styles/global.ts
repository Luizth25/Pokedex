import { createGlobalStyle } from "styled-components";

import Image from "assets/peakpx.png";

export default createGlobalStyle`
*,*:before, *:after  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
body {
  background-image: url(${Image});
  background-size: "center center";
  background-position: 100%;
  background-repeat:no-repeat; 
  background-attachment: fixed;

  font-family: 'Open Sans', sans-serif;
}

`;
