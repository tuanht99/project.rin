
// Header start
const ImgHeader = document.querySelector('.img-header');

let time;
let img = ["./public/image/backgrou1.jpg", "./public/image/backgrou2.jpg", "./public/image/backgrou3.jpg"];
let textIntro = ['<h1 data-caption-animate="fadeInLeft" data-caption-delay="0" class="fadeInLeft animated mg-top">Mobile App Development</h1><p class="text-width-large fadeInRight animated" data-caption-animate="fadeInRight" data-caption-delay="100">Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.</p><button type="button" class="btn btn-primary">Get in touch</button>', '<h1 data-caption-animate="fadeInLeft" data-caption-delay="0" class="fadeInLeft animated mg-top">Experienced Team</h1><p class="text-width-large fadeInRight animated" data-caption-animate="fadeInRight" data-caption-delay="100">We are a team of qualified software developers, aimed at creating unique and powerful tools for your business & everyday life.</p><button type="button" class="btn btn-primary">Get in touch</button>', '<h1 data-caption-animate="fadeInLeft" data-caption-delay="0" class="fadeInLeft animated mg-top">Award-Winning Software</h1><p class="text-width-large fadeInRight animated" data-caption-animate="fadeInRight" data-caption-delay="100">The software solutions developed by our company have been numerously awarded for usability and innovative features.</p><button type="button" class="btn btn-primary">Get in touch</button>'];
let pre;
let txtPre;
let i = 0;

time = setTimeout(function indexImg() {
    if (i < img.length) {
        pre = img[i];
        txtPre = textIntro[i];
        i++;
    }
    else {
        i = 0;
        pre = img[i];
        txtPre = textIntro[i];
        i++;
    }
    console.log(pre);
    ImgHeader.style.backgroundImage = `url('${pre}')`;
    ImgHeader.innerHTML = txtPre;

    time = setTimeout(indexImg, 3000);
}, 3000);

const boxSearch = document.querySelector('.btn-search');
boxSearch.addEventListener('click', function () {
    document.getElementById('id-search').innerHTML = '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">';
})
//header end