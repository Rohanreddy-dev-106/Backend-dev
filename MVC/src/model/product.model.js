import { name } from "ejs";

export default class ModelData {
    _id;
    _name;
    _desc;
    _prise;
    _imageUrl;
    constructor(id, name, desc, prise, url) {
        this._id = id;
        this._name = name;
        this._desc = desc;
        this._prise = prise;
        this._imageUrl = url;
    }
    static getdata() {
        return products //global scope it lodes before class
    }
    static AddNewdata(newproduct) {
        let newdata = new ModelData(products.length + 1, newproduct.name, newproduct.desc, newproduct.prise, newproduct.url);
        products.push(newdata);
    }
    static getproductbtID(id) {
        let Book = products.find((product) => {
            if (product._id === id) {
                return true;
            }
        })
        return Book;

    }
    static updatedata(updateobject) {
        const index = products.findIndex((product) => {
            if (product._id === Number(updateobject.id)) {
                return true;
            }
        })
        products[index]._name = updateobject.name;
        products[index]._desc = updateobject.desc;
        products[index]._prise = updateobject.prise;
        products[index]._imageUrl = updateobject.url;
    }
    static Delete(id){
     const index_delet=products.findIndex((p)=>{
        if (p._id===id) {
            return true;
        }
     })
     products.splice(index_delet,1);
    }
}
const product1 = new ModelData(
    1,
    "Attack on Titan Vol. 1",
    "The first volume of the epic manga series by Hajime Isayama.",
    499,
    "https://m.media-amazon.com/images/I/71SyIss7KNL._UF1000,1000_QL80_.jpg"
);


const product2 = new ModelData(
    3,
    "Sword Art Online: Light Novel Vol. 1",
    "Kirito enters the world of Sword Art Online in this thrilling light novel.",
    599,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrZ48K2KYPA7kd02DaGY6Fkag9MGIBrHyAQ&s"
);

const product3 = new ModelData(
    4,
    "My Hero Academia Vol. 1",
    "Izuku Midoriya starts his journey at U.A. High School.",
    449,
    "https://m.media-amazon.com/images/I/81HdBTnVtHL._UF1000,1000_QL80_.jpg"
);

const product4 = new ModelData(
    5,
    "Re:Zero - Starting Life in Another World Vol. 1",
    "Subaru Natsuki finds himself in a fantasy world where death has consequences.",
    549,
    "https://m.media-amazon.com/images/I/91AfQdSDytL._UF1000,1000_QL80_.jpg"
);

const product5 = new ModelData(
    6,
    "One Piece Vol. 1",
    "Follow Monkey D. Luffy and his crew on their quest for the One Piece treasure.",
    499,
    "https://m.media-amazon.com/images/I/91NxYvUNf6L.jpg"
);

const products = [product1, product2, product3, product4, product5];
