'use client';
import styles from './page.module.css'
import SimpleCalculator from './calculator';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Simple Calculator
        </p>
      </div>

      <SimpleCalculator />

    </main>
  )
}
