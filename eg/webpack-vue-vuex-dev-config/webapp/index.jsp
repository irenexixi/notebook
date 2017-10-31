<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0">
    <title>内测平台，h5</title>
    <script>
        window.config = {
            currentUser: "${userInfo.id}",
            context: "<%=request.getContextPath()%>"
        }
    </script>
    
    <link href="<%=request.getContextPath()%>/static/css/commons_db612.css" rel="stylesheet">
    
  </head>
  <body>
    <div id="root"></div>
    
    <script src="<%=request.getContextPath()%>/static/js/vendors_337d0.js"></script>
    
    <script src="<%=request.getContextPath()%>/static/js/apps_43133.js"></script>
    
  </body>
</html>
