const nomes = [
	"Engenharia de Transportes",
	"Tecnologia em Análise e Desenvolvimento de Sistemas",
	"Tecnologia em Saneamento Ambiental",
	"Faculdade de Ciência Aplicadas",
	"Administração"
]

const images = [
	"https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/061-engenharia_da_mobilidade.jpg?quality=100&strip=info",
	"https://www.senairs.org.br/sites/default/files/styles/2x1_lg/public/paragraphs--image-top/istock-843016322-analise-desenvolvimento-de-sistemas_0.jpg?itok=32Y4P6_G",
	"https://www.ft.unicamp.br/sites/default/files/tca.jpg",
	"https://www.fca.unicamp.br/portal/images/logos/FCA_marca_140.png",
	"https://www.fca.unicamp.br/portal/images/GRADUACAO/240/adm.jpg"
]

var current = 0;

function mod(n, m){
    return ((n%m)+m)%m;
}

function movePrevious(){
    const frame2 = document.getElementById("frame2");
    current = mod(current - 1, nomes.length);
    frame2.style.backgroundImage="url('"+images[current]+"')";
    frame2.innerHTML = nomes[current];
}

function moveNext(){
    const frame2 = document.getElementById("frame2");
    current = mod(current + 1, nomes.length);
    frame2.style.backgroundImage="url('"+images[current]+"')";
    frame2.innerHTML = nomes[current];
}