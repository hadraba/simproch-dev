

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7182359e.js","_app/immutable/chunks/scheduler.2853e907.js","_app/immutable/chunks/index.47f9d4e0.js","_app/immutable/chunks/stores.edc0047f.js","_app/immutable/chunks/singletons.5f52bb9d.js"];
export const stylesheets = ["_app/immutable/assets/0.b2d2ea0e.css"];
export const fonts = [];
