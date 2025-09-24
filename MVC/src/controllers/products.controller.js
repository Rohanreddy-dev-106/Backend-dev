import path from "path"
import Model from "../model/product.model.js"
class productController {
  // Middleware to serve products page

  getproduct(req, res, next) {
    let products = Model.getdata();
    res.render("products", { data: products });//it also call send()
    // res.sendFile(path.join(path.resolve(), "src", "views", "products.html"));
  }

  // Middleware to serve login page
  getlogin(req, res, next) {
    res.render("login", {})
  }
  // Middleware to  render newbook form
  getNweBook(req, res, next) {
    res.render("new-product-add", { errors: null })
  }
  // Middleware to  add new book
  Addnewdata(req, res, next) {
    // console.log(req.body);
    Model.AddNewdata(req.body)
    let products = Model.getdata();
    res.render("products", { data: products });

  }
   //Middleware to  update book

  UpdatePage(req, res, next) {
  const{id }= req.params
  console.log(typeof id);

    let prduct_id = Model.getproductbtID(Number(id));
    if (prduct_id) {
      res.render("update", { data: prduct_id ,errors: null });
    }
    else {

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
  
updatedata_D(req,res,next){
    Model.updatedata(req.body)
    let products = Model.getdata();
  res.render("products", { data: products });
}
}
export { productController };