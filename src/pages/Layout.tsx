import { NavLink, Outlet } from "react-router-dom";
import { paths } from "../consts/paths";
import { BsGear } from "react-icons/bs";
import { PiSignInBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

type Props = {};

function Layout({}: Props) {
    // Simulacion de hook
    const isAuth = false;

    const userOptions = (
        <div>
            <div>
                <figure>
                    <img src="#" alt="Avatar" title="Avatar" />
                </figure>
                <p>Username</p>
            </div>
            <button type="button">
                <BsGear />
            </button>
        </div>
    );

    const userActions = (
        <div>
            <NavLink
                style={{ display: "flex", padding: "10px" }}
                to={`/${paths.register}`}
            >
                <PiSignInBold />
                Registrarme
            </NavLink>
            <NavLink
                style={{ display: "block", padding: "10px" }}
                to={`/${paths.login}`}
            >
                Iniciar sesión
            </NavLink>
        </div>
    );

    return (
        <>
            <header>
                <nav>
                    <figure>
                        <img
                            src="#"
                            alt="Logo Chessmate"
                            title="Logo Chessmate"
                        />
                    </figure>
                    <ul>
                        {isAuth ? (
                            <NavLink to={`/${paths.dashboard}`}>
                                Mi portal
                            </NavLink>
                        ) : (
                            <NavLink to={paths.index}>Inicio</NavLink>
                        )}
                        <NavLink to={`/${paths.curses}`}>Cursos</NavLink>
                        <NavLink to={`/${paths.contact}`}>Contacto</NavLink>
                    </ul>

                    {isAuth ? userOptions : userActions}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div>
                    <div>
                        <p>Envianos un correo personalizado</p>
                        <NavLink
                            style={{ display: "flex" }}
                            to={`/${paths.contact}`}
                        >
                            <MdOutlineEmail />
                            Contacto
                        </NavLink>
                    </div>
                    <div>
                        <p>
                            Calle Segunda Inventada, Isabel la Cartólica 35,
                            Canarias
                        </p>
                        <a
                            style={{ display: "flex" }}
                            href="#"
                            title="Ver ubicación Chessmate"
                        >
                            <CiMap />
                            Ver en mapa
                        </a>
                    </div>
                </div>
                <div>
                    <p>+00 87 64 33 23</p>
                    <p>chessmate@protonmail.com</p>
                    <a href="#" style={{ display: "block" }}>
                        <FaInstagram />
                    </a>
                    <a href="#" style={{ display: "block" }}>
                        <AiOutlineYoutube />
                    </a>
                </div>
                <div>
                    <p>© [2025] Chessmate. Todos los derechos reservados.</p>
                    <p>
                        Desarrollado con pasión por el ajedrez | Política de
                        privacidad | Términos y condiciones
                    </p>
                    <img src="#" alt="Logo Chessmate" title="Logo Chessmate" />
                </div>
            </footer>
        </>
    );
}

export default Layout;
