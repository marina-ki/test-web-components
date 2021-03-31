export default class PopupElement extends HTMLElement {
  constructor() {
    super();
    // テンプレートの読み込み
    const template = document.querySelector('template#popup-tmpl').content.cloneNode(true)

    // #popup を取り出してクリックしたら閉じる様にイベントを追加
    const popup = template.querySelector('#popup');
    popup.addEventListener('click', function() {
      popup.style.display = 'none';
    })

    // ダイアログを開くボタンはDOMで作る
    const button = document.createElement('button')
    button.innerHTML = 'OPEN'
    button.addEventListener('click', function() {
      popup.style.display = 'block';
    });

    // テンプレートとボタンをShadow DOMに追加する
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template);
    shadowRoot.appendChild(button);
  }
}