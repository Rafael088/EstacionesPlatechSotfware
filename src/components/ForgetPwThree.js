function ForgetPwThree() {
    return ( 
        <div className="contForgetPw">
            <p>Ingresa la nueva Contraseña</p>
            <input type="password" name="nuevaContraseña" value=""/>
            <p>Repite la Contraseña</p>
            <input type="password" name="repiteContraseña" value=""/>
        </div>
     );
}

export default ForgetPwThree;