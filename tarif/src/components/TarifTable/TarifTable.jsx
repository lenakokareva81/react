import React, { Component } from 'react';
import tarifs from '../json';
import Tarif from '../tarif/Tarif';
import styles from './TarifTable.module.css'

function TarifTable() {
    console.log(tarifs);
    return (
        <div className={styles.activ}>
            {tarifs.map((tarif, i) => <Tarif tarif={tarif} column={i} key={i} />)}
        </div>
    )

}



export default TarifTable;