import { LitElement, html, css } from "lit";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "My card";
    this.name = "Charli XCX";
    this.description =
      "Tune into Charli XCX's newest album! It's been named the Album of the Summer!";
    this.image =
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png";
  }

  static get styles() {
    return css`
      div {
        justify-content: center;
      }

      #card-container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 100px;
        padding: 10px;
        margin: 40px;
        justify-content: center;
        position: relative;
      }

      .card {
        box-sizing: border-box;
        border-radius: 15px;
        background-color: #e1ebfc;
        padding: 40px 40px 40px 40px;
        border: 2px solid #4284f5;
        width: 600px;
        length: 800px;
        justify-content: center;
        margin: 30px;

        width: 100%;
        max-width: 800px;
        height: auto;
      }

      .picture {
        width: 400px;
        height: 50%;
      }

      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .abtn {
        background-color: #4284f5;
        color: white;
        font-size: 20px;
        border-radius: 10%;
        padding: 16px 40px 16px 40px;
        margin: 4px 4px 4px 4px;
        border: 2px solid #2361a8;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin: auto;
      }

      .smallb {
        background-color: #c9ffde;
        color: #64a37c;
        font-size: 10px;
        border-radius: 10%;
        padding: 4px 14px 4px 14px;
        margin: 4px 4px 4px 4px;
        border: 1px solid #64a37c;
        margin-left: auto;
        margin-right: auto;

        display: none;
        margin: auto;
      }

      @media screen and (min-width: 500px) and (max-width: 800px) {
        .smallb {
          display: inline-block;
          margin: auto;
        }
      }

      .txt {
        background-color: #fcfcfc;
        color: black;
        font-size: 20px;
        border-radius: 0%;
        padding: 16px 16px 16px 16px;
        margin: 4px 4px 4px 4px;
        box-shadow: 0px 0px 0px;
        border: 1px solid black;

        display: block;
        margin: auto;

        top: 50%;
        text-align: center;
      }

      .cardtitle {
        background-color: #fcfcfc;
        color: black;
        font-size: 20px;
        border-radius: 0%;
        padding: 16px 16px 16px 16px;
        margin: 4px 4px 4px 4px;
        box-shadow: 0px 0px 0px;
        border: 1px solid black;

        display: block;
        margin: auto;

        top: 50%;
        text-align: center;
      }

      @media (max-width: 500px) {
        .card {
          width: 90%;
          padding: 10px;
        }

        .card img {
          width: 100px;
          height: 100px;
        }

        .card txt {
          font-size: 20px;
        }

        .card txt {
          font-size: 14px;
        }
      }

      a {
        text-decoration: none;
      }

      .abtn:hover,
      .smallb:hover {
        background-color: #36bfbb;
      }

      .format {
        margin: 40px;
      }

      .fancy {
        background-color: orange;
        color: cyan;
        border: 40px tomato;
        margin: 100px;
      }

      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`<div id="card-container">
      <div class="card">
        <img class= "picture" src= ${this.image} alt = "Charli XCX brat cover"
        style: width=400px;>
        <br />
        <h1 class="cardtitle">${this.name}</h1>
        <br />
        <p class="txt">${this.description}</p>
        <br />
        <a href="https://open.spotify.com/album/2lIZef4lzdvZkiiCzvPKj7">
          <button class="abtn"><b>Listen Now!</b></button>
        </a>

        <br />
        <br />
        <a href="hax.psu.edu">
          <button class="smallb">details</button>
        </a>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      name: { type: String },
      title: { type: String },
      description: { type: String },
      image: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
