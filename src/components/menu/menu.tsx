import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { isServer } from "@builder.io/qwik/build";

export const ButCol = component$(() => {
  // signals act like "reactive boxes" to store the menu's state
  const isMobileMenuOpen = useSignal(false);
  const expandedItem = useSignal<string | null>(null);

  useTask$(({ track }) => {
    const isOpen = track(() => isMobileMenuOpen.value);

    // If we are on the server, stop here.
    if (isServer) return;

    // Now it's safe to use document
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Buttons",
      href: "", // Parent link (optional)
      children: [
        { label: "CSS", href: "/css" },
        { label: "Tailwind", href: "/tailwind" },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav class="relative z-30 w-full bg-slate-900 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-8">
        <div class="flex h-16 items-center justify-between">
          {/* 1. LOGO SECTION */}
          <div class="z-50 flex-shrink-0 text-xl font-bold">
            Buttons <span class="text-blue-400">Collection</span>
          </div>

          {/* 2. DESKTOP MENU (Pure CSS Logic) */}
          <div class="hidden space-x-4 md:flex">
            {menuItems.map((item) => (
              <div key={item.label} class="group relative">
                <Link
                  href={item.href}
                  class="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-700"
                >
                  {item.label} {item.children && "▼"}
                </Link>
                {/* Desktop Dropdown: Handled by 'group-hover' classes, not JS */}
                {item.children && (
                  <div class="invisible absolute left-0 z-50 mt-2 w-48 rounded-md bg-white py-1 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href} // Now dynamic!
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3. MOBILE TOGGLE BUTTON */}
          <div class="z-50 flex items-center md:hidden">
            <button
              onClick$={() =>
                (isMobileMenuOpen.value = !isMobileMenuOpen.value)
              }
              class="inline-flex items-center justify-center rounded-md p-2 transition-all hover:bg-slate-700 focus:outline-none"
            >
              <div class="space-y-2">
                <span
                  class={`block h-0.5 w-8 bg-white transition-all duration-300 ${isMobileMenuOpen.value ? "translate-y-2.5 rotate-45" : ""}`}
                ></span>
                <span
                  class={`block h-0.5 w-8 bg-white transition-all duration-300 ${isMobileMenuOpen.value ? "opacity-0" : ""}`}
                ></span>
                <span
                  class={`block h-0.5 w-8 bg-white transition-all duration-300 ${isMobileMenuOpen.value ? "-translate-y-2.5 -rotate-45" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 4. FULL SCREEN MOBILE OVERLAY */}
      <div
        class={`fixed inset-0 z-40 transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen.value ? "visible opacity-100" : "pointer-events-none invisible opacity-0"} flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-md`}
      >
        <div class="w-full max-w-xs space-y-4 text-center">
          {menuItems.map((item) => (
            <div key={item.label} class="flex flex-col items-center">
              {item.children ? (
                <button
                  onClick$={() => {
                    expandedItem.value =
                      expandedItem.value === item.label ? null : item.label;
                  }}
                  class="flex items-center gap-2 text-3xl font-bold transition-colors hover:text-blue-400"
                >
                  {item.label}
                  <span
                    class={`text-xl transition-transform duration-300 ${expandedItem.value === item.label ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick$={() => (isMobileMenuOpen.value = false)}
                  class="text-3xl font-bold transition-colors hover:text-blue-400"
                >
                  {item.label}
                </Link>
              )}

              {/* Submenu with Accordion Animation */}
              {item.children && (
                <div
                  class={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItem.value === item.label ? "mt-4 max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div class="flex flex-col gap-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href} // Now dynamic!
                        onClick$={() => (isMobileMenuOpen.value = false)}
                        class="text-xl text-slate-400 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
});
