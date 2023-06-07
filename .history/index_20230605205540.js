const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');

const app = {
    currentIndex: 0,
    isPlaying: false,
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
            console.log(song);
            return `
            <div class="song">
          <div class="thumb" style="background-image: url('${song.image}')">
          </div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>`
        });
        $('.playlist').innerHTML = htmls.join('\n');
    },
    defineProperties: function(){
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvent: function(){
        const _this = this
        const cdWidth = cd.offsetWidth;

        //Xử lý phóng to thu nhỏ CD
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        //Xử lý khi click play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
                }
                //khi song được play
                audio.onplay = function(){
                    _this.isPlaying = true;
                    player.classList.add('playing')
                }
                //khi song được pause
                audio.onpause = function(){
                    _this.isPlaying = false;
                    player.classList.remove('playing')
                }
                //Khi tiến độ bài hát thay đổi
                audio.ontimeupdate = function(){
                    if(audio.duration){
                        const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                        progress.value = progressPercent;
                    }
                }
    },
    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    start: function(){
        //Định nghĩa các thuộc tính cho Object
        this.defineProperties();
        //Lắng nghe, xử lý các sự kiện
        this.handleEvent();
        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();
        //render playlist
        this.render();
    }
}
app.start();