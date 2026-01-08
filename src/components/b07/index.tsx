import { component$ } from "@builder.io/qwik";
import "./layout.css?inline"; 

export const B07 = component$(() => {
  return (
    <div class="flex items-center justify-center p-4">
      <button class="btn-b07">
        Hover Me
      </button>
    </div>
  );
});