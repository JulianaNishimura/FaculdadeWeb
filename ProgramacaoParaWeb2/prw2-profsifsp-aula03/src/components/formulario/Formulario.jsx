import React, { use, useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campoTexto/CampoTexto";
import ListaSuspensa from "../listaSuspensa/ListaSuspensa";

const Formulario = () => {
    const areas = [
        'Progr. Básica',
        'Progr. Web',
        'Banco de Dados',
        'Diversos'
    ]
    
    const [nome, setNome] = useState('');
    const [titulo, setTitulo] = useState('');
    const [imagem, setImagem] = useState('');
    const [area, setArea] = useState('Progr. Básica')

    const aoSalvar = (evento) => {
        evento.preventDefault();
    }
    
    return(
        <section className="formulario">
            <form>
                <h2>Dados do professor: </h2>
                <CampoTexto 
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />

                <CampoTexto 
                    label="Título" 
                    placeholder="Digite seu título"
                    valor = {titulo}
                    aoAlterado = {valor = setTitulo(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor = {imagem}
                    aoAlterado = {valor = setImagem(valor)}
                />
                
                <ListaSuspensa
                    label="Áreas"
                    itens={areas}
                    valor={area}
                    aoAlterado={valor => setArea(valor)}
                />

                <Botao>Criar Professor</Botao>
            </form>
        </section>
    )
}
export default Formulario;