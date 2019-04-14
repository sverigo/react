export default class CarsService {
    _apiBase = 'http://localhost:1234/cars/';
    _headers = { 'Content-Type': 'application/json' };

    lastId = null;

    async getCarsList() {
        const response = await fetch(this._apiBase);
        const cars = await response.json();
        this.lastId = this.getLastId(cars);
        return cars;
    }

    async create(car) {
        const response = await fetch(this._apiBase, {
            method: 'post', headers: this._headers, body: JSON.stringify(car)
        });
        return await response.json();
    }

    async update(car) {
        const response = await fetch(this._apiBase + car.id, {
            method: 'put', headers: this._headers, body: JSON.stringify(car)
        });
        return await response.json();
    }

    async getCarById(id) {
        const response = await fetch(this._apiBase + id);
        if (response.status === 404) throw new Error();
        return await response.json();
    }

    async delete(id) {
        const response = await fetch(this._apiBase + id, {
            method: 'delete', headers: this._headers
        });
        return await response.json();
    }

    getLastId(cars) {
        let id = 0;
        cars.forEach((car) => {
            if (id < car.id) id = car.id;
        });
        return ++id;
    }
}