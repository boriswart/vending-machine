import { ProxyState } from "../AppState"
import Coin from "../Models/Coin"

function drawCoin() {
    let template = ""
    let coin = ProxyState.coin
    template += /*html*/`
    <div>
    <img src="${coin.img}" class="coin-image" onclick="app.CoinController.selectCoin('${coin.name}')">
    </div>
    `
    console.log("Coin Name", coin.name)
    document.getElementById('coin-slot').innerHTML = template
}
