const nomes = [
	"Engenharia de Telecomunicações",
	"Faculdade de Tecnologia",
	"Unicamp",
	"Engenharia Ambiental",
	"Sistemas de Informação"
]

const images = [
	"https://www.puc-campinas.edu.br/wp-content/uploads/2016/03/foto-Engenharia-de-Telecomunicacoes.jpg",
	"https://lh3.googleusercontent.com/proxy/XNwGZilBWaAij940LvkZuSD1AbLy_FTAAIi4nGAeRwsZAF7ZZiMLubL6EVoOqMoEfaZp5LsvQh95cBH6sE5l8iw1R3uUV-e9jm28PkoY_1NXQuYo6Tzu66TOTJNLd-iSL3HcMS6m_fQu32WU5Kf7xqR3d6wKyk_aEUSfkr0iS1MphMSlfilfeqhm00BuFuhw7g",
	"https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2019/12/comvest-divulga-a-relaccca7acc83o-candidatos-vagas-por-curso-do-enem-unicamp-2020.jpg",
	"http://www.aej.org.br/blog/wp-content/uploads/2019/06/post-engenharia-ambiental-730x410.jpg",
	"https://i0.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/sistema-de-informacao.jpg?fit=720%2C405&ssl=1"
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