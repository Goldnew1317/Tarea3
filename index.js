function sumar(){
    s1 = document.getElementById("n1").value;
    s2 = document.getElementById("n2").value;
    
    resultado = parseFloat(s1) + parseFloat(s2);

    texto_resultado = document.getElementById("resultado");
    texto_resultado.innerHTML = resultado;
    }

    function restar(){
    s1 = document.getElementById("n1").value;
    s2 = document.getElementById("n2").value;
    
    resultado = parseFloat(s1) - parseFloat(s2);

    texto_resultado = document.getElementById("resultado");
    texto_resultado.innerHTML = resultado;
    }
    
    function multiplicar(){
    s1 = document.getElementById("n1").value;
    s2 = document.getElementById("n2").value;
    
    resultado = parseFloat(s1) * parseFloat(s2);

    texto_resultado = document.getElementById("resultado");
    texto_resultado.innerHTML = resultado;
    }
    
    function dividir(){
    s1 = document.getElementById("n1").value;
    s2 = document.getElementById("n2").value;
    
    resultado = parseFloat(s1) / parseFloat(s2);

    texto_resultado = document.getElementById("resultado");
    texto_resultado.innerHTML = resultado;
    }
