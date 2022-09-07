function ForgetPwTwo() {
    return ( 
        <div className="contForgetPw">
            <p>Ingresa el código que te llego al Correo "" y pusla en continuar.</p>
            <p>Si no te ha llegado pulsa en Reenviar y si quieres cambiar de correo pulsa en volver</p>
            <a href="">Reenviar</a>
            <p>Codigo:</p>
            <input type="password" name="Codigo" value=""/>
        </div>
     );
}

export default ForgetPwTwo;