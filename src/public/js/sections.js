function agregarProducto(btnQuitar, btnAgregar, inputCantidad) {
  let btnQuitarProducto = document.getElementById(btnQuitar);
  let btnAgregarProducto = document.getElementById(btnAgregar);
  let inputCantidadProducto = document.getElementById(inputCantidad);
  let value = inputCantidadProducto.value;

  btnQuitarProducto.addEventListener('click', (event) => {
    event.preventDefault();

    if (value != 0) {
      value--;
      inputCantidadProducto.value = value;
    }
  });

  btnAgregarProducto.addEventListener('click', (event) => {
    event.preventDefault();

    if (value < 25) {
      value++;
      inputCantidadProducto.value = value;
    }
  });
}


// AGREGAR ENTRADAS
let entradasSection = document.getElementById('entradasSection');

if (entradasSection) {
  let entradaGuacamole = agregarProducto('quitarGuacamole', 'agregarGuacamole', 'contadorGuacamole');
  let entradaEnsaladaPalmito = agregarProducto('quitarEnsaladaPalmito', 'agregarEnsaladaPalmito', 'contadorEnsaladaPalmito');
  let entradaEnsaladaAguacate = agregarProducto('quitarEnsaladaAguacate', 'agregarEnsaladaAguacate', 'contadorEnsaladaAguacate');
  let entradaEnsaladaMixLechugas = agregarProducto('quitarEnsaladaMix', 'agregarEnsaladaMix', 'contadorEnsaladaMix');
  let entradaCalamarCapeado = agregarProducto('quitarCalamarCapeado', 'agregarCalamarCapeado', 'contadorCalamarCapeado');
  let entradaQuesoFundido = agregarProducto('quitarQuesoFundido', 'agregarQuesoFundido', 'contadorQuesoFundido');
  let entradaQuesoFundidoChorizo = agregarProducto('quitarQuesoFundidoChorizo', 'agregarQuesoFundidoChorizo', 'contadorQuesoFundidoChorizo');
  let entradaQuesoFundidoChistorra = agregarProducto('quitarQuesoFundidoChistorra', 'agregarQuesoFundidoChistorra', 'contadorQuesoFundidoChistorra');
  let entradaTuetanos = agregarProducto('quitarTuetanos', 'agregarTuetanos', 'contadorTuetanos');
  let entradaChistorra = agregarProducto('quitarChistorra', 'agregarChistorra', 'contadorChistorra');
  let entradaMollejas = agregarProducto('quitarMollejas', 'agregarMollejas', 'contadorMollejas');
  let entradaChicharronNewYork = agregarProducto('quitarChicharronNewYork', 'agregarChicharronNewYork', 'contadorChicharronNewYork');
  let entradaVegetalesGrill = agregarProducto('quitarVegetalesGrill', 'agregarVegetalesGrill', 'contadorVegetalesGrill');
  let entradaPapasFrancesa = agregarProducto('quitarPapasFrancesa', 'agregarPapasFrancesa', 'contadorPapasFrancesa');
  let entradaPapasGajo = agregarProducto('quitarPapasGajo', 'agregarPapasGajo', 'contadorPapasGajo');
  let entradaArosCebolla = agregarProducto('quitarArosCebolla', 'agregarArosCebolla', 'contadorArosCebolla');
}

// AGREGAR TACOS
let tacosSection = document.getElementById('tacosSection');

if (tacosSection) {
  let tacoVacioAngus = agregarProducto('quitarTacosVacioAngus', 'agregarTacosVacioAngus', 'contadorTacosVacioAngus');
  let tacoPicanaAngus = agregarProducto('quitarTacosPicanaAngus', 'agregarTacosPicanaAngus', 'contadorTacosPicanaAngus');
  let tacoArrachera = agregarProducto('quitarTacosArrachera', 'agregarTacosArrachera', 'contadorTacosArrachera');
  let tacoNewYork = agregarProducto('quitarTacosNewYork', 'agregarTacosNewYork', 'contadorTacosNewYork');
  let tacoCostillaRes = agregarProducto('quitarTacosCostillaRes', 'agregarTacosCostillaRes', 'contadorTacosCostillaRes');
  let tacoAtun = agregarProducto('quitarTacosAtun', 'agregarTacosAtun', 'contadorTacosAtun');
}

// EMPANADAS
let empanadasSection = document.getElementById('empanadasSection');

