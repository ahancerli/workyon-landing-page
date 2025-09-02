import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export default function Hero() {
	const handleSmoothScroll = (targetId: string) => {
		const element = document.getElementById(targetId)
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			})
		}
	}

	return (
		<section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-4xl mx-auto">
					<Badge className="mb-4 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 border-blue-200">
						✨ Çalışan Wellness ve Productivite Platformu
					</Badge>

					<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
						Geleceğin işini <br />
						bugünden yaşa
					</h1>

					<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
						Workyon ile ekibinizin mood unu takip edin, görevleri planlayın, başarıları
						ödüllendirin. Jira entegrasyonu ile mevcut iş akışınızı bozmadan çalışan wellness ını
						artırın.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
						<Button
							size="lg"
							className="px-8 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white border-0"
						>
							Ücretsiz Başlayın
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="px-8 border-blue-300 text-blue-600 hover:bg-blue-50"
							onClick={() => handleSmoothScroll("demo")}
						>
							Demo İzle
						</Button>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
								4
							</div>
							<div className="text-sm text-muted-foreground">Ana Modül</div>
						</div>
						<div>
							<div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
								%95
							</div>
							<div className="text-sm text-muted-foreground">Kullanıcı Memnuniyeti</div>
						</div>
						<div>
							<div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
								24/7
							</div>
							<div className="text-sm text-muted-foreground">Mood Takip</div>
						</div>
						<div>
							<div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
								∞
							</div>
							<div className="text-sm text-muted-foreground">Sınırsız Görev</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
