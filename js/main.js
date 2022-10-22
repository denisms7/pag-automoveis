
$(document).ready(function () {
    $('#carousel-banner').slick({
        autoplay: true,
        speed: 1000,
    })

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            veiculo: {
                required: false,
            },
            mensagem: {
                required: true,
            },
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, insira sua mensagem',
        },

        submitHandler: function (form) {
            console.log(form)
        },

        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            console.log(camposIncorretos)
        }

    })
})