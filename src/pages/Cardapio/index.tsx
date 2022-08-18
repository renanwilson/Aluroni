import styles from './Cardapio.module.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { useState } from 'react'
import { Buscador } from './Buscador'
import { Filtros } from './Filtros'
import { Ordenador } from './Ordenador'

export function Cardapio() {

    const [busca, setBusca] = useState("")
    const [filtro, setFiltro] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState("")
    
    return(
        <main>
            <nav className={styles.menu}>
                <Logo/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    Cardapio
                </h3>
                <Buscador setBusca={setBusca} busca={busca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
            </section>
        </main>
    )
}