import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '../components/Home/PageHeader'
import NavBar from '../components/layout/NavBar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <PageHeader />
    </div>
  )
}
