import path from "path"
import Model from "../model/product.model.js"
class productController {
  // Middleware to serve products page

  getproduct(req, res) {
    let products = Model.getdata();
    res.render("products", { data: products });//it also call send()
    // res.sendFile(path.join(path.resolve(), "src", "views", "products.html"));
  }

  // Middleware to serve login page
  getlogin(req, res) {
    res.render("login", {})
  }
  // Middleware to  render newbook form
  getNweBook(req, res) {
    res.render("new-product-add", { errors: null })
  }
  // Middleware to  add new book
  Addnewdata(req, res) {
    // console.log(req.body);
    Model.AddNewdata(req.body)
    let products = Model.getdata();
    res.render("products", { data: products });

  }
}
export { productController };