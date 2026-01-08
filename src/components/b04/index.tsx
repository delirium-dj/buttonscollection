import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './layout.css?inline'; // Note the '?inline'

export const B04 = component$(() => {
  // This styles the component and scopes it automatically
  useStylesScoped$(styles);

  return (
    
<div class="flex items-center justify-center">

<div class="svg-wrapper ">
  <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
    <rect class="shape" height="60" width="320" />
    <div class="text">Hover Me</div>
  </svg>
</div>
</div>


  );
});