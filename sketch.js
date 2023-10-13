let cols, rows;
let cellWidth, cellHeight;
let grid;
let circles = [];

function setup() {
  createCanvas(400, 400);
  background(180, 150, 255); // Fondo morado claro
  cols = 5; // Número de columnas en la grilla
  rows = 5; // Número de filas en la grilla
  cellWidth = width / cols;
  cellHeight = height / rows;

  // Crear una grilla vacía
  grid = createGrid(cols, rows);
}

function draw() {
  // Mostrar la grilla en el lienzo
  displayGrid(grid);

  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    circle.display();
    circle.fade();

    if (circle.alpha <= 0) {
      circles.splice(i, 1);
    }
  }
}

function mouseClicked() {
  // Calcular la celda en la que se hizo clic
  let col = floor(mouseX / cellWidth);
  let row = floor(mouseY / cellHeight);

  // Agregar un círculo blanco en la celda seleccionada
  let x = col * cellWidth + cellWidth / 2;
  let y = row * cellHeight + cellHeight / 2;
  let newCircle = new Circle(x, y);
  circles.push(newCircle);
}

function createGrid(cols, rows) {
  let grid = new Array(cols);
  for (let col = 0; col < cols; col++) {
    grid[col] = new Array(rows);
  }
  return grid;
}

function displayGrid(grid) {
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      // Calcula las coordenadas de la celda
      let x = col * cellWidth;
      let y = row * cellHeight;

      // Dibuja un rectángulo morado claro en la celda
      fill(180, 150, 255);
      noStroke();
      rect(x, y, cellWidth, cellHeight);
    }
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 50;
    this.alpha = 255;
  }

  display() {
    fill(255, this.alpha);
    noStroke();
    ellipse(this.x, this.y, this.diameter);
  }

  fade() {
    this.alpha -= 5;
  }
}
