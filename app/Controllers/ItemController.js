import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";



function drawItems() {
    let template = ""
    Object.values(ProxyState.items)
        .forEach(item => {
            console.log("Item Name", item)
            template += /*html*/`
                <div>
                    <img src="${item.img}" class="item-image">
                    <button onclick="app.ItemController.selectItem('${item.Itemname}')">
                        ${item.Itemname}
                    </button>
                </div>
            `
        })
    // use template
    document.getElementById('items-sold').innerHTML = template
}




export class ItemController {
    constructor() {
        ProxyState.on('items', drawItems)
        drawItems()
    }

    selectItem(itemName) {
        console.log("itemName got selected", itemName)
        //TODO   work coins
        document.getElementById('Coin    ').innerHTML = template

    }

}