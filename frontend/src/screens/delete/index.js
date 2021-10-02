import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductService from "../../services/products";


function DeleteProductScreen(props) {
    const [redirectToHome, setRedirectToHome] = useState(false);

    useEffect(() => {

        async function run() {
            try {
                if (window.confirm('Você deseja excluir este Produto?'))
                    await ProductService.delete(props.match.params.id)
            } catch (error) {
                toast.error("Erro ao deletar Produto");
            }
        } run();

        setRedirectToHome(true);
    }, []);

    if (redirectToHome)
        return <Redirect to={{ pathname: "/" }} />

    return <ToastContainer />
}

export default DeleteProductScreen;