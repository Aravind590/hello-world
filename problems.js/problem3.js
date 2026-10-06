import inventory from "../data/js_car_data.js";
// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function getSort(){
    let car_models = [];
    for (const car of inventory){
        car_models.push(car.car_model);
    }
    car_models.sort((a, b) => a.localeCompare(b));
    return car_models;
}
export default getSort;