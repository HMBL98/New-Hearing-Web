function validaNombre(){
	var nombre = document.getElementById("user_name").value;
	var regEsp = /^\s+|s+$/;
	var reg = /^([a-z ñáéíóú]{2,60})$/i;
	var className = $('#uno').attr('id');
	var verdadero = "verdadero";
	var falso = "falso";

	if (nombre.length > 2 && nombre.length < 30 && regEsp.test(nombre) == false ){
	 	$('#uno').addClass('icon-checkmark');
	 	return verdadero;
	 }
	else if(nombre.length < 2 || nombre.length >30 || regEsp.test(nombre) == false ){
	 	$('#uno').removeClass('icon-checkmark');
	 	return falso;
	}
	 else{
	 	$('#uno').addClass('icon-cross');
	 	return falso;

	 }
}

function validaApellido(){
	var apellido = document.getElementById("user_lastname").value;
	var regEsp = /^\s+|s+$/;
	var verdadero = "verdadero";
	var falso = "falso";

	if (apellido.length > 2 && apellido.length < 22 && regEsp.test(apellido) == false){
	 	$('#dos').addClass('icon-checkmark');
	 	return verdadero;
	 }
	else if(apellido.length <= 2 || apellido.length >22 || regEsp.test(apellido) == false){
	 	$('#dos').removeClass('icon-checkmark');
	 	return falso;
	}
	 else{
	 	$('#dos').addClass('icon-cross');
	 	return falso;
	 }
}

function validaUsuario(){
	var usuario = document.getElementById("user_username").value;
	var regEsp = /^\s+|s+$/;
	var verdadero = "verdadero";
	var falso = "falso";

	if (usuario.length > 2 && usuario.length < 15 && regEsp.test(usuario) == false){
	 	$('#tres').addClass('icon-checkmark');
	 	return verdadero;
	 }
	else if(usuario.length < 2 || usuario.length >15 || regEsp.test(usuario) == false){
	 	$('#tres').removeClass('icon-checkmark');
	 	return falso;
	}
	 else{
	 	$('#tres').addClass('icon-cross');
	 	return falso;
	 }
}

function validaContrasena(){
	var contrasena = document.getElementById("user_password").value;
	var regEsp = /^\s+|s+$/;
	var verdadero = "verdadero";
	var falso = "falso";

	
	if(contrasena.length >= 10 && contrasena.length <= 20 && regEsp.test(contrasena) == false) {
		$('#4').addClass('icon-checkmark');
		return verdadero;
	}
	else if(contrasena.length < 10 || contrasena.length > 20 || regEsp.test(contrasena) == false){
		$('#4').removeClass('icon-checkmark');
		return falso;
	}
	else{
		$('#4').addClass('icon-cross');
		return falso;
	}
}

function validaConfirmarContrasena(){
	var claveRepetida = document.getElementById("user_password_confirmation").value;
	var contrasena = document.getElementById("user_password").value;
	var verdadero = "verdadero";
	var falso = "falso";


	if( claveRepetida == contrasena && contrasena.length >= 10 && contrasena.length <= 20 && claveRepetida.length >= 10 && claveRepetida.length <= 20){
		$('#cinco').addClass('icon-checkmark');
		return verdadero;
	} 
	else{
		$('#cinco').removeClass('icon-checkmark');
		return falso;
	}
}
function validaCurrentContrasena(){
	
	var contrasena = document.getElementById("user_current_password").value;
	var regEsp = /^\s+|s+$/;
	var verdadero = "verdadero";
	var falso = "falso";

	
	if(contrasena.length >= 10 && contrasena.length <= 20 && regEsp.test(contrasena) == false) {
		$('#7').addClass('icon-checkmark');
		return verdadero;
	}
	else if(contrasena.length < 10 || contrasena.length > 20 || regEsp.test(contrasena) == false){
		$('#7').removeClass('icon-checkmark');
		return falso;
	}
	else{
		$('#7').addClass('icon-cross');
		return falso;
	}
}

function validaEmail(){

	var email = document.getElementById("user_email").value;
	
			
	var b = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/ ;
	
	return b.test(email);
}

function emailValidado(){
	var validado = validaEmail();
	var verdadero = "verdadero";
	var falso = "falso";

	if( validado == true){
		$('#seis').addClass('icon-checkmark');
		return verdadero;
	}
	else{
		$('#seis').removeClass('icon-checkmark');
		return falso;
	}

}

function emailConfirmado(){
	var emailConfirmado = document.registro.email2.value;
	var email = document.registro.email.value;
	var verdadero = "verdadero";
	var falso = "falso";

	if( emailConfirmado == email){
		$('#siete').addClass('icon-checkmark');
		return verdadero;
	}
	else{
		$('#siete').removeClass('icon-checkmark');
		return falso;
	}
}

function validado(){
	var nombre = document.getElementById("user_name").value;
	var reg = /^([a-z ñáéíóú]{2,60})$/i;
	var regEsp = /^\s+|s+$/;

	var aviso = document.getElementById("avisoP");

	var apellido = document.getElementById("user_lastname").value;

	var correcto = /^([a-z ñáéíóú]{2,60})$/i;

	var usuario = document.getElementById("user_username").value;
    var usuarioCorrecto = /^([a-z ñáéíóú 0-9]{2,60})$/i;

    var clave = document.getElementById("user_password").value;
    var clave2 = document.getElementById("user_password_confirmation").value;

   	if(reg.test(nombre)==false || validaNombre() == "falso" || regEsp.test(nombre)){
    	sweetAlert('Nombre es invalido');
   		return false;
   	}
    if(correcto.test(apellido)==false || validaApellido() == "falso" || regEsp.test(apellido)){
    	swal('Apellido invalido');
   		return false;
    }
    if(usuarioCorrecto.test(usuario)== false || validaUsuario() == "falso" || regEsp.test(usuarioCorrecto)){
    	swal('Usuario invalido');
    	return false;
    } 
    if(emailValidado() == "falso"){
   		swal('Email invalido');
   		return false;
   	}
   	if(validaConfirmarContrasena() == "falso" &&  clave != "" && clave2 != ""){
   		swal('Contraseñas no coinciden');
   		return false;
   	}
    if(!aviso.checked){
   		swal('Debe aceptar los avisos de privacidad');
   		return false;
   	} 
    
   
   
    
   
    
   

   	/*var clave = document.getElementById("user_password").value;
   	var claveCorrecta = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
   
   	if( claveCorrecta.test(clave) == false || validaContrasena() == "falso"){
   		swal('Contraseña invalida','Debe contener mayusculas, @#$%, o numeros y un minimo de 10 caracteres');
   		return false;
   	}
   */
   	

   
   
   	
}
function validadoL(){
   	var clave = document.getElementById("user_password").value;
   	if(emailValidado() == "falso"){
   		swal('Email invalido');
   		return false;
   	}
   	if(validaContrasena() == "falso"){
   		swal('Contraseña invalida','Debe contener mayusculas o numeros y un minimo de 10 caracteres');
   		return false;
   	}
   	
	
}
function validadoP(){
     	if(emailValidado() == "falso"){
   		swal('Email invalido');
   		return false;
   	}
	
}