const text = document.querySelector("h1");
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", handleMousemove);

function handleMousemove(e) {
  const widthMid = parseInt(window.innerWidth / 2);
  const heightMid = parseInt(window.innerHeight / 2);

  let x = e.clientX - widthMid;
  let y = heightMid - e.clientY;

  let angle = Math.atan2(y, x) * (180 / Math.PI);

  cursor.style.transform = `
    translate(
      ${e.clientX - 64}px, 
      ${e.clientY - 31}px
    ) 
    rotate(${-angle}deg)`;

  const factor = 0.16;

  text.style.textShadow = `
    ${-x * factor}px 
    ${y * factor}px 
    5px rgba(0, 0, 0, .4)`;
    }