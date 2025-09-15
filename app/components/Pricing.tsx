import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export default function Pricing() {
	const plans = [
		{
			name: "Başlangıç",
			price: "Ücretsiz",
			description: "Küçük takımlar için ideal",
			features: [
				"5 kullanıcıya kadar",
				"Temel mood takip",
				"Görev Yönetimi (Temel)",
				"Temel Anketler",
			],
			popular: false,
		},
		{
			name: "Profesyonel",
			price: "₺99/ay",
			description: "Büyüyen ekipler için",
			features: [
				"50 kullanıcıya kadar",
				"Mood Tracker + gelişmiş anketler",
				"Görev Yönetimi + ödül/takdir modülü",
				"Raporlama & Analiz panelleri",
				"API entegrasyonu",
				"E-posta desteği",
			],
			popular: true,
		},
		{
			name: "Enterprise",
			price: "Özel Fiyat",
			description: "Büyük organizasyonlar için",
			features: [
				"Sınırsız kullanıcı",
				"Özel entegrasyonlar",
				"Adanmış müşteri temsilcisi",
				"On-premise kurulum",
				"SLA garantisi",
			],
			popular: false,
		},
	]

	return (
		<section id="pricing" className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<Badge className="mb-4 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 border-blue-200">
						💰 Fiyatlandırma
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
						Her Boyutta Ekip İçin Uygun Plan
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						İhtiyacınıza göre esnek fiyatlandırma seçenekleri. 14 gün ücretsiz deneme, kredi kartı
						gerekmez.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{plans.map((plan, index) => (
						<Card
							key={index}
							className={`relative ${
								plan.popular
									? "border-orange-300 shadow-lg scale-105 bg-gradient-to-br from-orange-50 to-blue-50"
									: "border-blue-200"
							}`}
						>
							{plan.popular && (
								<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
									En Popüler
								</Badge>
							)}
							<CardHeader className="text-center">
								<CardTitle className="text-xl">{plan.name}</CardTitle>
								<div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
									{plan.price}
								</div>
								<CardDescription>{plan.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 mb-6">
									{plan.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex-shrink-0"></div>
											<span className="text-sm">{feature}</span>
										</li>
									))}
								</ul>
								<Button
									className={`w-full ${
										plan.popular
											? "bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white border-0"
											: "border-blue-300 text-blue-600 hover:bg-blue-50"
									}`}
									variant={plan.popular ? "default" : "outline"}
								>
									{plan.name === "Enterprise" ? "İletişime Geç" : "Başla"}
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
