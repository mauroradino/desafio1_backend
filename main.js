

class Product {
    constructor (nombre, precio, descripcion, stock, thumbnail, code){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = stock;
        this.thumbnail = thumbnail;
        this.code = code;
        this.Id = productList.length + 1;
    }
}

class ProductManager {

static productList = [];

static addProduct = (nombre, precio, descripcion, stock, thumbnail, code, Id) => {
    const isCodeUsed = productList.some(product => product.code === code);
 if(isCodeUsed){
    console.log("ese code ya esta en uso")
    return;
  }

  const nuevoProducto = new Product(nombre, precio, descripcion, stock, thumbnail, code, Id);
  
  productList.push(nuevoProducto);

    console.log("codigo de producto nuevo", code) 
    console.log("La lista", productList)
  
 }


static getProducts = () => {
    console.log(productList)
}

static getProductById = () =>{
    let id = prompt("Inserte el ID a buscar");
    const encontrado = productList.find((product) => product.Id = id)
    console.log(encontrado);
    encontrado === undefined ? console.log("Producto no encontrado") : null
}
}