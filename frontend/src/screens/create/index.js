import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductService from "../../services/products";


function CreateProductScreen() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantityInStock, setQuantityStock] = useState("");

    const HandleSubmit = async (evt) => {
        evt.preventDefault();

        try {

            await ProductService.create(
                {
                    name: name,
                    price: price,
                    quantityInStock: quantityInStock
                }
            );

            setName("");
            setPrice("");
            setQuantityStock("");

            toast.success("Produto cadastrado com sucesso!");
        } catch (error) {
            toast.error("Erro ao cadastrar", error);
        }
    }

    return (
        <div className="row">
            <div className="col s12 m6 push-m3">
                <h3 className="light">Novo Produto</h3>
                <form onSubmit={HandleSubmit}>

                    <div className="input-field col s12">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="name">Nome</label>
                    </div>

                    <div className="input-field col s12">
                        <input
                            type="text"
                            name="price"
                            placeholder="00.00"
                            id="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <label htmlFor="price">Preço</label>
                    </div>

                    <div className="input-field col s12">
                        <input
                            type="text"
                            name="quantity"
                            id="quantity"
                            placeholder="0"
                            value={quantityInStock}
                            onChange={e => setQuantityStock(e.target.value)}
                        />
                        <label htmlFor="quantity">Quantidade em estoque</label>
                    </div>

                    <button
                        type="submit"
                        name="btn-cadastrar"
                        className="btn"
                        id="btn-space"
                    >
                        Cadastrar
                    </button>

                    <a href="../" className="btn green">
                        Lista de Produtos
                    </a>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default CreateProductScreen;