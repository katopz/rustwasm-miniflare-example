
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  
  await wasm_bindgen(wasm);
  return wasm_bindgen.fetch(event.request,{},event);
}
