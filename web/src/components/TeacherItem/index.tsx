import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/62180037?s=460&u=f6a787a7f4dbbb48198edd09555eafdf3ae0680a&v=4" alt="jonatas"/>
      <div>
        <strong>Jonatas Ferreira</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br/><br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 40,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem