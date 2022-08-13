import { Commands } from './components/commands'
import { Devs } from './components/Devs'
import './index.css'

function App() {

    const comandos = [
        {
            id: "cmd_1",
            name: "/sugerencia parámetro",
            desc: "Envía un Embed Message customizado al canal de texto en donde uses el comando con las reacciones de ✔ y ❌, para que así la gente pueda reaccionar a tu sugerencia.",
            collapse: "collapse1",
            permissions: "Todos",
            params: "sugerencia que se desea enviar."
        },
        {
            id: "cmd_2",
            name: "/confesion parámetro",
            desc: "Envía una confesión anónima a un canal de texto ya configurado. Recalcar que solo los Dueños pueden visualizar quién envió la confesión, esto con el fin de controlar confesiones que incumplan las reglas.",
            collapse: "collapse2",
            permissions: "Todos",
            params: "confesión que se desea enviar."
        },
        {
            id: "cmd_3",
            name: "/reportarconfesion parámetro",
            desc: "Reporta una confesión que te parezcas indebida, esto ocultará el texto original de la confesión.",
            collapse: "collapse3",
            permissions: "Todos",
            params: "id de confesión que se desea reportar."
        },
        {
            id: "cmd_4",
            name: "/recuperarconfesion parámetro",
            desc: "Recupera una confesión reportada.",
            collapse: "collapse4",
            permissions: "Claus#0101",
            params: "id de confesión que se desea recuperar."
        },
        {
            id: "cmd_5",
            name: "/ayudapsicologica parámetro",
            desc: "Envía un mensaje privado al creador de la confesión con el fin de recordar que existen los tickets de salud mental por si desea hablar con alguien y/o participar de la comunidad de salud mental.",
            collapse: "collapse5",
            permissions: "Todos",
            params: "id de confesión que se desea enviar un mensaje privado."
        }
    ]

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-bg">
                <div className="container my-3">
                    <a className="navbar-brand text-white" href="#"><strong>Claus BOT</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#comandos">Comandos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#devs">Información DEVS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="body-bg">
                <section id="comandos">
                    <div className="container text-white py-5">
                        <div >
                            <h1>Claus BOT</h1>
                            <h4>Un BOT de ayuda para la comunidad de Roberttson</h4>

                            <button className='btn btn-success mt-5 btn-lg button-ds'>Ver comandos</button>
                        </div>

                        <div className="accordion mt-5" id="accordionExample">
                            {
                                comandos.map((cmd) => (
                                    <Commands 
                                        key={cmd.id} 
                                        id={cmd.id} 
                                        name={cmd.name} 
                                        desc={cmd.desc} 
                                        collapse={cmd.collapse} 
                                        permissions={cmd.permissions}
                                        params={cmd.params}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section id="devs">
                    <Devs />
                </section>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 text-center text-white">
                            <p>Sitio y bot desarrollado por Claus#0101</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
