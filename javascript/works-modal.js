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
            case "白玻フスセ様 Skebリクエスト":
                modalCon1.textContent = "オリジナルキャライラストを1枚、成人向け差分を多数描かせていただきました。";
                modalCon2.textContent = "(2026)";
                modalCon3.textContent = "";
                break;
            case "hana様 Skebリクエスト":
                modalCon1.textContent = "オリジナルキャライラストを1枚、成人向け差分を多数描かせていただきました。";
                modalCon2.textContent = "(2026)";
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