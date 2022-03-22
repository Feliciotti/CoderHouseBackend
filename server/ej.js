class Contenedor {
    constructor(){
        this.products = []
    };

    save(product, price, id) {
        this.products.push({product: product,
                            price: price,
                            id: id});
    };

    getById(id){
        const productById = this.products.find(function (product) {
            return product.id == id;
        });
        return productById
    };
    
    async getAll() {
        return this.products
    };

};

const p = new Contenedor();
p.save('producto 1', '30000', '1')

module.exports = Contenedor;