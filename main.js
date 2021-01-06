// Realiza un sitio web para un CRUD de autos con las siguientes características:
// ● Marca
// ● Modelo
// ● Color
// ● Año
// ● Precio

// let cars = [
//     {
//         id: 1,
//         brand: "Ford", 
//         model: "Mustang", 
//         color: "Gray", 
//         year: "1960", 
//         price: 100000000
//     },
//     {
//         id: 2,
//         brand: "Chevrolet", 
//         model: "Camaro", 
//         color: "Yelloy", 
//         year: "2005", 
//         price: 95000000
//     },
//     {
//         id: 3,
//         brand: "Volkswagen", 
//         model: "e-Golf", 
//         color: "Silver", 
//         year: "2019", 
//         price: 80000000
//     }
// ];

let cars = JSON.parse(localStorage.getItem('cars')) || [];

function tableCars() {
    const container = document.getElementById('container-cars');
    let html = '';

    cars.forEach((car) => {
        html += `<tr>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.color}</td>
                    <td>${car.year}</td>
                    <td>${car.price}</td>
                    <td>
                        <button onclick="deleteCar(${car.id})" class="btn btn-danger">
                            Eliminar
                        </button>
                    </td>
                    <td>
                        <button onclick="updateCars(${car.id})" class="btn btn-warning">
                            Editar
                        </button>
                    </td>
                </tr>`;
    });
    container.innerHTML = html;
}

function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    
    let id = 1;

    if (cars.length > 0) {
        cars[cars.length -1].id + 1;
    }

    const newCar = {brand, model, color, year, price}
    cars.push(newCar);

    tableCars();

    localStorage.setItem('cars', JSON.stringify(cars));
    document.getElementById('form-cars').reset();
}

function deleteCar(id) {
    const index = cars.findIndex((cars) => cars.id === id );
    cars.splice(index, 1);

    tableCars();
}

function updateCars(id) {
    //Encontrando el index del elemento
    const index = cars.findIndex((car) => car.id === id );

    //enviando los valores que están dentro del elemento, hacia el formulario para editarlos
    document.getElementById('brand').value = cars[index].brand;
    document.getElementById('model').value = cars[index].model;
    document.getElementById('color').value = cars[index].color;
    document.getElementById('year').value = cars[index].year;
    document.getElementById('price').value = cars[index].price;

    cars.splice(index, 1);
}

tableCars();