

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.34076d03.js","_app/immutable/chunks/scheduler.2853e907.js","_app/immutable/chunks/index.47f9d4e0.js","_app/immutable/chunks/stores.edc0047f.js","_app/immutable/chunks/singletons.5f52bb9d.js"];
export const stylesheets = [];
export const fonts = [];
