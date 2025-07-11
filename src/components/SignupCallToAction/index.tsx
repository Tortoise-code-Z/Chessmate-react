import { NavLink } from "react-router-dom";
import { paths } from "../../consts/paths";
import { PiSignInBold } from "react-icons/pi";

type Props = {};

function SignupCallToAction({}: Props) {
    return (
        <section>
            <div>
                <h2>
                    <span>Regístrate</span>
                    <span>y comimenza a aprender</span>
                </h2>
                <p>Accede a cursos gratuitos y lecciones exclusivas</p>
            </div>
            <NavLink to={`/${paths.register}`}>
                <PiSignInBold />
                Registrarme
            </NavLink>
        </section>
    );
}

export default SignupCallToAction;
