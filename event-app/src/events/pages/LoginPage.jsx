import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { UserContext } from '../../auth/contexts/UserContext'; // Ajusta el path según tu estructura
import { useNavigate } from 'react-router-dom';

const initialForm = {
    email: '',
    password: ''
};

export const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(UserContext); // Asegúrate de importar el contexto correctamente

    const { email, password, onInputChange } = useForm(initialForm);

    const onLoginUser = () => {
        login({ email, password });

        navigate('/', { replace: true });
    };

    return (
        <>
            <div className="container vh-100 justify-content-center align-items-center">
                <div className="row w-100">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mx-auto">
                        <div className="card-body">
                            <h4 className="card-title tex-center">Iniciar sesión</h4>

                            <div className="form-group">
                                <label> Correo electrónico </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onInputChange}
                                    placeholder='Escribe tu correo electrónico'
                                />
                            </div>
                            <div className="form-group">
                                <label> Contraseña </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                    placeholder='Escribe tu contraseña'
                                />
                            </div>

                            <div className="form-group">
                                <button
                                    className="btn btn-primary btn-lg btn-block"
                                    onClick={onLoginUser}
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3" ></div >
                </div >
            </div >
        </>
    );
};