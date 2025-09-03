"use client"

import { Button } from "./ui/button"
import Image from "next/image"

export default function Header() {
	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
		e.preventDefault()
		const element = document.getElementById(targetId)
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			})
		}
	}

	return (
		<header className="w-full border-b bg-white/80 backdrop-blur-sm fixed top-0 z-50">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<Image src="/assets/img/logo.png" alt="Workyon Logo" width={120} height={40} priority />
					<span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
						Workyon
					</span>
				</div>

				<nav className="hidden md:flex items-center space-x-8">
					<a
						href="#features"
						onClick={(e) => handleSmoothScroll(e, "features")}
						className="text-muted-foreground hover:text-blue-600 transition-colors cursor-pointer"
					>
						Özellikler
					</a>
					<a
						href="#jira-integration"
						onClick={(e) => handleSmoothScroll(e, "jira-integration")}
						className="text-muted-foreground hover:text-orange-500 transition-colors cursor-pointer"
					>
						Jira Entegrasyonu
					</a>
					<a
						href="#demo"
						onClick={(e) => handleSmoothScroll(e, "demo")}
						className="text-muted-foreground hover:text-blue-600 transition-colors cursor-pointer"
					>
						Demo
					</a>
					<a
						href="#pricing"
						onClick={(e) => handleSmoothScroll(e, "pricing")}
						className="text-muted-foreground hover:text-orange-500 transition-colors cursor-pointer"
					>
						Fiyatlandırma
					</a>
				</nav>

				<div className="flex items-center space-x-4">
					<Button variant="ghost" className="hover:text-blue-600">
						Giriş Yap
					</Button>
					<Button
						onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
							handleSmoothScroll(
								e as unknown as React.MouseEvent<HTMLAnchorElement>,
								"demo-request",
							)
						}
						className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white border-0"
					>
						Ücretsiz Dene
					</Button>
				</div>
			</div>
		</header>
	)
}
