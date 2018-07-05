package com.easycode.common.utils;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import javax.net.ssl.*;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.URL;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

/**
 * TODO: 类描述
 *
 * @author 萧竣匀
 * @date 2018/7/1 16:28
 */
public class HttpUtils {

    /**
     * 发送Https请求
     * @param requestUrl
     * @param requestMethod
     * @param outputStr
     * @return
     */
    public static JsonNode httpsRequest(String requestUrl, String requestMethod, String outputStr) {
        ObjectMapper mapper=new ObjectMapper();

        StringBuffer buffer=new StringBuffer();
        try {
            TrustManager[] manager = { new X509TrustManager() {
                @Override
                public void checkClientTrusted(X509Certificate[] x509Certificates, String s) throws CertificateException {}

                @Override
                public void checkServerTrusted(X509Certificate[] x509Certificates, String s) throws CertificateException {}
                @Override
                public X509Certificate[] getAcceptedIssuers() {
                    return new X509Certificate[0];
                }
            } };
            SSLContext sslContext = SSLContext.getInstance("SSL", "SunJSSE");
            sslContext.init(null, manager, new java.security.SecureRandom());
            //获取SSLSocketFactory
            SSLSocketFactory ssf = sslContext.getSocketFactory();

            URL url = new URL(requestUrl);
            HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
            conn.setSSLSocketFactory(ssf);
            conn.setDoOutput(true);
            conn.setDoInput(true);
            conn.setUseCaches(false);
            // 设置请求方式（GET/POST）
            conn.setRequestMethod(requestMethod);
            if ("GET".equalsIgnoreCase(requestMethod)){
                conn.connect();
            }
            if (null != outputStr) {
                OutputStream outputStream = conn.getOutputStream();
                // 注意编码格式
                outputStream.write(outputStr.getBytes("UTF-8"));
                outputStream.close();
            }
            // 从输入流读取返回内容
            InputStream inputStream = conn.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream, "utf-8");
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            String str = null;
            while ((str = bufferedReader.readLine()) != null) {
                buffer.append(str);
            }
            // 释放资源
            bufferedReader.close();
            inputStreamReader.close();
            inputStream.close();
            conn.disconnect();
            return  mapper.readTree(buffer.toString());
        }catch (Exception e){
            e.printStackTrace();
            return  null;
        }

    }
}
