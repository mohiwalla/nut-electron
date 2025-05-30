import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { GalleryVerticalEnd, Loader, MailWarning } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc"
import { name } from "@/lib/config"
import { Link } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema } from "@/schemas/login"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { useState } from "react"

export default function LoginPage() {
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<{
		credentials: boolean
		google: boolean
	}>({ credentials: false, google: false })

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	async function onSubmit(values: z.infer<typeof LoginSchema>) {
		setLoading((prev) => ({
			...prev,
			credentials: true,
		}))

		const req = await fetch("/api/auth/check-credentials", {
			method: "POST",
			body: JSON.stringify(values),
		})

		if (!req.ok) {
			setLoading((prev) => ({
				...prev,
				credentials: false,
			}))

			return setError("Something went wrong.")
		}

		const res = await req.json()

		if (res.ok) {
			// return signIn("client-login", { ...values })
		}

		setLoading((prev) => ({
			...prev,
			credentials: false,
		}))

		setError(res.text)
	}

	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
			<div className="flex sm:max-w-sm w-full flex-col gap-6">
				<span className="flex items-center gap-2 self-center font-medium">
					<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
						<GalleryVerticalEnd className="size-4" />
					</div>
					{name}
				</span>

				<div className={cn("flex flex-col gap-6")}>
					<Card>
						<CardHeader className="text-center">
							<CardTitle className="text-xl">
								Welcome back
							</CardTitle>

							<CardDescription>
								Login with your Google account
							</CardDescription>
						</CardHeader>

						<CardContent>
							<fieldset
								disabled={Object.values(loading).some(Boolean)}
								className="grid gap-4"
							>
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
									>
										<div className="grid gap-6">
											<div className="flex flex-col gap-4">
												<Button
													type="button"
													variant="outline"
													className="w-full"
													onClick={() => {
														setLoading((prev) => ({
															...prev,
															google: true,
														}))
													}}
												>
													{loading.google ? (
														<Loader className="animate-spin" />
													) : (
														<FcGoogle />
													)}
													Login with Google
												</Button>
											</div>

											<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
												<span className="relative z-10 px-2 bg-card text-muted-foreground">
													OR continue with
												</span>
											</div>

											<div className="grid gap-6">
												<FormField
													control={form.control}
													name="email"
													render={({ field }) => (
														<FormItem>
															<FormLabel>
																Email
															</FormLabel>
															<FormControl>
																<Input
																	autoFocus
																	spellCheck={
																		false
																	}
																	placeholder="Email address"
																	{...field}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>

												<FormField
													control={form.control}
													name="password"
													render={({ field }) => (
														<FormItem>
															<FormLabel>
																Password
															</FormLabel>

															<FormControl>
																<Input
																	placeholder="********"
																	type="password"
																	{...field}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>

												{error && (
													<div className="text-destructive flex gap-2 justify-center items-center text-sm -my-2">
														<MailWarning className="w-4" />
														{error}
													</div>
												)}

												<Button
													type="submit"
													className="w-full"
												>
													{loading.credentials && (
														<Loader className="animate-spin" />
													)}
													{loading.credentials
														? "Logging in..."
														: "Login"}
												</Button>
											</div>
										</div>
									</form>
								</Form>
							</fieldset>
						</CardContent>
					</Card>

					<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
						By clicking continue, you agree to our{" "}
						<Link to="/terms">Terms of Service</Link> and{" "}
						<Link to="/privacy">Privacy Policy</Link>.
					</div>
				</div>
			</div>
		</div>
	)
}