if (empanadasSection) {
  let empanadaHumita = agregarProducto('quitarEmpanadasHumita', 'agregarEmpanadasHumita', 'contadorEmpanadasHumita');
  let empanadaCarnalita = agregarProducto('quitarEmpanadasCarnalita', 'agregarEmpanadasCarnalita', 'contadorEmpanadasCarnalita');
  let empanadaValenciana = agregarProducto('quitarEmpanadasValenciana', 'agregarEmpanadasValenciana', 'contadorEmpanadasValenciana');
  let empanadaMediterranea = agregarProducto('quitarEmpanadasMediterranea', 'agregarEmpanadasMediterranea', 'contadorEmpanadasMediterranea');
  let empanadaCampechana = agregarProducto('quitarEmpanadasCampechana', 'agregarEmpanadasCampechana', 'contadorEmpanadasCampechana');
}

// HAMBURGUESAS
let hamburguesasSection = document.getElementById('hamburguesasSection');

if (hamburguesasSection) {
  let hamburguesaClasica = agregarProducto('quitarHamburguesaClasica', 'agregarHamburguesaClasica', 'contadorHamburguesaClasica');
  let hamburguesaBigBen = agregarProducto('quitarHamburguesaBigBen', 'agregarHamburguesaBigBen', 'contadorHamburguesaBigBen');
  let hamburguesaFridaKahlo = agregarProducto('quitarHamburguesaFridaKahlo', 'agregarHamburguesaFridaKahlo', 'contadorHamburguesaFridaKahlo');
  let hamburguesaLadyBurguer = agregarProducto('quitarHamburguesaLadyBurger', 'agregarHamburguesaLadyBurger', 'contadorHamburguesaLadyBurger');
  let hamburguesaMillenial = agregarProducto('quitarHamburguesaMillenial', 'agregarHamburguesaMillenial', 'contadorHamburguesaMillenial');
  let hamburguesaBruceBurger = agregarProducto('quitarHamburguesaBruceBurger', 'agregarHamburguesaBruceBurger', 'contadorHamburguesaBruceBurger');
}

// PEPITOS
let pepitosSection = document.getElementById('pepitosSection');

if (pepitosSection) {
  let pepitosVacioAngus = agregarProducto('quitarPepitosVacioAngus', 'agregarPepitosVacioAngus', 'contadorPepitosVacioAngus');
  let pepitosArrachera = agregarProducto('quitarPepitosArrachera', 'agregarPepitosArrachera', 'contadorPepitosArrachera');
  let pepitosPicanaAngus = agregarProducto('quitarPepitosPicanaAngus', 'agregarPepitosPicanaAngus', 'contadorPepitosPicanaAngus');
  let pepitosRibEye = agregarProducto('quitarPepitosRibEye', 'agregarPepitosRibEye', 'contadorPepitosRibEye');
  let pepitosChoripan = agregarProducto('quitarPepitosChoripan', 'agregarPepitosChoripan', 'contadorPepitosChoripan');
  let pepitosNewYork = agregarProducto('quitarPepitosNewYork', 'agregarPepitosNewYork', 'contadorPepitosNewYork');
  let pepitosCamaron = agregarProducto('quitarPepitosCamaron', 'agregarPepitosCamaron', 'contadorPepitosCamaron');
}

// CORTES
let cortesSection = document.getElementById('cortesSection');

if (cortesSection) {
  let corteRibEye = agregarProducto('quitarCorteRibEye', 'agregarCorteRibEye', 'contadorCorteRibEye');
  let corteVacioAngus = agregarProducto('quitarCorteVacioAngus', 'agregarCorteVacioAngus', 'contadorCorteVacioAngus');
  let corteVacioArrachera = agregarProducto('quitarCorteArrachera', 'agregarCorteArrachera', 'contadorCorteArrachera');
  let corteVacioPicanaAngus = agregarProducto('quitarCortePicanaAngus', 'agregarCortePicanaAngus', 'contadorCortePicanaAngus');
  let corteVacioNewYork = agregarProducto('quitarCorteNewYork', 'agregarCorteNewYork', 'contadorCorteNewYork');
}

// PARRILLADAS
let parrilladasSection = document.getElementById('parrilladasSection');

