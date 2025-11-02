// 送信ボタンを押すとメールを送信するためのコード
const EMAILJS_PUBLIC_KEY = 'QIAZXPyfH0zjrDYe2';
const EMAILJS_SERVICE_ID = 'service_26mi73j';
const EMAILJS_TEMPLATE_ID = 'template_bg1h0cm';

 emailjs.init(EMAILJS_PUBLIC_KEY);

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // サーバーへのPOSTを止める

  emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
    .then(() => {
      alert('送信しました/Message sent/메시지가 전송됨/消息已发送');
      this.reset();
    })
    .catch((error) => {
      console.error('ERROR:', error);
      alert('送信に失敗/Failed to send/전송 실패/发送失败');
    });
});
// メールを送信するためのコードここまで

// 多言語の表示を可能にする・・英語/日本語/韓国語/中国語
function changeLanguage() {
  const lang = document.getElementById('language-select').value;
  const pageType = location.pathname.match(/(about|contact|index|service|works)/)[0];
  let path = '';
  if (lang === 'ja') path = `../html_ja/${pageType}-ja.html`;
  else if (lang === 'cn') path = `../html_cn/${pageType}-cn.html`;
  else if (lang === 'en') path = `../html_en/${pageType}-en.html`;
  else if (lang === 'ko') path = `../html_ko/${pageType}-ko.html`;
  window.location.href = path;
}


window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('language-select');
  if (!select) return;
  let lang = '';
  if (location.pathname.includes('html_ja')) lang = 'ja';
  else if (location.pathname.includes('html_cn')) lang = 'cn';
  else if (location.pathname.includes('html_en')) lang = 'en';
  else if (location.pathname.includes('html_ko')) lang = 'ko';
  if (lang) select.value = lang;
});
// 多言語の表示を可能にするここまで


// Worksにてカードを1つずつスライドインさせるためのコード
// window.addEventListener('DOMContentLoaded', () => {
//   const projects = document.querySelectorAll('.project, .item');
//   projects.forEach((el, i) => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(40px)';
//     setTimeout(() => {
//       el.style.transition = 'all 0.6s cubic-bezier(.68,-0.55,.27,1.55)';
//       el.style.opacity = '1';
//       el.style.transform = 'translateY(0)';
//     }, 300 + i * 300); // 1つずつ遅延
//   });
// });

// Aboutの自分の歴史を表示する画面にて
// 1つずつ表示させるためのギミック



