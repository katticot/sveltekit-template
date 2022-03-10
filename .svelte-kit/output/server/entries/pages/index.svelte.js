import { c as create_ssr_component } from "../../chunks/index-2dc61825.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-3xl bg-blue-400 font-bold underline"}">Welcome to SvelteKit</h1>
<p class="${"bg-blue "}">Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>

<label for="${"my-modal"}" class="${"btn modal-button"}">open modal</label>


<input type="${"checkbox"}" id="${"my-modal"}" class="${"modal-toggle"}">
<div class="${"modal"}"><div class="${"modal-box"}"><h3 class="${"font-bold text-lg"}">Congratulations random Interner user!</h3>
    <p class="${"py-4"}">You&#39;ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="${"modal-action"}"><label for="${"my-modal"}" class="${"btn"}">Yay!</label></div></div></div>`;
});
export { Routes as default };
