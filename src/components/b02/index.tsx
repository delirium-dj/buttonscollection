import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './layout.css?inline'; // Note the '?inline'

export const B02 = component$(() => {
  // This styles the component and scopes it automatically
  useStylesScoped$(styles);

  return (
    <div class="flex items-center justify-center p-4">
    <div class="block">
      <span class="noselect text-white">Button</span>
    </div>
    </div>
  );
});