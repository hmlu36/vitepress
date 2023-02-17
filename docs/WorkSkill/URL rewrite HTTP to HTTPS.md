# [URL rewrite] HTTP to HTTPS

###### tags: `工作`

在IIS希望網址HTTP重新導向HTTPS
可以使用 URL rewrite的機制

```
    <rewrite>
        <rules>
           <rule name="HTTP to HTTPS redirect" stopprocessing="true">
               <match url="(.*)">
               <conditions>
                   <add input="{HTTPS}" pattern="off">
               </add></conditions>
               <action redirecttype="Permanent" type="Redirect" url="https://{HTTP_HOST}/{R:1}">
           </action></match></rule>
       </rules>
       <outboundrules>
           <rule enabled="true" name="Add Strict-Transport-Security when HTTPS">
               <match pattern=".*" servervariable="RESPONSE_Strict_Transport_Security">
               <conditions>
                   <add ignorecase="true" input="{HTTPS}" pattern="on">
               </add></conditions>
               <action type="Rewrite" value="max-age=31536000">
           </action></match></rule>
       </outboundrules>
    </rewrite>
```