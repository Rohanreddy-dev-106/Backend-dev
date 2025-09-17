import path from "path"
import Model from "../model/product.model.js"
class productController {
   // Middleware to serve products page
   
    getproduct(req, res) {
       let products=Model.getdata();
       res.render("products",{data:products});//it also call send()
        // res.sendFile(path.join(path.resolve(), "src", "views", "products.html"));
    }
   
      // Middleware to serve login page
    getlogin(req, res) {
        res.sendFile(path.join(path.resolve(), "src", "views", "login.html"));
    }
}
export { productController };