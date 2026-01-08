import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './layout.css?inline'; // Note the '?inline'

export const B01 = component$(() => {
  // This styles the component and scopes it automatically
  useStylesScoped$(styles);

  return (
    <div class="bg-slate-300/30 flex items-center justify-center p-4">
    <div class="btn">
      <span class="noselect">Hover Me</span>
    </div>
    </div>
  );
});