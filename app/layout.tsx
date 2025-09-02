import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Workyon - Geleceğin işini bugünden yaşa",
	description:
		"Jira entegrasyonu ile çalışan wellness'ını ve iş verimliliğini bir arada yönetin. Ekibinizin mood'unu takip edin, görevleri planlayın, başarıları ödüllendirin.",
	keywords: [
		"workyon",
		"çalışan wellness",
		"produktivite",
		"jira entegrasyonu",
		"mood takip",
		"görev yönetimi",
	],
	authors: [{ name: "Workyon Team" }],
	openGraph: {
		title: "Workyon - Geleceğin işini bugünden yaşa",
		description:
			"Jira entegrasyonu ile çalışan wellness'ını ve iş verimliliğini bir arada yönetin.",
		type: "website",
		locale: "tr_TR",
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="tr">
			<body className="min-h-screen">{children}</body>
		</html>
	)
}
