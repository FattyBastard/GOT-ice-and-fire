import {Component} from "react";


export default class GotServices extends Component{

    constructor(props){
        super(props);
        this._apiBase = "https://www.anapioficeandfire.com/api/";
    }

    getResource = async(url) => {
        const result = await fetch(`${this._apiBase}${url}`);

        if (!result.ok){
            throw new Error(`Couldn't fetch ${this._apiBase}${url}, error is: ${result.status}`);
        }

        return await result.json();
    }
    getCharacter = async(id) => {
        return await this.getResource(`characters/${id}`)
            .then(this._transformCharacter);
    }

    getBook = async(id) => {
        return await this.getResource(`books/${id}`)
            .then(this._transformBook);
    }

    getHouse = async(id) => {
        return await this.getResource(`houses/${id}`)
            .then(this._transformHouse);
    }

    getAllCharacters = async() => {
        const res =  await this.getResource('characters');
        return res.map(this._transformCharacter);
    }

    getAllBooks = async() => {
        const result = await this.getResource(`books`);
        return result.map(this._transformBook);
    }

    getAllHouses = async() => {
        const result = await this.getResource(`houses`);
        return result.map(this._transformHouse);
    }
    
    _transformHouse(object){
        const newObject = {
            name : object.name ? object.name : "no data:(",
            words : object.words ? object.words : "no data:(",
            region : object.region ? object.region: "no data:(",
            coatOfArms : object.coatOfArms ? object.coatOfArms : "no data:(",
        }
        return newObject;
    }

    _transformBook(object){
        const newObject = {
            name : object.name ? object.name : "no data:(",
            authors : object.authors ? object.authors : "no data:(",
            country : object.country ? object.country: "no data:(",
            numberOfPages : object.numberOfPages ? object.numberOfPages : "no data:(",
            publisher: object.publisher ? object.publisher : "no data:("
        }
        return newObject;
    }

    _transformCharacter(object){
        const newObject = {
            name : object.name ? object.name : "no data:(",
            gender : object.gender ? object.gender : "no data:(",
            born : object.born ? object.born: "no data:(",
            culture : object.culture ? object.culture : "no data:(",
            died: object.died ? object.died : "no data:("
        }
        return  newObject;
    }
}
