"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { toast } from "sonner"

export default function DemoRequest() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	})

	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Form validation
		if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
			toast.error("Lütfen tüm alanları doldurunuz.")
			setIsSubmitting(false)
			return
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(formData.email)) {
			toast.error("Lütfen geçerli bir email adresi giriniz.")
			setIsSubmitting(false)
			return
		}

		// Phone validation (Turkish phone number)
		const phoneRegex = /^(\+90|0)?[0-9]{10}$/
		if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
			toast.error("Lütfen geçerli bir telefon numarası giriniz.")
			setIsSubmitting(false)
			return
		}

		// Simulate API call
		setTimeout(async () => {
			console.log("Demo request submit ilk yer:", formData)
			try {
				const response = await fetch("/api/sendEmail", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				})
				if (!response.ok) {
					toast.error(
						"Demo talebiniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
					)
					setIsSubmitting(false)
					return
				}
				toast.success(
					"Demo talebiniz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.",
				)
			} catch (error) {
				toast.error(
					"Demo talebiniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
				)
				setIsSubmitting(false)
				return
			}

			// Reset form
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
			})

			setIsSubmitting(false)
		}, 1000)
	}

	return (
		<section id="demo-request" className="py-24 bg-gradient-to-b from-white to-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
							Demo Talep Et
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Workyon un gücünü deneyimleyin! Kişiselleştirilmiş demo için bilgilerinizi paylaşın,
							uzmanlarımız sizinle iletişime geçsin.
						</p>
					</div>

					<div className="max-w-2xl mx-auto">
						<Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
							<CardHeader className="text-center pb-6">
								<CardTitle className="text-xl">Ücretsiz Demo Talep Formu</CardTitle>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="firstName">İsim *</Label>
											<Input
												id="firstName"
												name="firstName"
												type="text"
												value={formData.firstName}
												onChange={handleInputChange}
												placeholder="İsminizi giriniz"
												className="h-12"
												required
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="lastName">Soyisim *</Label>
											<Input
												id="lastName"
												name="lastName"
												type="text"
												value={formData.lastName}
												onChange={handleInputChange}
												placeholder="Soyisminizi giriniz"
												className="h-12"
												required
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="email">E-posta Adresi *</Label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="ornek@sirket.com"
											className="h-12"
											required
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="phone">Telefon Numarası *</Label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											value={formData.phone}
											onChange={handleInputChange}
											placeholder="0532 123 45 67"
											className="h-12"
											required
										/>
									</div>

									<div className="pt-4">
										<Button
											type="submit"
											className="w-full h-12 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white transition-all duration-200"
											disabled={isSubmitting}
										>
											{isSubmitting ? (
												<div className="flex items-center gap-2">
													<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
													Gönderiliyor...
												</div>
											) : (
												"Demo Talep Et"
											)}
										</Button>
									</div>

									<p className="text-sm text-gray-500 text-center pt-2">
										* Zorunlu alanlar. Bilgileriniz güvenli şekilde saklanır ve sadece demo amacıyla
										kullanılır.
									</p>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
