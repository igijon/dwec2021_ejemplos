package Aux;


import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.URL;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.net.ssl.HttpsURLConnection;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author inmaculada
 */
public class VerificarRecaptcha {
    
    public static final String url = "https://www.google.com/recaptcha/api/siteverify";
    //Clave secreta del captcha 
    public static final String secreto = "6LffP9cZAAAAAC2pkSlTvqSgEFN4HQ2fDMIRBIG5";
    private final static String USER_AGENT = "Mozilla/5.0";
    
    public static boolean verificar(String gRecaptchaResponse) throws IOException {
        String inputLine;
        
        //Si no obtenemos respuesta la validación es errónea
        if (gRecaptchaResponse == null || gRecaptchaResponse.isEmpty() || gRecaptchaResponse.isBlank()) {
            return false;
        }
        
        try {
            URL obj = new URL(url);
            //Establecemos la conexión con la URL que verificará el sitio
            HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();
            con.setRequestMethod("POST");
            con.setRequestProperty("User-Agent", USER_AGENT);
            con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
            //Establecemos los parámetros del post
            String postParams = "secret=" + secreto + "&response=" + gRecaptchaResponse;
            con.setDoOutput(true);
            //Realizamos la petición
            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(postParams);
            wr.flush();
            wr.close();
            //Obtenemos el código de la response
            int responseCode = con.getResponseCode();
            
            System.out.println("Enviando 'POST' peticion a URL : " + url);
            System.out.println("Parametros post : " + postParams);
            System.out.println("Codigo de respuesta : " + responseCode);
            
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            
            //Obtenemos la respuesta
            StringBuffer respuesta = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                respuesta.append(inputLine);
            }
            in.close();
            
            System.out.println("La respuesta es: "+respuesta.toString());
            //La respuesta es un json y nos interesa saber si el valor success viene
            //a true o false
            JsonReader jsonReader = Json.createReader(new StringReader(respuesta.toString()));
            JsonObject jsonObject = jsonReader.readObject();
            jsonReader.close();
            return jsonObject.getBoolean("success");
        } catch (IOException e) {
            return false;
        }
    }
}