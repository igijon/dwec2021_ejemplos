import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author inmaculada
 */
@WebServlet(name = "LoginServlet", urlPatterns = {"/LoginServlet"}, initParams = {@WebInitParam(name = "usuario", value = "alumno"),@WebInitParam(name = "password", value = "daw2") })
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //Obtenemos los datos introducidos por el usuario en el formulario
        String usuario = request.getParameter("usuario");
        String password = request.getParameter("password");
        
        //Obtenemos el valor de g-recaptcha-response del reCaptcha
        String gRecaptchaResponse = request.getParameter("g-recaptcha-response");
        System.out.println(gRecaptchaResponse);
        
        //Verificamos los datos del captcha con la URL de Google
        boolean verificado = VerificarRecaptcha.verificar(gRecaptchaResponse);
        String usuarioRegistrado = getServletConfig().getInitParameter("usuario");
        String passwordRegistrado = getServletConfig().getInitParameter("password");
        System.out.println("usuario: " + usuario);
        System.out.println("password: " + password);
        System.out.println("captcha: " + verificado);
        
        //Comprobamos que tanto los datos de login como el captcha sean válidos
        if (usuarioRegistrado.equals(usuario) && passwordRegistrado.equals(password) && verificado) {
            response.sendRedirect("entradaExitosa.jsp");
        } else {
            //Si algún dato no es válido nos dirigimos de nuevo a la página de login mostrando el mensaje
            //de error correspondiente.
            RequestDispatcher rd = getServletContext().getRequestDispatcher("/login.html");
            /*
            //Trataríamos el error como correspondiese
            if (verificado) {
                //Mostraremos el mensaje indicando que el usuario y/o password son incorrectos
            } else {
                //El captcha no es válido
            }*/
            rd.include(request, response);
        }
    }
}
