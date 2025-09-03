import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Nodemailer Node.js ister
export const runtime = "nodejs"

// Basit health-check
export async function GET() {
	return NextResponse.json({ message: "Sayfadasın" })
}

// Formdan: email, firstName, lastName, phone bekler
export async function POST(req: Request) {
	console.log("API emailSend çağrıldı", req)
	try {
		const { email, firstName, lastName, phone } = await req.json()

		// Çok basit doğrulama
		if (!email || !firstName || !lastName || !phone) {
			return NextResponse.json(
				{ ok: false, error: "Gerekli alanlar: email, firstName, lastName, phone" },
				{ status: 400 },
			)
		}

		// --- DİKKAT: Burayı kendi SMTP bilgilerinizle değiştirin ---
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465, //
			secure: true, // 465 ise true
			auth: {
				user: "workyonn@gmail.com", //
				pass: "owewmzdhilliesls",
			},
		})

		const info = await transporter.sendMail({
			from: "Site Demo Bildirim <no-reply@workyon.com>",
			to: "workyonn@gmail.com", // kendine veya sabit bir adrese
			replyTo: email,
			subject: `Form bildirimi: ${firstName} ${lastName}`,
			text: `Gönderen: ${firstName} ${lastName}\nE-posta: ${email}\nTelefon: ${phone}`,
			html: `
        <div style="font-family:Arial,sans-serif">
          <h2>Yeni Demo Talebi</h2>
          <p><strong>Ad:</strong> ${firstName}</p>
          <p><strong>Soyad:</strong> ${lastName}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
        </div>
      `,
		})

		return NextResponse.json({ ok: true, messageId: info.messageId })
	} catch (err: unknown) {
		const errorMessage = err instanceof Error ? err.message : "Bilinmeyen hata"
		console.error("Email gönderme hatası:", errorMessage)
		return NextResponse.json(
			{ ok: false, error: (err as Error)?.message || "Bilinmeyen hata" },
			{ status: 500 },
		)
	}
}