if (parrilladasSection) {
  let parrilladaCasaParrilla = agregarProducto('quitarParrillaCasaParrilla', 'agregarParrillaCasaParrilla', 'contadorParrillaCasaParrilla');
  let parrilldasCanival = agregarProducto('quitarParrillaCanival', 'agregarParrillaCanival', 'contadorParrillaCanival');
  let parrilladaCarniceria = agregarProducto('quitarParrillaCarniceria', 'agregarParrillaCarniceria', 'contadorParrillaCarniceria');
  let parrilladaMarTierra = agregarProducto('quitarParrillaMarTierra', 'agregarParrillaMarTierra', 'contadorParrillaMarTierra');
}

// MARISCOS
let mariscosSection = document.getElementById('mariscosSection');

if (mariscosSection) {
  let mariscosPulpoZuniga = agregarProducto('quitarMariscosPulpoZuniga', 'agregarMariscosPulpoZuniga', 'contadorMariscosPulpoZuniga');
  let mariscosCamaronesGrill = agregarProducto('quitarMariscosCamaronesGrill', 'agregarMariscosCamaronesGrill', 'contadorMariscosCamaronesGrill');
  let mariscosAguachileVerde = agregarProducto('quitarMariscosAguachileVerde', 'agregarMariscosAguachileVerde', 'contadorMariscosAguachileVerde');
  let mariscosAguachileNegro = agregarProducto('quitarMariscosAguachileNegro', 'agregarMariscosAguachileNegro', 'contadorMariscosAguachileNegro');
  let mariscosTostadaMarina = agregarProducto('quitarMariscosTostadaMarina', 'agregarMariscosTostadaMarina', 'contadorMariscosTostadaMarina');
  let mariscosTostadaAtun = agregarProducto('quitarMariscosTostaditasAtun', 'agregarMariscosTostaditasAtun', 'contadorMariscosTostaditasAtun');
}

// BEBIDAS
let bebidasSection = document.getElementById('bebidasSection');

if (bebidasSection) {
  let bebidasLimonada = agregarProducto('quitarBebidasLimonada', 'agregarBebidasLimonada', 'contadorBebidasLimonada');
  let bebidasCoronaClara = agregarProducto('quitarBebidasCoronaClara', 'agregarBebidasCoronaClara', 'contadorBebidasCoronaClara');
  let bebidasCoronaObscura = agregarProducto('quitarBebidasCoronaOscura', 'agregarBebidasCoronaOscura', 'contadorBebidasCoronaOscura');
  let bebidasClerico = agregarProducto('quitarBebidasClerico', 'agregarBebidasClerico', 'contadorBebidasClerico');
  let bebidasPinada = agregarProducto('quitarBebidasPinada', 'agregarBebidasPinada', 'contadorBebidasPinada');
  let bebidasFresada = agregarProducto('quitarBebidasFresada', 'agregarBebidasFresada', 'contadorBebidasFresada');
  let bebidasCocaOriginal = agregarProducto('quitarBebidasCocacolaOriginal', 'agregarBebidasCocacolaOriginal', 'contadorBebidasCocacolaOriginal');
  let bebidasCocaLight = agregarProducto('quitarBebidasCocacolaLight', 'agregarBebidasCocacolaLight', 'contadorBebidasCocacolaLight');
  let bebidasCocaSinAzucar = agregarProducto('quitarBebidasCocacolaSinAzucar', 'agregarBebidasCocacolaSinAzucar', 'contadorBebidasCocacolaSinAzucar');
  let bebidasSprite = agregarProducto('quitarBebidasSprite', 'agregarBebidasSprite', 'contadorBebidasSprite');
  let bebidasFanta = agregarProducto('quitarBebidasFanta', 'agregarBebidasFanta', 'contadorBebidasFanta');
  let bebidasCopaVinoTinto = agregarProducto('quitarBebidasCopaVinoTinto', 'agregarBebidasCopaVinoTinto', 'contadorBebidasCopaVinoTinto');
  let bebidasBotellaVinoTinto = agregarProducto('quitarBebidasBotellaVinoTinto', 'agregarBebidasBotellaVinoTinto', 'contadorBebidasBotellaVinoTinto');
}


// POSTRES
let postresSection = document.getElementById('postresSection');

if (postresSection) {
  let postreVolcanChocolate = agregarProducto('quitarPostreVolcanChocolate', 'agregarPostreVolcanChocolate', 'contadorPostreVolcanChocolate');
  let postreChurrosCajeta = agregarProducto('quitarPostreChurrosCajeta', 'agregarPostreChurrosCajeta', 'contadorPostreChurrosCajeta');
  let postreFlan = agregarProducto('quitarPostreFlan', 'agregarPostreFlan', 'contadorPostreFlan');
}