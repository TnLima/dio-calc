import React from 'react'
import styles from './styles.css'
const Banner = () => {
    return (
        <banner>
            <header>
                <img src="https://lp.dio.me/wp-content/uploads/2023/03/LOGO-DIO-COLOR.png" alt="" />
            </header>
            <div class="title">
                <p>
                    Desafio de Projeto:<br />
                    <span class="subtitle">Criando uma Calculadora com <i>React</i></span>
                </p>
            </div>
            <div class="author">
                Coded by Thiago Lima
            </div>
        </banner>
    )
}

export default Banner