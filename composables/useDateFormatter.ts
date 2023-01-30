import { parseISO, format } from 'date-fns'

export function useDateFormatter() {
  // const app = useAppConfig()

  function formatDate(date?: string) {
    if (!date) return
    return format(parseISO(date), 'MMMM dd, yyyy')
  }

  return { formatDate }
}
