import { BaseDemo } from "../demos/BaseDemo";
import dragonBones from "../lib/dragonBones";
import { Loader } from "pixi.js";

window.PIXI = PIXI;
import "../lib/pixi-spine";

export default class SpineBoyPro extends BaseDemo {
	public constructor() {
    super();

    const data = Loader.shared.resources["spine/raptor-pro.json"].spineData;
    const animation = new PIXI.spine.Spine( data );
    this.addChild(animation);
    
    if (animation.state.hasAnimation('run')) {
      animation.state.setAnimation(0, 'run', true);
      animation.state.timeScale = 0.1;
    }
    
		animation.y = 300.0;
  }
  
  public destroy( ...rest:any[] ) {
    super.destroy( ...rest )
  }
}
