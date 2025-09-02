// /pages/api/sendMail.ts
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

type Data = {
	message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" })

	console.log("Request body: cansu", req.body) // Log the request body to see what is being received

	const { firstName, lastName, email, phone } = req.body

	if (!firstName || !lastName || !email || !phone) {
		return res.status(400).json({ message: "Eksik bilgi!" })
	}

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "xxxx@gmail.com", // Gönderen Gmail adresiniz
			pass: "uygulama-şifresi-buraya", // Gmail uygulama şifresi
		},
	})

	const mailOptions = {
		from: "xxxx@gmail.com",
		to: "xxxx@gmail.com", // Hedef mail adresi
		subject: "Yeni Demo Talebi",
		text: `
      Yeni bir demo talebi geldi:
      Ad: ${firstName}
      Soyad: ${lastName}
      E-posta: ${email}
      Telefon: ${phone}
    `,
	}

	try {
		await transporter.sendMail(mailOptions)
		res.status(200).json({ message: "E-posta gönderildi!" })
	} catch (error) {
		res.status(500).json({ message: "E-posta gönderilemedi!" })
	}
}
