import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { loginEmailPassword, loginFacebook, loginGoogle } from "../redux/actions/actionLogin";
import { useNavigate } from "react-router-dom";
import { ButtonEnviar, ContainerIconos, FormInicio, FormInputs, ImgIconoInicio, InputInicio } from "../../style/LoginStyle";

const LoginRegistro = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    }, 
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required('Error')
    }),
    onSubmit:({email, password}) => {
      dispatch(loginEmailPassword(email, password))
    }
  })

  const handleGoogle = () => {
    dispatch(loginGoogle());
    navigate('/principalpage')
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
    navigate('/principalpage')
  };

  return (
    <FormInicio onSubmit={formik.handleSubmit}>
      <h2>Registro</h2>
      <FormInputs>
        <h2>Correo</h2>
        <InputInicio
          type="email"
          placeholder="Enter email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </FormInputs>

      <FormInputs>
        <h2>Contraseña</h2>
        <InputInicio
          type="password"
          placeholder="Password"
          autoComplete="true"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </FormInputs>

      <ButtonEnviar variant="primary" type="submit">
        Enviar
      </ButtonEnviar>

      <ContainerIconos>
        <Container className="google-btn" onClick={() => handleGoogle()}>
          <div>
            <ImgIconoInicio
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
        </Container>
        <Container className="facebook-btn" onClick={() => handleFacebook()}>
          <div>
            <ImgIconoInicio
              className="facebook-icon"
              src="https://res.cloudinary.com/davidcharif/image/upload/v1647260118/sprint3-proyecto/2021_Facebook_icon.svg_mrabec.png"
              alt="facebook button"
            />
          </div>
        </Container>
      </ContainerIconos>
      {/* <Link to="/registro">Registrarse</Link> */}
    </FormInicio>
  );
};

export default LoginRegistro;
