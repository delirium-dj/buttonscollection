import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./layout.scss?inline";

export const B07 = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="flex items-center justify-center p-4">
      <section class="buttons">
        <button class="btn-b07">Hover Me</button>
      </section>
    </div>
  );
});