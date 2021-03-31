// カスタム要素の実体であるUserAgentElementクラスをHTMLElementを継承して実装する
export default class UserAgentElement extends HTMLElement {
  constructor() {
    super(); //クラスのコンストラクタでは必ずsuper()を実行する

    //表示要素をshadow DOMで実装する
    const shadowRoot = this.attachShadow({ mode: 'open' }); //this.attachShadowでshadowRootを作って、それをRootとしてDOMを構築
    const ua = navigator.userAgent;
    shadowRoot.innerHTML = ua;
  }
}

