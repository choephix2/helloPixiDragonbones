declare module '@pixi/display' {
  export { Container } from 'pixi.js';
}

declare module '@pixi/math' {
  export { Matrix, Point } from 'pixi.js';
}

declare module '@pixi/loaders' {
  export { Loader, AppLoaderPlugin } from 'pixi.js';
}

declare module '@pixi/core' {
  export { Renderer } from 'pixi.js';
  export const BatchRenderer:any
}

declare module '@pixi/app' {
  export { Application } from 'pixi.js';
}

// for nested namespaces
declare module '@pixi/interaction' {
  import { interaction } from 'pixi.js';
  export import InteractionManager = interaction.InteractionManager;
}