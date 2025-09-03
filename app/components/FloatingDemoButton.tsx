"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { toast } from "sonner"

export default function FloatingDemoButton() {
	const [isOpen, setIsOpen] = useState(false)
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
			console.log("Demo request submitted:", formData)
			try {
				const response = await fetch("/api/emailSend", {
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
			toast.success(
				"Demo talebiniz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.",
			)

			// Reset form
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
			})

			setIsSubmitting(false)
			setIsOpen(false)
		}, 1000)
	}

	return (
		<>
			{/* Floating Action Button */}
			<motion.button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white p-4 rounded-full shadow-xl transition-all duration-300"
				whileHover={{ scale: 1.1, rotate: 5 }}
				whileTap={{ scale: 0.95 }}
				animate={{
					rotate: [0, 2, -2, 0],
					scale: [1, 1.05, 1],
				}}
				transition={{
					rotate: {
						duration: 2,
						repeat: Infinity,
						repeatType: "reverse",
					},
					scale: {
						duration: 2,
						repeat: Infinity,
						repeatType: "reverse",
					},
				}}
				aria-label="Demo Talep Et"
			>
				<MessageCircle size={24} />
			</motion.button>

			{/* Modal Overlay */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsOpen(false)}
							className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
						/>

						{/* Modal Content */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8, y: 50 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.8, y: 50 }}
							transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
							className="fixed inset-4 md:inset-8 lg:top-16 lg:bottom-16 lg:left-1/4 lg:right-1/4 z-50 max-h-[90vh] overflow-hidden"
						>
							<Card className="h-full shadow-2xl border-0 bg-white/95 backdrop-blur-md overflow-hidden">
								{/* Header */}
								<CardHeader className="bg-gradient-to-r from-blue-600 to-orange-500 text-white relative">
									<motion.button
										onClick={() => setIsOpen(false)}
										className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
										whileHover={{ scale: 1.1, rotate: 90 }}
										whileTap={{ scale: 0.9 }}
									>
										<X size={20} />
									</motion.button>
									<CardTitle className="text-center">
										<motion.div
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.2 }}
										>
											🚀 Demo Talep Et
										</motion.div>
									</CardTitle>
									<motion.p
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
										className="text-center text-white/90 mt-2"
									>
										Workyon un gücünü keşfedin! Hemen demo talebinde bulunun.
									</motion.p>
								</CardHeader>

								{/* Form Content */}
								<CardContent className="p-6 overflow-y-auto">
									<form onSubmit={handleSubmit} className="space-y-4">
										<motion.div
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.4 }}
											className="grid md:grid-cols-2 gap-4"
										>
											<div className="space-y-2">
												<Label htmlFor="firstName">İsim *</Label>
												<Input
													id="firstName"
													name="firstName"
													type="text"
													value={formData.firstName}
													onChange={handleInputChange}
													placeholder="İsminizi giriniz"
													className="h-11"
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
													className="h-11"
													required
												/>
											</div>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.5 }}
											className="space-y-2"
										>
											<Label htmlFor="email">E-posta Adresi *</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleInputChange}
												placeholder="ornek@sirket.com"
												className="h-11"
												required
											/>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.6 }}
											className="space-y-2"
										>
											<Label htmlFor="phone">Telefon Numarası *</Label>
											<Input
												id="phone"
												name="phone"
												type="tel"
												value={formData.phone}
												onChange={handleInputChange}
												placeholder="0532 123 45 67"
												className="h-11"
												required
											/>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.7 }}
											className="pt-4 space-y-4"
										>
											<Button
												type="submit"
												className="w-full h-12 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white transition-all duration-200"
												disabled={isSubmitting}
											>
												{isSubmitting ? (
													<motion.div
														className="flex items-center gap-2"
														animate={{ rotate: 360 }}
														transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
													>
														<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
														Gönderiliyor...
													</motion.div>
												) : (
													<div className="flex items-center gap-2">
														<Send size={18} />
														Demo Talep Et
													</div>
												)}
											</Button>

											<p className="text-sm text-gray-500 text-center">
												* Zorunlu alanlar. Bilgileriniz güvenli şekilde saklanır.
											</p>
										</motion.div>
									</form>
								</CardContent>
							</Card>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
