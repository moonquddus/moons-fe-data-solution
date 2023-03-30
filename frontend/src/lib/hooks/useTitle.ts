import { useEffect } from "react"

function useTitle(title: string, dependencies: React.DependencyList = []): void {
  useEffect(() => {
    document.title = `${title} | Calliper`
  }, dependencies)
}
export default useTitle
