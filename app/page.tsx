import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import JiraIntegration from "./components/JiraIntegration"
import Demo from "./components/Demo"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import DemoRequest from "./components/DemoRequest"
import { Toaster } from "./components/ui/sonner"

export default function HomePage() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Features />
				<JiraIntegration />
				<Demo />
				<Pricing />
				<DemoRequest />
			</main>
			<Footer />
			<Toaster />
		</>
	)
}
