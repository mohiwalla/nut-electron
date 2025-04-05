import { useEffect } from "react"

export default function ClientConfig() {
	useEffect(() => {
		window.addEventListener("mousedown", preventTextDrag, { passive: true })
		window.addEventListener("dragstart", preventDrags)
		window.addEventListener("keydown", handleNavigation)

		return (): void => {
			window.removeEventListener("mousedown", preventTextDrag)
			window.removeEventListener("dragstart", preventDrags)
			window.removeEventListener("keydown", handleNavigation)
		}
	})

	return <></>
}

function preventTextDrag(): void {
	window?.getSelection()?.empty()
	window?.getSelection()?.removeAllRanges()
}

function preventDrags(e: DragEvent): void {
	e.preventDefault()
	e.stopPropagation()
}

function handleNavigation(e: KeyboardEvent) {
	if (e.key === "ArrowRight" && e.altKey) {
		history.forward()
	}

	if (e.key === "ArrowLeft" && e.altKey) {
		history.back()
	}
}
