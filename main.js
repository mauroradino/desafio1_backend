

class Product {
    constructor (Nombre, Precio, Descripcion, Stock, Thumbnail, Code){
        this.Nombre = Nombre;
        this.Precio = Precio;
        this.Descripcion = Descripcion;
        this.Stock = Stock;
        this.Thumbnail = Thumbnail;
        this.Code = Code;
    }
}
let productList = [];

const addProduct = (Nombre, Precio, Descripcion, Stock, Thumbnail, Code) => {
    const isCodeUsed = productList.some(product => product.Code === Code);
 if(isCodeUsed){
    console.log("ese Code ya esta en uso")
    return;
  }

  const nuevoProducto = new Product(Nombre, Precio, Descripcion, Stock, Thumbnail, Code);
  productList.push(nuevoProducto);

    console.log("codigo de producto nuevo", Code) 
    console.log("La lista", productList)
  
 }


const getProducts = () => {
    console.log(productList)
}

const getProductById = () =>{
    let id = prompt("Inserte el ID a buscar");
    productList.map((product) =>{
    if(product.Code === id){
        console.log("producto encontrado", product)
    }
    else if (product.code != id){
        console.log("producto no encontrado")
    }
    })
}