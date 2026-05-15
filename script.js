// -----SLIDESHOW-----
let slideAtual = 0;
 
function iniciarSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const pontos  = document.querySelectorAll('.ponto');
 
  if (slides.length === 0) return;
 
  function mostrar(index) {
    slides.forEach(s => s.classList.remove('ativo'));
    pontos.forEach(p => p.classList.remove('ativo'));
    slideAtual = (index + slides.length) % slides.length;
    slides[slideAtual].classList.add('ativo');
    if (pontos[slideAtual]) pontos[slideAtual].classList.add('ativo');
    document.getElementById('num-slide').textContent =
      (slideAtual + 1) + ' / ' + slides.length;
  }
 
  document.getElementById('btn-anterior').addEventListener('click', () => mostrar(slideAtual - 1));
  document.getElementById('btn-proximo').addEventListener('click',  () => mostrar(slideAtual + 1));
 
  pontos.forEach((p, i) => p.addEventListener('click', () => mostrar(i)));
 
  setInterval(() => mostrar(slideAtual + 1), 4500);
 
  mostrar(0);
}
 
 
// -----CONTADOR DE FOTOS-----
let totalFotos = 0;
 
function tirarFoto() {
  totalFotos++;
  atualizarContador();
  exibirMensagem('msg-foto', 'Foto #' + totalFotos + ' capturada!', 'ok');
 
  const lente = document.getElementById('anim-lente');
  if (lente) {
    lente.classList.add('disparar');
    setTimeout(() => lente.classList.remove('disparar'), 200);
  }
}
 
function deletarFoto() {
  if (totalFotos <= 0) {
    exibirMensagem('msg-foto', 'Nenhuma foto para deletar.', 'erro');
    return;
  }
  totalFotos--;
  atualizarContador();
  exibirMensagem('msg-foto', 'Ultima foto deletada.', 'aviso');
}
 
function resetarFotos() {
  if (totalFotos === 0) {
    exibirMensagem('msg-foto', 'Nenhuma foto no rolo.', 'aviso');
    return;
  }
  const confirmou = confirm('Tem certeza?\nTodas as ' + totalFotos + ' fotos serao deletadas.');
  if (confirmou) {
    totalFotos = 0;
    atualizarContador();
    exibirMensagem('msg-foto', 'Rolo limpo com sucesso.', 'ok');
  }
}
 
function atualizarContador() {
  document.getElementById('total-fotos').textContent = totalFotos;
}
 
function exibirMensagem(id, texto, tipo) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = texto;
  el.className = 'msg-simples ' + tipo;
  setTimeout(() => { el.textContent = ''; el.className = 'msg-simples'; }, 2000);
}
 
 
// -----VALIDAÇÃO DE LOGIN-----
function validarLogin(event) {
  event.preventDefault();
 
  const usuario = document.getElementById('login-usuario');
  const senha   = document.getElementById('login-senha');
  const erroU   = document.getElementById('erro-usuario');
  const erroS   = document.getElementById('erro-senha');
  const msg     = document.getElementById('msg-login');
 
  erroU.textContent = '';
  erroS.textContent = '';
  usuario.classList.remove('invalido', 'valido');
  senha.classList.remove('invalido', 'valido');
 
  let tudo_ok = true;
 
  if (usuario.value.trim() === '') {
    erroU.textContent = 'Campo obrigatorio.';
    usuario.classList.add('invalido');
    tudo_ok = false;
  } else {
    usuario.classList.add('valido');
  }
 
  if (senha.value.trim() === '') {
    erroS.textContent = 'Campo obrigatorio.';
    senha.classList.add('invalido');
    tudo_ok = false;
  } else if (senha.value.length < 4) {
    erroS.textContent = 'Minimo 4 caracteres.';
    senha.classList.add('invalido');
    tudo_ok = false;
  } else {
    senha.classList.add('valido');
  }
 
  if (!tudo_ok) return false;
 
  if (usuario.value.trim() === 'admin' && senha.value === 'jovi2026') {
    msg.textContent = 'Acesso autorizado! Bem-vindo ao painel VisionTech.';
    msg.className = 'retorno-login ok';
  } 
  else if (usuario.value.trim() === 'danilo' && senha.value === 'dan123') {
    msg.textContent = 'Acesso autorizado! Bem-vindo ao painel VisionTech.';
    msg.className = 'retorno-login ok';
  } 
  else if (usuario.value.trim() === 'arthur' && senha.value === 'tutu123') {
    msg.textContent = 'Acesso autorizado! Bem-vindo ao painel VisionTech.';
    msg.className = 'retorno-login ok';
  } 
  else if (usuario.value.trim() === 'gabriel' && senha.value === 'gab123') {
    msg.textContent = 'Acesso autorizado! Bem-vindo ao painel VisionTech.';
    msg.className = 'retorno-login ok';
  } 
  else if (usuario.value.trim() === 'bia' && senha.value === 'bia123') {
    msg.textContent = 'Acesso autorizado! Bem-vindo ao painel VisionTech.';
    msg.className = 'retorno-login ok';
  } 
  else if (usuario.value.trim() === 'nataly' && senha.value === 'nat123') {
    msg.textContent = 'Acesso autorizado! Bem-vindo ao painel VisionTech.';
    msg.className = 'retorno-login ok';
  } 
  else if (usuario.value.trim() === 'kaique' && senha.value === 'kai123') {
    msg.textContent = 'Acesso autorizado! Bem-vindo ao painel VisionTech.';
    msg.className = 'retorno-login ok';
  } 
  else if (usuario.value.trim() === 'giullia' && senha.value === 'jub123') {
    msg.textContent = 'Acesso autorizado! Bem-vindo ao painel VisionTech.';
    msg.className = 'retorno-login ok';
  } 

  else {
    msg.textContent = 'Usuario ou senha incorretos.';
    msg.className = 'retorno-login erro';
    usuario.classList.replace('valido', 'invalido');
    senha.classList.replace('valido', 'invalido');
  }
 
  return false;
}
 
