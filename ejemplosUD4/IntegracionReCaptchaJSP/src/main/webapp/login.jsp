<%-- 
    Document   : login.jsp
    Created on : 16 oct. 2020, 12:07:45
    Author     : inmaculada
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <title>Pagina de inicio</title>
      <script src="https://www.google.com/recaptcha/api.js"></script>
   </head>
   <body>
      <form action="controlador.jsp" method="post">
         <table>
            <tbody>
               <tr>
                  <td>
                     usuario:
                  </td>
                  <td>
                     <input type="text" name="usuario">
                  </td>
               </tr>
               <tr>
                  <td>
                     password:
                  </td>
                  <td>
                     <input type="password" name="password">
                  </td>
               </tr>
               <tr>
                  <td></td>
                  <td>
                     <div class="g-recaptcha" data-sitekey="6LffP9cZAAAAACJLCuuw4zoJW99VQVU_11FydloJ"></div>
                     <span>
                         <%
                         Object errorMessage = session.getAttribute("errorMessage");
                         if(errorMessage != null)
                            out.print(errorMessage.toString());
                         %>
                     </span>
                  </td>
               </tr>
               <tr>
                  <td></td>
                  <td>
                     <input type="submit" value="Login">
                  </td>
               </tr>
            </tbody>
         </table>
      </form>
      
   </body>
</html>