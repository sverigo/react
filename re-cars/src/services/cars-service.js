export default class CarsService {
    _apiBase = 'http://localhost:1234/cars';
    _headers = { 'Content-Type': 'application/json' };

    lastId = null;

    async getCarsList() {
        const response = await fetch(this._apiBase);
        const cars = await response.json();
        this.lastId = this.getLastId(cars);
        return cars;
    }

    getLastId(cars) {
        let id = 0;
        cars.forEach((car) => {
            if (id < car.id) id = car.id;
        });
        return ++id;
    }
}