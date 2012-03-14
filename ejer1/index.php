<html>
    <head>
        <title>Practice1 </title>
        <script type="text/javascript" src="jquery-1.7.1.min.js"></script>
        <script type="text/javascript" src="newscript.js"></script>
    </head>
    
    <body onload ="load()">
        <form>
            <h1>
                <input type="button" id="buttonRta" onclick ="enviar()" value="Enviar"/>
            </h1>
            <br/><br/>
            <h2>
                <textarea id="alias"></textarea>
                <div id="respuesta" style="position:absolute; left: 200px; bottom: 200px;"> Aqui va la respuesta del dispatcher</div>             
            </h2>
        </form>
    </body>
</html>