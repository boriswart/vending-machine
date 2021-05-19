import { ProxyState } from "../AppState.js"
import Coin from "../Models/Coin.js"


function drawCoin() {
    let template = ""
    let coin = ProxyState.coin
    template += /*html*/`
    <div>
    <img src="${coin.img}" class="coin-image" onclick="app.CoinController.clickCoin()">
    </div>
    `
    console.log("Coin Name", coin.name)
    document.getElementById('coin-slot').innerHTML = template
}

export class CoinController {
    constructor() {
        ProxyState.on('coin', drawCoin)
        drawCoin()
    }

    clickCoin() {
        console.log("detected coin click")
        //CoinService.purchase(itemName)
    }
}
