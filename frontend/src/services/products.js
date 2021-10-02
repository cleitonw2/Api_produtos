import Api from "./api";

const ProductService = {

    getProducts: async () => await Api.get("/api/v1/products"),

    getProductById: async (id) => await Api.get("/api/v1/products/" + id),

    update: async (id, params) => await Api.put("/api/v1/products/" + id, params),

    delete: async (id) => await Api.delete("/api/v1/products/" + id),

    create: async (params) => await Api.post("/api/v1/products/", params),
}

export default ProductService;