interface IProductRepository{
    save(product: Produt):Promise<void>;

    delete(productId: number): Promise<void>;

}