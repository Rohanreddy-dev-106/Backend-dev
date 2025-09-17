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
    static getdata(){
     return products //global scope
    }
}
const product1 = new ModelData(//hear each create a object with the keys provided in the constructer function
    1,
    "Wireless Mouse",
    "Ergonomic wireless mouse with adjustable DPI.",
    799,
    "https://example.com/mouse.jpg"
);

const product2 = new ModelData(
    2,
    "Mechanical Keyboard",
    "RGB backlit keyboard with blue switches.",
    2499,
    "https://example.com/keyboard.jpg"
);

const product3 = new ModelData(
    3,
    "USB-C Hub",
    "Multi-port USB-C hub with HDMI and Ethernet.",
    1499,
    "https://example.com/hub.jpg"
);

const product4 = new ModelData(
    4,
    "Noise-Cancelling Headphones",
    "Over-ear headphones with active noise cancellation.",
    3999,
    "https://example.com/headphones.jpg"
);

const products = [product1, product2, product3, product4];