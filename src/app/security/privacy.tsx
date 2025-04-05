import Main from "@/components/animated-main"
import BackButton from "@/components/back-button"
import { email, name } from "@/lib/config"

export default function PrivacyPage() {
	return (
		<Main className="p-4">
			<div className="flex items-center gap-2 mb-6">
				<BackButton />
				<h1 className="font-bold">Privacy Policy</h1>
			</div>

			<div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
				<p className="text-sm text-muted-foreground">
					Last Updated: 4th April 2025
				</p>

				<h2 className="mt-6 text-lg font-bold">1. Introduction</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					Welcome to {name}! Your privacy is important to us. This
					Privacy Policy explains how we collect, use, and protect
					your personal information when you use our platform,
					website, mobile applications, and all associated services
					(collectively, the "Platform"). By accessing or using our
					Platform, you agree to the practices described in this
					policy.
				</p>
				<p className="mt-2 text-sm text-muted-foreground">
					If you do not agree with our practices, please discontinue
					your use of our Platform.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					2. Information We Collect
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					We collect various types of information in order to provide
					and improve our services:
				</p>
				<ul className="text-sm mt-2 text-muted-foreground pl-4">
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>Personal Information:</strong> Such as your
						name, email, phone number, and profile details.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>Payment Information:</strong> Billing details
						and transaction history (note: we do not store full
						payment card details).
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>Usage Data:</strong> IP address, browser type,
						device information, and how you interact with our
						Platform.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>Cookies & Tracking Data:</strong> Information
						collected via cookies and similar tracking technologies.
					</li>
				</ul>

				<h2 className="mt-6 text-lg font-bold">
					3. How We Use Your Information
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					We use your information to:
				</p>
				<ul className="text-sm mt-2 text-muted-foreground pl-4">
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Provide, maintain, and improve our Platform.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Facilitate transactions and process payments.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Communicate with you regarding updates, support, and
						promotions.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Ensure security and prevent fraud on our Platform.
					</li>
				</ul>

				<h2 className="mt-6 text-lg font-bold">
					4. Sharing Your Information
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					We do not sell or rent your personal information. We may
					share your information with:
				</p>
				<ul className="text-sm mt-2 text-muted-foreground pl-4">
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Service providers that assist in operating our Platform
						(e.g., payment processors, hosting providers).
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Law enforcement or regulatory authorities, if required
						by law.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Successors or assignees in connection with a merger,
						acquisition, or sale of all or part of our business.
					</li>
				</ul>

				<h2 className="mt-6 text-lg font-bold">5. Data Security</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					We implement industry-standard security measures to protect
					your information. However, no method of transmission over
					the internet is 100% secure. You are responsible for
					maintaining the security of your account credentials.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					6. Your Rights & Choices
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					You have the right to access, update, or delete your
					personal information. You can also opt-out of certain data
					collection practices by adjusting your account settings or
					contacting us.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					7. Cookies & Tracking Technologies
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					We use cookies and similar tracking technologies to improve
					your experience on our Platform. You can control or disable
					cookies through your browser settings. Note that disabling
					cookies may affect certain features of our Platform.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					8. Changes to This Privacy Policy
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					{name} reserves the right to modify this Privacy Policy at
					any time. When changes are made, we will update the "Last
					Updated" date at the top of this page. Your continued use of
					our Platform after changes have been made indicates your
					acceptance of the updated policy.
				</p>

				<h2 className="mt-6 text-lg font-bold">9. Contact Us</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					If you have any questions or concerns about this Privacy
					Policy or our data practices, please contact us at{" "}
					<a
						className="underline hover:no-underline underline-offset-4 cursor-pointer"
						target="_blank"
						href={`mailto:${email}`}
					>
						{email}
					</a>
					.
				</p>
			</div>
		</Main>
	)
}
