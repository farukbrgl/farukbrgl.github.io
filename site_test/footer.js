const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <!-- <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }

    .social-row {
      font-size: 20px;
    }

    .social-row li a {
      margin: 0 15px;
    }
  </style> -->

  <!-- Altlık çizgisi -->
  <div class="bot_line"></div>

  <!-- Altlık -->
  <div class="footer">

  <!-- Altlık yazısı -->
  <p style="font-family:CooperHewittLight; font-size: 16px;">Kasım 2020 | Ömer Faruk Birgül</p>

  <!-- Lisans -->
  <p><a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons Lisansı" style="border-width:0" src="../icons/CC_by-sa_80x15.png" /></a></p>

  </div>
  
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
