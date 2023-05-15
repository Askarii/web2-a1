let cars = [
    {
      make: "Toyota",
      model: "Corolla",
      color: "Red",
      price: 60,
      description: "A reliable and fuel-efficient car that's perfect for city driving.",
      category: "Hatch"
    },
    {
      make: "Honda",
      model: "Civic",
      color: "Blue",
      price: 65,
      description: "A stylish and sporty car that's fun to drive.",
      category: "Sedan"
    },
    {
      make: "Subaru",
      model: "Forester",
      color: "Black",
      price: 90,
      description: "An all-wheel-drive SUV that's perfect for outdoor adventures.",
      category: "4WD"
    },
    {
      make: "Mazda",
      model: "CX-5",
      color: "White",
      price: 85,
      description: "A spacious and comfortable SUV that's great for family trips.",
      category: "4WD"
    },
    {
      make: "Ford",
      model: "Fiesta",
      color: "Yellow",
      price: 55,
      description: "A fun and zippy car that's perfect for city driving.",
      category: "Hatch"
    },
    {
      make: "Kia",
      model: "Rio",
      color: "Silver",
      price: 50,
      description: "An affordable and practical car that's great for everyday use.",
      category: "Hatch"
    },
    {
      make: "Nissan",
      model: "Altima",
      color: "Gray",
      price: 70,
      description: "A comfortable and reliable sedan that's perfect for long drives.",
      category: "Sedan"
    },
    {
      make: "Jeep",
      model: "Wrangler",
      color: "Green",
      price: 120,
      description: "A rugged and capable SUV that's ready for any terrain.",
      category: "4WD"
    },
    {
      make: "Hyundai",
      model: "Accent",
      color: "Black",
      price: 55,
      description: "A compact and efficient car that's great for city driving.",
      category: "Hatch"
    },
    {
      make: "Chevrolet",
      model: "Impala",
      color: "Red",
      price: 80,
      description: "A spacious and comfortable sedan that's great for long trips.",
      category: "Sedan"
    }
  ];
  
  
let carList = document.getElementById("car-list");

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  
  let carDiv = document.createElement("div");
  carDiv.classList.add("car");
  
  let makeModelDiv = document.createElement("div");
  makeModelDiv.innerText = car.make + " " + car.model;
  makeModelDiv.classList.add("make-model");
  
  let colorDiv = document.createElement("div");
  colorDiv.innerText = car.color;
  colorDiv.classList.add("color");
  
  let priceDiv = document.createElement("div");
  priceDiv.innerText = "$" + car.price + "/day";
  priceDiv.classList.add("price");
  
  let descriptionDiv = document.createElement("div");
  descriptionDiv.innerText = car.description;
  descriptionDiv.classList.add("description");
  
  let categoryDiv = document.createElement("div");
  categoryDiv.innerText = car.category;
  categoryDiv.classList.add("category");
  
  carDiv.appendChild(makeModelDiv);
  carDiv.appendChild(colorDiv);
  carDiv.appendChild(priceDiv);
  carDiv.appendChild(descriptionDiv);
  carDiv.appendChild(categoryDiv);
  
  carList.appendChild(carDiv);
}