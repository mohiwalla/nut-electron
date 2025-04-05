import { motion } from "framer-motion"

export default function Main({
	className,
	children,
}: {
	children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className="bg-muted">
			<motion.main
				className={className}
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					ease: "backInOut",
					duration: 0.3,
				}}
			>
				{children}
			</motion.main>
		</div>
	)
}
