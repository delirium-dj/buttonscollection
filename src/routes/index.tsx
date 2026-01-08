import { component$ } from '@builder.io/qwik';
import { ButCol } from '../components/menu/menu';

export default component$(() => {
  return (
    <>
      <ButCol />
      <main class="h-96">
        <h1>Buttons collection</h1>
      </main>
    </>
  );
});