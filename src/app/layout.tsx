import ClientConfig from "@/components/client-config"
import Router from "@/components/router"
import React from "react"
import ReactDOM from "react-dom/client"
import "@/app/global.css"
import { ScrollArea } from "@/components/ui/scroll-area"
import Grain from "@/components/grain"
import { ThemeProvider } from "@/components/theme-provider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<div className="bg-black">
				<ScrollArea className="bg-background w-screen h-screen rounded-md overflow-hidden">
					<Router />
				</ScrollArea>
			</div>

			<Grain />
			<ClientConfig />
		</ThemeProvider>
	</React.StrictMode>
)
