import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  list-style: none;
  text-decoration: none;
}

html,
body {
  height: 100%;
}
body {
  line-height: 1.5;
  background-color: var(--background-dark-color);
  font-family: 'Nunito',sans-serif;
  color: var(--font-light-color)
}

body::-webkit-scrollbar{
  width: 9px;
  background-color: #383838;
}

body::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: #6b6b6b;
}

body::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: #383838;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
  outline: none;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

a{
  text-decoration: none;
  font-family: inherit;
  color: inherit;
  font-size:1rem;

 
}
h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
      font-size: 4rem;
    }
}

h6{
color:var(--white-color);
font-size: 1.2rem;
padding-bottom: 0.6rem;
}

span{
    color:var(--primary-color);
}

`;

export default GlobalStyle;
