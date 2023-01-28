import type { Ref } from 'vue'

const NAVBAR_HEIGHT = 60 as const

export function useLayoutScrolled(input?: Ref<boolean>) {
  const isScrolled = input ?? ref(false)

  if (process.client) {
    useEventListener(
      window,
      'scroll',
      () => {
        if (window.scrollY >= NAVBAR_HEIGHT) {
          isScrolled.value = true
        } else {
          isScrolled.value = false
        }
      },
      {
        capture: false,
        passive: true,
      }
    )
  }

  return isScrolled
}
