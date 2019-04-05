export default class CarsService {
    _apiBase = 'http://localhost:1234/cars/';

    async getResource() {
        const response = await fetch(`${this._apiBase}`);
        return await response.json();
    }
}