import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './layout.scss?inline'; // Note the '?inline'

export const B05 = component$(() => {
  // This styles the component and scopes it automatically
  useStylesScoped$(styles);

  return (
    
<div class="flex items-center justify-center">
<section class="buttons">
  <button class="draw">Hover Me</button>
</section>


</div>


  );
});