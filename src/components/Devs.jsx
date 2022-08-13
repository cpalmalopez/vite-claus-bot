import React from 'react'
import '../index.css'

export const Devs = () => {
    return (
        <div className='container text-white py-5'>
            <h1>Información de utilidad para DEVS</h1>
            
            <div className='mt-4'>
                <h4 className='name-command'>¿En qué tecnología está desarrollado el bot?</h4>
                <p>El bot está desarrollado en TypeScript, y está desplegado en Heroku con Automatic Deploys.</p>
            </div>

            <div className='mt-4'>
                <h4 className='name-command'>¿Qué base de datos utiliza?</h4>
                <p>Para almacenar la data del bot se está utilizando MongoDB Atlas.</p>
            </div>

            <div className='mt-4'>
                <h4 className='name-command'>¿En qué tecnología está desarrollada la web?</h4>
                <p>La web está desarrollada en Reactjs, haciendo uso de Vitejs y Bootstrap. Además el sitio está desplegado en GitHub Pages. La web no utiliza base de datos ni nada similar, solo es una web informativa estática.</p>
            </div>

            <div className='mt-4'>
                <h4 className='name-command'>¿Quiénes han aportado en el bot?</h4>
                <p>Con la ayuda de OnneL#8951 en código, J ✿#0404 con en el despliegue y la comunidad de Roberttson con sus grandes ideas.</p>
            </div>
        </div>
    )
}
