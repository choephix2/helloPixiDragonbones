import { BaseDemo } from "../demos/BaseDemo";
import dragonBones from "../lib/dragonBones";
import { Loader } from "pixi.js";

const SmartLoader = {
  loadOrGet( key:string ) {
    return new Promise( resolve => {
      if ( ! Loader.shared.resources[ key ] ) {
        Loader.shared.add( key ).load( (_,res) => resolve( res[ key ] ) )
      }
    } )
  }
}

export default SmartLoader