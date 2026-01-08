import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./layout.css?inline"; // Note the '?inline'

export const B03 = component$(() => {
  // This styles the component and scopes it automatically
  useStylesScoped$(styles);

  return (
    <div class="mx-auto flex items-center justify-center bg-black p-4">
      <div class="btn">
        <span class=""></span>Hover Me
      </div>
    </div>
  );
});
