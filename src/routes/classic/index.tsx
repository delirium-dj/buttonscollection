import { component$ } from "@builder.io/qwik";
import { ButCol } from "../../components/menu/menu";
import { B01 } from "../../components/b01";
import { B02 } from "../../components/b02";
import { B03 } from "../../components/b03";
import { B04 } from "../../components/b04";
import { B05 } from "../../components/b05";
import { B06 } from "../../components/b06";
import { B07 } from "../../components/b07";
import { B08 } from "../../components/b08";
import { B09 } from "../../components/b09";
import { B10 } from "../../components/b10";

export default component$(() => {
  return (
    <>
      <ButCol />
      <main class="flex w-full flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-4">
        <B05 />
        <B06 />
        <B07 />
        <B08 />
        <B09 />
        <B10 />
        <B01 />
        <B02 />
        <B03 />
        <B04 />
      </main>
    </>
  );
});
