import styles from './NaoEncontrada.module.css'


function NaoEncontrada () {
    return  (
        <section className={styles.container}>
            <h2>Opss!</h2>
            <p>A página que você procura, não foi localizada!</p>
        </section>
    )
} 

export default NaoEncontrada