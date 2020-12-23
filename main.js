// Realiza un sitio web para un CRUD de autos con las siguientes características:
// ● Marca
// ● Modelo
// ● Color
// ● Año
// ● Precio

let cars = [
    {
        id: 1,
        brand: "Ford", 
        model: "Mustang", 
        color: "Gray", 
        year: "1960", 
        price: 100000000
    },
    {
        id: 2,
        brand: "Chevrolet", 
        model: "Camaro", 
        color: "Yelloy", 
        year: "2005", 
        price: 95000000
    },
    {
        id: 3,
        brand: "Volkswagen", 
        model: "e-Golf", 
        color: "Silver", 
        year: "2019", 
        price: 80000000
    }
];

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
                        <button onclick="updateCars(${car.id})" class="btn btn-danger">
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
    const id = cars[cars.length -1].id + 1;

    const newCar = {brand, model, color, year, price}
    cars.push(newCar);

    tableCars();

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
    document.getElementById('brand').innerHTML = index.brand;
    document.getElementById('model').innerHTML = index.model;
    document.getElementById('color').innerHTML = index.color;
    document.getElementById('year').innerHTML = index.year;
    document.getElementById('price').innerHTML = index.price;
}

tableCars();