function validarCampo(id) {
  const campo = document.getElementById('login-' + id);
  const erro  = document.getElementById('erro-' + id);
  if (!campo || !erro) return;
 
  if (campo.value.trim() === '') {
    erro.textContent = 'Campo obrigatorio.';
    campo.classList.remove('valido');
    campo.classList.add('invalido');
  } else if (id === 'senha' && campo.value.length < 4) {
    erro.textContent = 'Minimo 4 caracteres.';
    campo.classList.remove('valido');
    campo.classList.add('invalido');
  } else {
    erro.textContent = '';
    campo.classList.remove('invalido');
    campo.classList.add('valido');
  }
}
 
 
// -----ALERTAS E PROMPTS-----
function notificar(tipo) {
  const resultado = document.getElementById('resultado-notif');
 
  if (tipo === 'status') {
    alert('Status da Camera Jovi\n\nConectada\nFirmware: v2.0.1\nSinal: Excelente\nTemperatura: 34C');
    if (resultado) resultado.textContent = 'Status verificado com sucesso.';
 
  } else if (tipo === 'update') {
    const confirmou = confirm('Jovi Firmware v2.1.0 disponivel.\n\nDeseja instalar agora?\n(A camera sera reiniciada)');
    if (resultado) resultado.textContent = confirmou
      ? 'Update iniciado! Camera reiniciando...'
      : 'Update adiado.';
 
  } else if (tipo === 'reset') {
    const confirmou = confirm('ATENCAO!\n\nIsso vai resetar TODAS as configuracoes para o padrao de fabrica.\n\nTem certeza?');
    if (resultado) resultado.textContent = confirmou
      ? 'Camera resetada com sucesso.'
      : 'Reset cancelado.';
 
  } else if (tipo === 'serial') {
    const prefixo = 'JOVI';
    const ano     = new Date().getFullYear();
    const num     = Math.floor(Math.random() * 90000) + 10000;
    const serial  = prefixo + '-' + ano + '-' + num;
    prompt('Numero Serial da sua Jovi ProCam:', serial);
    if (resultado) resultado.textContent = 'Serial gerado: ' + serial;
  }
}
 
 
//-----MANIPULAÇÃO DE STRINGS-----
function analisarTexto() {
  const valor = document.getElementById('campo-texto').value;
  const vazio = '—';
 
  document.getElementById('txt-maiusculo').textContent  = valor ? valor.toUpperCase()                       : vazio;
  document.getElementById('txt-minusculo').textContent  = valor ? valor.toLowerCase()                       : vazio;
  document.getElementById('txt-tamanho').textContent    = valor ? valor.length + ' caracteres'              : vazio;
  document.getElementById('txt-invertido').textContent  = valor ? valor.split('').reverse().join('')         : vazio;
  document.getElementById('txt-tem-jovi').textContent   = valor
    ? (valor.toLowerCase().includes('jovi') ? 'Sim' : 'Nao')
    : vazio;
}
 
 
//-----RELÓGIO EM TEMPO REAL-----
function atualizarRelogio() {
  const el = document.getElementById('relogio');
  if (!el) return;
  const agora = new Date();
  const hh = String(agora.getHours()).padStart(2, '0');
  const mm = String(agora.getMinutes()).padStart(2, '0');
  const ss = String(agora.getSeconds()).padStart(2, '0');
  el.textContent = hh + ':' + mm + ':' + ss;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();
 
 
// -----LISTA DINÂMICA (DOM)-----
function adicionarItem() {
  const campo = document.getElementById('campo-lista');
  const lista  = document.getElementById('lista-cenas');
  const texto  = campo.value.trim();
 
  if (!texto) {
    alert('Digite algo para adicionar!');
    return;
  }
 
  const li = document.createElement('li');
  li.className = 'item-lista';
  li.innerHTML =
    '<span>' + texto + '</span>' +
    '<button onclick="this.parentElement.remove()">x</button>';
 
  lista.appendChild(li);
  campo.value = '';
  campo.focus();
}
 
document.addEventListener('DOMContentLoaded', function () {
  const campoLista = document.getElementById('campo-lista');
  if (campoLista) {
    campoLista.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') adicionarItem();
    });
  }
 
  iniciarSlideshow();
 
  const nome = prompt('Bem-vindo a VisionTech!\n\nQual e o seu nome?');
  if (nome && nome.trim() !== '') {
    const saudacao = document.getElementById('saudacao');
    if (saudacao) saudacao.textContent = 'Ola, ' + nome.trim() + '!';
  }
});
 
 
//-----HOVER NOS CARDS-----
function destacarCard(el) {
  el.style.borderColor = '#60a5fa';
  el.style.transform   = 'translateY(-6px) scale(1.02)';
}
 
function removerDestaque(el) {
  el.style.borderColor = '';
  el.style.transform   = '';
}