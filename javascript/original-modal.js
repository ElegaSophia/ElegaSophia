const galleryItems = document.querySelectorAll('.gallery-img');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

const modalCon1 = document.getElementById('modal-content1');
const modalCon2 = document.getElementById('modal-content2');
const modalCon3 = document.getElementById('modal-content3');

const modal = document.querySelector('.js-modal'); // layer要素に付与したjs-modalクラスを取得し変数に格納
const modalClose = document.querySelector('.js-close-button'); // クローズボタン要素に付与したjs-modal-buttonクラスを取得し、変数に格納

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

galleryItems.forEach(item => {
  item.addEventListener('click', async () => {
    console.log('clicked!');
        //クリックされた画像に対応する全体画像を取得
        const fullImgUrl = item.getAttribute('data-full') || item.src;
        //モーダルの画像タグに全体画像を設定
        modalImg.src = fullImgUrl;
        //クリックされた画像に対応するタイトルを取得
        const titleCon = item.getAttribute('alt') || "N/A";
        //モーダルのタイトルタグにタイトルを設定
        modalTitle.textContent = titleCon;
        switch(titleCon){
            case "もちもちばにー💝":
                modalCon1.textContent = "もちもちふわふわバニーの『まんさ』ちゃん";
                modalCon2.textContent = "FANBOXに成人向け差分あり (全体公開)";
                modalCon3.textContent = "▷https://elega.fanbox.cc/posts/12494108";
                break;
            case "旅人さん、海行きませんか？":
                modalCon1.textContent = "水着の『まんさ』ちゃん";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "旅人さん……♡":
                modalCon1.textContent = "ウェディングビキニの『まんさ』ちゃん";
                modalCon2.textContent = "FANBOXに成人向け差分あり";
                modalCon3.textContent = "▷https://elega.fanbox.cc/posts/12190586";
                break;
            case "白バニー":
                modalCon1.textContent = "白バニーうさぎちゃん";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "おにいちゃん、濡れちゃったね……💦":
                modalCon1.textContent = "雨の日濡れシャツの『りり』ちゃん";
                modalCon2.textContent = "FANBOXに成人向け差分あり";
                modalCon3.textContent = "▷https://elega.fanbox.cc/posts/12112126";
                break;
            case "狐バニー":
                modalCon1.textContent = "";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "やっちゃいました……🐾💦":
                modalCon1.textContent = "金ビキニ褐色ねこちゃん";
                modalCon2.textContent = "FANBOXに成人向け差分あり";
                modalCon3.textContent = "▷https://elega.fanbox.cc/posts/11933683";
                break;
            case "🩵🩷":
                modalCon1.textContent = "よそ（雪平夏葵さん）の代理ちゃんと冬雪ちゃん";
                modalCon2.textContent = "X (雪平夏葵さん)";
                modalCon3.textContent = "▷https://x.com/z27agxngf5";
                break;
            case "おにいちゃん、一緒にあそぼ〜":
                modalCon1.textContent = "スク水『りり』ちゃん";
                modalCon2.textContent = "FANBOXに成人向け差分あり";
                modalCon3.textContent = "▷https://elega.fanbox.cc/posts/11854405";
                break;
            case "似合ってますか……？":
                modalCon1.textContent = "メイド『める』ちゃん";
                modalCon2.textContent = "Pixivに成人向け差分あり";
                modalCon3.textContent = "▷https://www.pixiv.net/artworks/143386009";
                break;
            case "返してください……💦":
                modalCon1.textContent = "シスター狐の『まんさ』ちゃん";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "まんさちゃん♡":
                modalCon1.textContent = "シスター狐の『まんさ』ちゃん紹介";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "旅の先で":
                modalCon1.textContent = "ゲームのキャラ立ち絵風";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "あっためてあげよっか？":
                modalCon1.textContent = "雪の日わんこ『める』ちゃん";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "たべてくれますか……？💝":
                modalCon1.textContent = "バレンタイン26の『まんさ』ちゃん";
                modalCon2.textContent = "Pixivに成人向け差分あり";
                modalCon3.textContent = "▷https://www.pixiv.net/artworks/141176684";
                break;
            case "あーんしてね♡":
                modalCon1.textContent = "和メイドの『りり』ちゃん";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "猫りりちゃん":
                modalCon1.textContent = "アイコン風";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            case "迷える旅人さん……":
                modalCon1.textContent = "シスター狐の『まんさ』ちゃん";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
                break;
            default:
                modalCon1.textContent = "";
                modalCon2.textContent = "";
                modalCon3.textContent = "";
        }
        
        //モーダルを表示状態にする
        await sleep(500);
        modal.classList.add('is-open');
  });
});

// モーダルボタンをクリックしたときのイベントを登録
/*galleryItems.addEventListener('click', (e) => {
        
});
*/

//クローズボタンをクリックしたときのイベント登録
modalClose.addEventListener('click', () => { // xボタンをクリックしたときのイベントを登録
  modal.classList.remove('is-open'); 
  
  modalImg.src = null;
});