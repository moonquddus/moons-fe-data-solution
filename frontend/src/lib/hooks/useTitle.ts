import { useEffect } from "react"

// I'll be real... I just wanted to make a custom hook for the sake of it hahahaha
function useTitle(title: string, dependencies: React.DependencyList = []): void {
  useEffect(() => {
    document.title = `${title} | Calliper`
  }, dependencies)
}
export default useTitle
