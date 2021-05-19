import { CoinController } from "./Controllers/CoinController.js"
import { ItemController } from "./Controllers/ItemController.js"
// import ItemService from "./Services/ItemService.js"

import { ProxyState } from "./AppState.js";


class App {
  // insertCoinController = new InsertCoinControler()
  ItemController = new ItemController()
}

console.log(ProxyState)


window["app"] = new App();




