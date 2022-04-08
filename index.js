const data = {
  burgers: [
    {
      name: "AC/DC",
      description:
        "Pão de aipim, maionese temperadinha, burger de 180g de carne ou vegetariano, duplo queijo cheddar, bacon em tiras crocantes e a nossa deliciosa cebola caramelada (acompanha batatas e maionese).",
      price: "R$ 39,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_4.jpg"
    },
    {
      name: "AMY",
      description:
        "O diferencial do pão de vinho, maionese temperadinha, burger de 180g de carne ou vegetariano, triplo queijo provolone, a nossa deliciosa cebola caramelada e alface americana (acompanha batatas e maionese).",
      price: "R$ 45,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_107.jpeg"
    },
    {
      name: "BOWIE",
      description:
        "Pão de aipim, a nossa incrível maionese de açafrão, burger de 150g de frango, duplo queijo prato, tomate e o agridoce do sunomono (acompanha batatas e maionese).",
      price: "R$ 38,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_138.jpeg"
    },
    {
      name: "GUNS",
      description:
        "Pão de aipim, o inconfundível molho Rockin Bel com sabor defumado, burger de 180g de carne ou vegetariano, duplo queijo cheddar, a crocância da cebola crispy e alface americana (acompanha batatas e maionese).",
      price: "R$ 39,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_1.jpg"
    },
    {
      name: "IRON",
      description:
        "Pão de aipim, maionese temperadinha, burger de 160g de carne ou vegetariano, pacotinho de bacon recheado com queijo prato e cheddar derretidos, tomatinho cereja saborizado e alface roxa (acompanha batatas e maionese).",
      price: "R$ 44,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_320.jpeg"
    },
    {
      name: "METALLICA",
      description:
        "Pão de aipim, o inconfundível molho Rockin Bel com sabor defumado, burger de 180g de carne ou vegetariano, duplo queijo prato, duplo queijo cheddar, o dobro de bacon e anéis de cebola empanada (acompanha batatas e maionese).",
      price: "R$ 43,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_61.jpg"
    },
    {
      name: "HENDRIX",
      description:
        "Pão de aipim, a aromática maionese de manjericão, suculentas iscas de entrecot, molho de gorgonzola, crocante cebola crispy e rúculas (acompanha batata e maionese).",
      price: "R$ 43,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_191.jpeg"
    },
    {
      name: "PEARL JAM",
      description:
        "Pão de aipim, maionese temperadinha, burger de 180g de carne ou vegetariano, queijo gorgonzola, nossa deliciosa geleia de damasco com pimenta e cebola roxa (acompanha batatas e maionese).",
      price: "R$ 43,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_5.jpg"
    },
    {
      name: "RAMONES",
      description:
        "Pão de aipim, molho Rockin Bel com sabor defumado, burger de 180g de carne ou vegetariano e duplo queijo prato (acompanha batatas e maionese). Você pode adicionar os ingredientes de sua preferência.",
      price: "R$ 36,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_2.jpg"
    },
    {
      name: "RED HOT",
      description:
        "Pão de aipim, a aromática maionese de manjericão, burger de 180g de carne ou vegetariano, triplo queijo provolone, a nossa geleia de pimenta, tomate e alface roxa (acompanha batatas e maionese).",
      price: "R$ 44,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_6.jpeg"
    },
    {
      name: "STONES",
      description:
        "Pão de aipim, maionese temperadinha, burger de 180g de carne ou vegetariano, duplo queijo prato, tomate e alface americana bem fresquinhos (acompanha batatas e maionese).",
      price: "R$ 37,99",
      image: "http://bitbar.online/util/api/clientes/imagens/ROCKINBEL/g_3.jpg"
    },
  ],
  fillings: [
    {
      name: "Vegetariano",
    },
    {
      name: "Carne",
      variants: ["Ao ponto", "Ponto pra mais", "Mal passado"],
    },
  ],
};
$(document).ready(function () {
  $("#lucky-button").on("click", (event) => {
    const {burger, filling, variant} = getBurger();
    $(event.target).addClass("hidden");
    $("#burger").removeClass("hidden");
    $("#burger-name").text(`${burger.name} - ${filling.name} - ${variant}`);
    $("#burger-description").text(burger.description);
    $("#burger-price").text(burger.price);
    $("#burger-image").attr("src", burger.image);
  });
});

function getBurger () {
    const { burgers, fillings } = data;
    const burger = burgers[getRandomFromLength(burgers.length - 1)];
    const filling = fillings[getRandomFromLength(fillings.length - 1)];
    const variant = filling.variants
      ? filling.variants[getRandomFromLength(filling.variants.length - 1)]
      : "";

    return {
        burger, filling, variant
    };
}

function getRandomFromLength(length) {
  return Math.floor(Math.random() * (length + 1));
}
