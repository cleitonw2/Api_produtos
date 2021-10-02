import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../services/products";


function HomeScreen() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts()
    }, [])

    async function loadProducts() {
        const response = await ProductService.getProducts();

        setProducts(response.data);
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col s12 m6 push-m3">
                    <h3 className="light">Produtos</h3>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome:</th>
                                <th>Preço:</th>
                                <th>Quantidade em estoque:</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <tr
                                    key={product.id}
                                >

                                    <td
                                        key={product.name}
                                    >
                                        {product.name}
                                    </td>

                                    <td
                                        key={product.price}
                                    >
                                        {product.price}
                                    </td>

                                    <td
                                        key={product.quantityInStock}
                                    >
                                        {product.quantityInStock}
                                    </td>

                                    <td>
                                        <Link to={"update/" + product.id} className="btn-floating orange">
                                            <i className="material-icons">editar</i>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={"delete/" + product.id} className="btn-floating red modal-trigger">
                                            <i className="material-icons">delete</i>
                                        </Link>
                                    </td>

                                </tr>

                            )
                            )}

                            {
                                products.length === 0 ?
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    : <tr></tr>
                            }
                        </tbody>
                    </table>
                    <a href="./create" className="btn">Adicionar Produto</a>
                </div>
            </div>
        </Fragment >
    );
}

export default HomeScreen;