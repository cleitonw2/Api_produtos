import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ProductService from "../../services/products";

function UpdateProductScreen(props) {

    const [id, setId] = useState("")
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantityInStock, setQuantityStock] = useState("");
    const [redirectHome, setRedirectHome] = useState(false);

    useEffect(() => {
        loadProduct(props.match.params.id)
    }, [])

    async function loadProduct(id) {
        const response = await ProductService.getProductById(id);
        setId(response.data.id)
        setName(response.data.name);
        setPrice(response.data.price);
        setQuantityStock(response.data.quantityInStock);
    }

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await ProductService.update(id, {
                name: name,
                price: price,
                quantityInStock: quantityInStock
            });

            setRedirectHome(true)
        } catch (error) {
            alert(error);
        }
    }

    if (redirectHome) {
        return <Redirect to={{ pathname: "/" }} />
    }

    return (
        <Fragment>

            <div className="row">

                <div className="col s12 m6 push-m3">

                    <h3 className="light">Editar Produto</h3>

                    <form onSubmit={HandleSubmit}>

                        <input type="hidden" name="id" defaultValue="idvalue" />
                        <div className="input-field col s12">

                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />

                            <label htmlFor="name">Nome</label>
                        </div>

                        <div className="input-field col s12">

                            <input
                                type="text"
                                name="price"
                                id="price"
                                required
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />

                            <label htmlFor="price">preço</label>
                        </div>

                        <div className="input-field col s12">

                            <input
                                type="text"
                                name="quantiy"
                                id="quantity"
                                required
                                value={quantityInStock}
                                onChange={e => setQuantityStock(e.target.value)}
                            />

                            <label htmlFor="quantity">Quantidade em estoque</label>
                        </div>

                        <button
                            id="btn-space"
                            type="submit"
                            name="btn-editar"
                            className="btn"
                        >
                            Atualizar
                        </button>

                        <Link to="/" className="btn green"> Lista de Produtos</Link>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default UpdateProductScreen;