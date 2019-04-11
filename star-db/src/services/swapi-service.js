export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error('Could not fetch ' + url + ', recieved: ' + response.status);
        }

        return await response.json();
    };

    getAllPeople = async () => {
        const response = await this.getResource('/people/');
        return response.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    };

    getAllPlanets = async () => {
        const response = await this.getResource('/planets/');
        return response.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    };

    getAllStarships = async () => {
        const response = await this.getResource('/starships/');
        return response.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship =  await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        };
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };
}