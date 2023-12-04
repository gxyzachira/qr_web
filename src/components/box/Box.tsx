import styles from './Box.module.css'

export default function Box() {

  return (
    <div className={styles.box}>
      <p>Generated QR here</p>
        <img src="https://quickchart.io/qr?text=something"></img>
        <input type="text" />
    </div>
  )
}
