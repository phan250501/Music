const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    songs: [
        {
            name: 'Phía sau một cô gái',
            singer: 'Soobin Hoàng Sơn',
            path: './mp3/PHÍA SAU MỘT CÔ GÁI.mp3',
            image: './img/ps1cg.png'
        },
        {
            name: 'Có em',
            singer: 'Madihu ft Low G',
            path: './mp3/Có em.mp3',
            image: './img/coem.jpg'
        },
        {
            name: 'Ngồi nhìn em khóc',
            singer: 'Sáo',
            path: './mp3/Ngồi nhìn em khóc.mp3',
            image: './img/ngoinhinemkhoc.jpg'
        },
        {
            name: 'Có hay từ bao giờ',
            singer: 'NIEE',
            path: './mp3/Có hay từ bao giờ',
            image: './img/cohaytubaogio.jpg'
        }
    ],

    render: function(){
        const htmls = this.songs.map(song =>{
            return `
            <div class="song">
          <div class="thumb" style="background-image: url('${songs.image}')">
          </div>
          <div class="body">
            <h3 class="title">${songs.name}</h3>
            <p class="author">${songs.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>`
        });
        $('.playlist').innerHTML = htmls.join('\n');
    },
    start: function(){
        this.render();
    }
}
app.start();