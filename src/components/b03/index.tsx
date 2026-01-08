import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './layout.css?inline'; // Note the '?inline'

export const B03 = component$(() => {
  // This styles the component and scopes it automatically
  useStylesScoped$(styles);

  return (
    <div class="bg-black flex items-center justify-center p-4 mx-auto">
    <div class="btn">
      <span class=""></span>Hover Me
    </div>
    </div>
  );
});