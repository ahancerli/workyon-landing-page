"use client"

import { useState } from "react"

interface ImageWithFallbackProps {
	src: string
	alt: string
	className?: string
	fallback?: string
}

export function ImageWithFallback({ src, alt, className, fallback }: ImageWithFallbackProps) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	if (error && fallback) {
		return <img src={fallback} alt={alt} className={className} />
	}

	if (error) {
		return (
			<div className={`${className} bg-muted flex items-center justify-center`}>
				<span className="text-muted-foreground text-sm">Görsel yüklenemedi</span>
			</div>
		)
	}

	return (
		<>
			{loading && <div className={`${className} bg-muted animate-pulse`}></div>}
			<img
				src={src}
				alt={alt}
				className={`${className} ${loading ? "hidden" : ""}`}
				onLoad={() => setLoading(false)}
				onError={() => {
					setError(true)
					setLoading(false)
				}}
			/>
		</>
	)
}
