let cars = [
    {
      make: "Toyota",
      model: "Corolla",
      color: "Red",
      price: 60,
      description: "A reliable and fuel-efficient car that's perfect for city driving.",
      category: "Hatch",
      image: "../assets/1.jpeg"
    },
    {
      make: "Honda",
      model: "Civic",
      color: "Blue",
      price: 65,
      description: "A stylish and sporty car that's fun to drive.",
      category: "Sedan",
      image: "../assets/2.jpeg"
    },
    {
      make: "Subaru",
      model: "Forester",
      color: "Black",
      price: 90,
      description: "An all-wheel-drive SUV that's perfect for outdoor adventures.",
      category: "4WD",
      image: "../assets/3.jpeg"
    },
    {
      make: "Mazda",
      model: "CX-5",
      color: "White",
      price: 85,
      description: "A spacious and comfortable SUV that's great for family trips.",
      category: "4WD",
      image: "../assets/4.avif"
    },
    {
      make: "Ford",
      model: "Fiesta",
      color: "Yellow",
      price: 55,
      description: "A fun and zippy car that's perfect for city driving.",
      category: "Hatch",
      image: "../assets/5.jpeg"
    },
    {
      make: "Kia",
      model: "Rio",
      color: "Silver",
      price: 50,
      description: "An affordable and practical car that's great for everyday use.",
      category: "Hatch",
      image: "../assets/6.jpeg"
    },
    {
      make: "Nissan",
      model: "Altima",
      color: "Gray",
      price: 70,
      description: "A comfortable and reliable sedan that's perfect for long drives.",
      category: "Sedan",
      image: "../assets/7.jpeg"
    },
    {
      make: "Jeep",
      model: "Wrangler",
      color: "Green",
      price: 120,
      description: "A rugged and capable SUV that's ready for any terrain.",
      category: "4WD",
      image: "../assets/7.jpeg"
    },
    {
      make: "Hyundai",
      model: "Accent",
      color: "Black",
      price: 55,
      description: "A compact and efficient car that's great for city driving.",
      category: "Hatch",
      image: "../assets/8.jpeg"
    },
]

let selectedCars = []


const car_list = document.querySelector('.car-list');

car_list.innerHTML = "<h1>Cars Available</h1>";
cars.forEach(car => {
    car_list.innerHTML += `
        <div class='card mt-2 mb-2'>
            <div class='card-body'>
                <img class="card-img-top" src=${car.image} alt="Card image cap">
                <h1 class='card-title' id="make">${car.make}</h1>
                <h4>Model: ${car.model}</h4>
                <div class='card-text'>${car.description}</div>
                <a class='card-link font-weight-bold'>${car.color}</a>
                <a class='card-link font-weight-bold'>${car.price} Aud</a>
                <a class='card-link font-weight-bold'>${car.category}</a>
                <div>
                    <a id='selectBtn' class='btn btn-success'>Select Car</a>
                </div>
            </div>
        </div>
    `
})


// Selecting the car and aading it to array and localStorage
const handleSelect = (event) => {
    const selectedCarIndex = event.target.dataset.index;
    const selectedCar = cars[selectedCarIndex];
    selectedCars.push(selectedCar);
    localStorage.setItem('selectedCars', JSON.stringify(selectedCars));
}


const selectButtons = document.querySelectorAll('#selectBtn');
selectButtons.forEach((button, index) => {
    button.addEventListener("click", handleSelect);
    button.dataset.index = index; // Set the index as a data attribute for each button
});
// Selecting the car ends here






const notify = document.querySelector('.notification-bar');
// notify.innerHTML = "<p>Hello</p>"


// Validation Check Start

// Validation Check End