import React from 'react'
import styles from'./Buscador.module.scss'
import {CgSearch} from 'react-icons/cg'

type Props ={
    setBusca: React.Dispatch<React.SetStateAction<string>>,
    busca: string
}
export function Buscador({setBusca, busca}: Props) {
    console.log(busca)
   return (
       <div className={styles.buscador}>
           <input
           value={busca}
           onChange={(event) => setBusca(event.target.value)}
           placeholder="Buscar"
           ></input>
           <CgSearch 
            size={20}
            color="#4C4D5E"
           />
       </div>
   )
}