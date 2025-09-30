/**
 * The class `productController` contains middleware functions for serving product pages, login page,
 * adding new product data, updating product data, and deleting product data.
 *
 * @format
 */

import path from "path";
import Model from "../model/product.model.js";
import { name, render } from "ejs";
class productController {
  // Middleware to serve products page

  getproduct(req, res, next) {
    let products = Model.getdata();
    res.render("products", { data: products }); //it also call send()
    // res.sendFile(path.join(path.resolve(), "src", "views", "products.html"));
  }

  // Middleware to  render newbook form
  getNweBook(req, res, next) {
    res.render("new-product-add", { errors: null });
  }
  // Middleware to  add new book
  Addnewdata(req, res, next) {
    // console.log(req.body);
    const { name, desc, prise } = req.body;
    const fileurl = "images/" + req.file.filename;
    Model.AddNewdata(name, desc, prise, fileurl);
    let products = Model.getdata();
    res.render("products", { data: products });
  }
  //Middleware to  update book

  UpdatePage(req, res, next) {
    const { id } = req.params;
    // console.log(typeof id);

    let prduct_id = Model.getproductbtID(Number(id));
    if (Object.keys(prduct_id).length > 0) {
      res.render("update", { data: prduct_id, errors: null });
    } else {
      res.status(404).send(`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <div style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 9999; max-width: 500px;">
      <div class="alert alert-danger text-center" role="alert">
        <strong>Error ${res.statusCode}!</strong> The product was not found.
      </div>
    </div>
  `);
    }
  }

  //Middleware to  update data

  updatedata_D(req, res, next) {
    const { id, name, desc, prise } = req.body;
    const fileurl = "images/" + req.file.filename;
    Model.updatedata(id, name, desc, prise, fileurl);
    let products = Model.getdata();
    res.render("products", { data: products });
  }

  //Middleware to  Delete data
  delete_data(req, res, next) {
    const { id } = req.params;
    Model.Delete(Number(id));
    res.redirect("/"); //when we delet we redirect to avoid errorsc
  }

  //Middleware to  Search data

  search_data(req, res, next) {
    const { search } = req.body;
    let search_dataName = Model.search(search);
    if (search_dataName.length===0) {
      res.status(404).send(`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <div style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 9999; max-width: 500px;">
      <div class="alert  alert-warning text-center" role="alert">
        <strong>Error ${res.statusCode}!</strong> The product was not found.
      </div>
    </div>
  `);
    }
    else {
      res.render("products", { data: search_dataName });
    }
  }
}
export { productController };
