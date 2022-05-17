import { useEffect, useState } from 'react'
import datos from '../lib/data/data'
import Chat from './Chat'
import css from './containerChat.module.css'
import Footer from './Footer'
import Header from './Header'

const ContainerChat = () => {
  const [indexArr, setindexArr] = useState(0)
  const [estaEscribiendo, setEstaEscribiendo] = useState(false)
  const [componentes, setComponentes] = useState([])

  useEffect(() => {
    if (indexArr === datos.length) return
    setEstaEscribiendo(true)
    const time = setTimeout(() => {
      setComponentes([...componentes, datos[indexArr]])
      setindexArr(() => indexArr + 1)

      setEstaEscribiendo(false)
    }, datos[indexArr].time)

    return () => {
      clearTimeout(time)
    }
  }, [indexArr])

  console.log(componentes)
  return (
    <>
      <main className={css.container}>
        <div className={css.app}>
          {componentes?.map((e) => {
            return <Chat key={e.id} {...e} />
          })}
        </div>
        <Header estaEscribiendo={estaEscribiendo} />
        <Footer />
      </main>
    </>
  )
}

export default ContainerChat
