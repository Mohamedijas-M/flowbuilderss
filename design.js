const toolbox = document.getElementById("toolbox");
const canvas = document.getElementById("canvas");

toolbox.addEventListener("click", (event) => {
  if (event.target.classList.contains("shape")) {
    
    const shape = event.target.cloneNode(true);
    shape.style.top = `${event.clientY}px`;
    shape.style.left = `${event.clientX}px`;
    shape.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const initialX = e.clientX - shape.offsetLeft;
      const initialY = e.clientY - shape.offsetTop;
      document.addEventListener("mousemove", moveShape);
      document.addEventListener("mouseup", stopMoveShape);
      function moveShape(e) {
        shape.style.top = `${e.clientY - initialY}px`;
        shape.style.left = `${e.clientX - initialX}px`;
      }
      function stopMoveShape() {
        document.removeEventListener("mousemove", moveShape);
        document.removeEventListener("mouseup", stopMoveShape);
      }
    });
    canvas.appendChild(shape);
  }
});