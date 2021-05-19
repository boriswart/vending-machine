import Item from "./Models/Item.js"
import Coin from "./Models/Coin.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  items = [new Item("chips", "../assets/img/chips.png", 1.75),
  new Item("soda", "../assets/img/diet-coke.png", 1.75)]
  coin = new Coin("quarter", 0.25, "../assets/img/quarter.png")
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})


