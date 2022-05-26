import { useEffect, useState } from 'react'
import datos from '../lib/data/data'
import Chat from './Chat'
import css from './containerChat.module.css'
import Footer from './Footer'
import Header from './Header'
import ImageChat from './ImageChat'

const ContainerChat = () => {
  const [indexArr, setindexArr] = useState(0)
  const [estaEscribiendo, setEstaEscribiendo] = useState(false)
  const [componentes, setComponentes] = useState([])
  console.log('inicio render')
  useEffect(() => {
    document.getElementById('containerChat').scrollTop =
      document.getElementById('containerChat').scrollHeight
    if (indexArr === datos.length) return
    console.log('render de useEfect')
    const timeOutEstaEscribiendo = setTimeout(() => {
      setEstaEscribiendo(datos[indexArr].name)
    }, 1000)

    const time = setTimeout(() => {
      setComponentes([...componentes, datos[indexArr]])
      setindexArr(() => indexArr + 1)

      setEstaEscribiendo(false)
    }, datos[indexArr].time)

    console.log('hola')
    return () => {
      console.log('return')
      clearTimeout(time)
      clearTimeout(timeOutEstaEscribiendo)
    }
  }, [indexArr])

  return (
    <>
      <main className={css.container} id="containerChat">
        <div className={css.app}>
          {componentes?.map((e) => {
            if (e.type === 'image') {
              return <ImageChat key={e.id} {...e} />
            }
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
