<%-- 
    Document   : entradaExitosa
    Created on : 15 oct. 2020, 13:58:39
    Author     : inmaculada
--%>

<%@page import="Aux.VerificarRecaptcha" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta charset="UTF-8">
        <title>Pagina principal</title>
    </head>
    <body>
        <%
               String usuarioRegistrado = "alumno";
               String passwordRegistrado = "daw2";
               String usuario = request.getParameter("usuario");
               String password = request.getParameter("password");
               String errorMessage = "";

               //Obtenemos el valor de g-recaptcha-response del reCaptcha
               String gRecaptchaResponse = request.getParameter("g-recaptcha-response");
               System.out.println(gRecaptchaResponse);

               //Verificamos los datos del captcha con la URL de Google
               boolean verificado = VerificarRecaptcha.verificar(gRecaptchaResponse);
               
               System.out.println("usuario: " + usuario);
               System.out.println("password: " + password);
               System.out.println("captcha: " + verificado);
               
               //Comprobamos que tanto los datos de login como el captcha sean válidos
               if (usuarioRegistrado.equals(usuario) && passwordRegistrado.equals(password) && verificado) {
                   response.sendRedirect("entradaExitosa.jsp");
               } else {
                  //Si algún dato no es válido nos dirigimos de nuevo a la página de login mostrando el mensaje
                  //de error correspondiente.
                  if(verificado) 
                       errorMessage = "Usuario y/o password incorrectos";
                  else
                       errorMessage = "Captcha no válido";
                  session.setAttribute("errorMessage", errorMessage);
                  response.sendRedirect("login.jsp");
               }
        %>
    </body>
</html>
