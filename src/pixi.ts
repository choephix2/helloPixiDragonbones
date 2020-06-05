export * from '@pixi/constants';
export * from '@pixi/math';
export * from '@pixi/runner';
export * from '@pixi/settings';
export * from '@pixi/ticker';
import * as utils from '@pixi/utils';
export { utils };
export * from '@pixi/display';
export * from '@pixi/core';
export { Loader } from '@pixi/loaders';
export * from '@pixi/sprite';
export * from '@pixi/app';

// import 'pixi-spine';

// Renderer plugins
import { Renderer } from '@pixi/core';
import { BatchRenderer } from '@pixi/core';
Renderer.registerPlugin('batch', BatchRenderer);

// Application plugins
import { Application } from '@pixi/app';
import { AppLoaderPlugin } from '@pixi/loaders';
Application.registerPlugin( AppLoaderPlugin as any );

import { TickerPlugin } from '@pixi/ticker';
Application.registerPlugin( TickerPlugin );

// window.PIXI = global.PIXI = PIXI;
// import "pixi-spine";
// export * from 'pixi-spine';