
$(document).ready(function () {
    function mudarSimbolo() {

        var simbolo = $('#jogador').text();
        if (simbolo == "X") {
            $('#jogador').text('O');
        }
        else {
            $('#jogador').text('X');
        }
    };



    $("button[name='x1']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);

        $("button[name='x1']").text(simbolo);

        mudarSimbolo();


    });


    $("button[name='x2']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);


        $("button[name='x2']").text(simbolo);

        mudarSimbolo();

        click++;

    });

    $("button[name='x3']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);


        $("button[name='x3']").text(simbolo);

        mudarSimbolo();


    });

    $("button[name='y1']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);


        $("button[name='y1']").text(simbolo);

        mudarSimbolo();

    });

    $("button[name='y2']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);


        $("button[name='y2']").text(simbolo);

        mudarSimbolo();

    });

    $("button[name='y3']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);


        $("button[name='y3']").text(simbolo);

        mudarSimbolo();

    });

    $("button[name='z1']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);


        $("button[name='z1']").text(simbolo);

        mudarSimbolo();

    });

    $("button[name='z2']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);


        $("button[name='z2']").text(simbolo);

        mudarSimbolo();

    });

    $("button[name='z3']").click(function () {
        var simbolo = $("label[id='jogador']").text();

        var click = parseInt($("input[type='hidden']").val());

        click = parseInt(click) + 1;

        $("input[type='hidden']").val(click);


        $("button[name='z3']").text(simbolo);

        mudarSimbolo();

    });

    function vereficaVencendorHorizontal() {
        var combinacao;
        var simbolo;
        for (var i = 0; i < 3; i++) {
            if (i == 0) {
                simbolo = 'x';
            }
            else if (i == 1) {
                simbolo = 'y';
            }
            else if (i == 2) {
                simbolo = 'z';
            }

            //Colunas Horizontais
            for (var j = 1; j <= 3; j++) {

                combinacao += $("button[name='" + simbolo + j + "']").text();

                if (combinacao == "undefinedX") {
                    combinacao = "X";
                }

                if (combinacao == "XXX") {
                    alert('Você ganhou X');
                    return;
                }
                else if (combinacao == "OOO") {
                    alert('Você ganhou O');
                    return;
                }

            }

            combinacao = "";

        }
    }

    function vereficaVencendorVertical() {
        var combinacao;

        //alert('vertical')
        for (var i = 1; i <= 3; i++) {
            combinacao += $("button[name='x" + i + "']").text();

            if (combinacao == "undefinedX") {
                combinacao = "X";
            }

            combinacao += $("button[name='y" + i + "']").text();
            combinacao += $("button[name='z" + i + "']").text();

            //alert(combinacao)

            if (combinacao == "XXX") {
                alert('Você ganhou X');
                return;
            }
            else if (combinacao == "OOO") {
                alert('Você ganhou O');
                return;
            }

            combinacao = "";

        }

    }

    // VERIFICA A DIAGONAL 
    function vereficaVencendorVertical() {
        var combinacao;

        combinacao += $("button[name='x1']").text();

        if (combinacao == "undefinedX") {
            combinacao = "X";
        }

        combinacao += $("button[name='y2']").text();
        combinacao += $("button[name='z3']").text();

        if (combinacao == "XXX") {
            alert('Você ganhou X');
            return;
        }
        else if (combinacao == "OOO") {
            alert('Você ganhou O');
            return;
        }
        combinacao = "";

        combinacao += $("button[name='x3']").text();

        if (combinacao == "undefinedX") {
            combinacao = "X";
        }

        combinacao += $("button[name='y2']").text();
        combinacao += $("button[name='z1']").text();

        if (combinacao == "XXX") {
            alert('Você ganhou X');
            return;
        }
        else if (combinacao == "OOO") {
            alert('Você ganhou O');
            return;
        }

    }

    $(document).ready(function () {

        $("button").click(function () {
            var click = $("input[type='hidden']").val();

            vereficaVencendorHorizontal();

            vereficaVencendorVertical();

            if (parseInt(click) >= 9) {
                alert("Deu velha");
            }

        });
    });

});