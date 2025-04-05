import Main from "@/components/animated-main"
import BackButton from "@/components/back-button"
import { email, name } from "@/lib/config"

export default function TermsPage() {
	return (
		<Main className="p-4">
			<div className="flex items-center gap-2 mb-6">
				<BackButton />
				<h1 className="font-bold">Terms & Conditions</h1>
			</div>

			<div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
				<p className="text-sm text-muted-foreground">
					Last Updated: 4th April 2025
				</p>

				<h2 className="mt-6 text-lg font-bold">1. Introduction</h2>

				<p className="mt-2 text-sm text-muted-foreground">
					Welcome to {name}! We are delighted to have you on board.
					These Terms & Conditions ("Terms") are designed to govern
					your use of our platform, website, mobile applications, and
					all associated services (collectively, the "Platform"). By
					accessing or using our Platform, you agree to be bound by
					these Terms. If you do not agree, please refrain from using
					our services.
				</p>

				<p className="mt-2 text-sm text-muted-foreground">
					Our Platform serves as a marketplace connecting clients and
					freelancers. Whether you are here to hire talent or offer
					your expertise, these Terms are intended to ensure a fair,
					safe, and legally enforceable relationship between all
					parties.
				</p>

				<h2 className="mt-6 text-lg font-bold">2. Definitions</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					For the purposes of these Terms, the following definitions
					apply:
				</p>

				<ul className="text-sm mt-2 text-muted-foreground pl-4">
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>Platform:</strong> The website, mobile
						applications, and any related services provided by{" "}
						{name}.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>User:</strong> Any person or entity accessing or
						using the Platform.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>Client:</strong> A User who seeks to hire
						services from a freelancer.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>Freelancer:</strong> A User who offers their
						skills and services on the Platform.
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						<strong>Agreement:</strong> Any binding contract or
						arrangement made between a Client and a Freelancer
						through our Platform.
					</li>
				</ul>

				<h2 className="mt-6 text-lg font-bold">3. Eligibility</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					You must be at least 18 years old and possess the legal
					capacity to enter into binding contracts. Access to the
					Platform is restricted to individuals who meet these
					eligibility criteria. In addition, we reserve the right to
					refuse service to anyone for any reason, including but not
					limited to violations of these Terms.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					4. Account Registration & Security
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					In order to use the Platform and access its features, you
					must register for an account. During registration, you are
					required to provide accurate and complete information. You
					are solely responsible for maintaining the confidentiality
					of your account credentials and any activities that occur
					under your account. Any unauthorized use of your account
					must be reported to us immediately.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					5. Services & Transactions
				</h2>
				<h3 className="mt-4 text-xl font-semibold">
					5.1 Client & Freelancer Responsibilities
				</h3>
				<p className="mt-2 text-sm text-muted-foreground">
					Clients are responsible for clearly outlining project
					requirements and providing all necessary information to
					enable Freelancers to complete their work. Freelancers, in
					turn, are expected to deliver services in a timely and
					professional manner. Both parties are required to uphold a
					high standard of professionalism and communicate openly
					throughout the project lifecycle.
				</p>

				<h3 className="mt-4 text-xl font-semibold">
					5.2 Payment Terms & Fees
				</h3>
				<p className="mt-2 text-sm text-muted-foreground">
					Payments on the Platform are processed via a secure payment
					gateway. Clients agree to pay for the services rendered by
					Freelancers in accordance with the terms agreed upon in the
					project Agreement. The Platform may charge a service fee on
					transactions processed through our system. Further details
					on fee structures and payment processing will be provided
					during the transaction flow.
				</p>

				<h3 className="mt-4 text-xl font-semibold">
					5.3 Dispute Resolution
				</h3>
				<p className="mt-2 text-sm text-muted-foreground">
					In the event of a disagreement between a Client and a
					Freelancer, both parties are encouraged to resolve the
					matter amicably through direct communication. If a
					resolution cannot be reached, {name} offers a mediation
					process to help settle disputes. Note that engaging in
					fraudulent or abusive behavior may result in account
					suspension or termination.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					6. Intellectual Property
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					All content available on the Platform, including text,
					graphics, logos, images, and software, is the property of{" "}
					{name} or its licensors and is protected by intellectual
					property laws. Unauthorized use, reproduction, or
					distribution of any content is strictly prohibited unless
					explicitly authorized by {name} in writing.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					7. User-Generated Content
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					Users may be allowed to submit, post, or display content on
					the Platform. You retain ownership of your content; however,
					by posting, you grant {name} a non-exclusive, royalty-free
					license to use, reproduce, and distribute your content in
					connection with the Platform.
					{name} reserves the right to remove or modify any content
					that violates these Terms or is deemed inappropriate.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					8. Confidentiality & Data Protection
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					We take the privacy and security of your information
					seriously. Our Privacy Policy explains how we collect, use,
					and protect your data. By using our Platform, you consent to
					the collection and use of your personal information as
					described in our Privacy Policy. You are also responsible
					for maintaining the confidentiality of any sensitive
					information shared through the Platform.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					9. Prohibited Conduct
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					Users are prohibited from engaging in any conduct that could
					harm the Platform or other Users. This includes, but is not
					limited to:
				</p>

				<ul className="text-sm mt-2 text-muted-foreground pl-4">
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Fraudulent or deceptive practices
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Harassment, abuse, or defamation of other Users
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Posting or transmitting harmful content, including
						viruses or malware
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Unauthorized access to or interference with the
						Platform&apos;s functionality
					</li>
					<li className="before:inline-block before:rounded-full before:bg-muted-foreground before:size-[5px] before:m-0.5 before:mr-1.5">
						Any activity that violates applicable laws or
						regulations
					</li>
				</ul>

				<h2 className="mt-6 text-lg font-bold">
					10. Termination & Suspension
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					{name} reserves the right to suspend or terminate your
					account and access to the Platform at any time for any
					reason, including violations of these Terms. Upon
					termination, all rights granted to you under these Terms
					will cease immediately, and you must discontinue all use of
					the Platform. Notwithstanding termination, any outstanding
					payment obligations or legal rights shall remain in full
					force and effect.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					11. Disclaimer of Warranties
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					The Platform is provided on an "as is" and "as available"
					basis.
					{name} makes no warranties, expressed or implied, regarding
					the reliability, availability, or accuracy of the Platform.
					We expressly disclaim any warranties of merchantability,
					fitness for a particular purpose, and non-infringement. Use
					of the Platform is entirely at your own risk.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					12. Limitation of Liability
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					In no event shall {name}, its affiliates, or its partners be
					liable for any indirect, incidental, consequential, or
					punitive damages arising out of your use of or inability to
					use the Platform, even if advised of the possibility of such
					damages. Our total liability, whether in contract, tort, or
					otherwise, shall not exceed the amount paid by you, if any,
					for accessing the Platform.
				</p>

				<h2 className="mt-6 text-lg font-bold">13. Indemnification</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					You agree to indemnify, defend, and hold harmless {name},
					its affiliates, and their respective officers, directors,
					employees, and agents from and against any claims,
					liabilities, damages, and expenses, including legal fees,
					arising from your use of the Platform, your violation of
					these Terms, or your infringement of any intellectual
					property or other rights.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					14. Modifications to the Terms
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					{name} reserves the right to modify these Terms at any time.
					When we make material changes, we will notify you by
					updating the "Last Updated" date at the top of this page
					and, in some cases, may provide additional notification.
					Your continued use of the Platform after such changes
					indicates your acceptance of the updated Terms.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					15. Governing Law & Dispute Resolution
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					These Terms shall be governed by and construed in accordance
					with the laws of the jurisdiction in which {name} operates.
					Any disputes arising out of or related to these Terms or the
					use of the Platform shall be subject to the exclusive
					jurisdiction of the courts in that jurisdiction.
				</p>

				<h2 className="mt-6 text-lg font-bold">16. Severability</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					If any provision of these Terms is found to be invalid or
					unenforceable by a court of competent jurisdiction, the
					remaining provisions will remain in full force and effect.
				</p>

				<h2 className="mt-6 text-lg font-bold">17. Entire Agreement</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					These Terms, along with our Privacy Policy and any other
					policies referenced herein, constitute the entire agreement
					between you and {name} regarding your use of the Platform
					and supersede any prior agreements, understandings, or
					representations.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					18. Contact Information
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					If you have any questions or concerns about these Terms or
					the operation of our Platform, please contact us at {email}.
					We are committed to addressing your inquiries and working
					towards a resolution that benefits all parties involved.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					19. Additional Provisions
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					We reserve the right to update, amend, or modify these Terms
					at our sole discretion. In addition, {name} may introduce
					additional terms or guidelines that further govern your use
					of specific features or sections of the Platform. Such terms
					shall be incorporated by reference into these Terms and
					shall be effective upon posting.
				</p>

				<p className="mt-6 text-sm text-muted-foreground">
					By continuing to use our Platform, you acknowledge that you
					have read, understood, and agreed to all the provisions
					outlined in these Terms & Conditions. We encourage you to
					review these Terms regarding updates or changes to ensure
					that you remain informed about the rules governing our
					Platform.
				</p>

				<h2 className="mt-6 text-lg font-bold">
					20. Acknowledgment & Acceptance
				</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					Your use of {name} signifies your acceptance of these Terms.
					If you do not agree with any part of these Terms, you must
					immediately cease using the Platform. Continued use
					constitutes ongoing agreement to abide by these Terms and
					any future modifications.
				</p>

				<h2 className="mt-6 text-lg font-bold">21. Final Words</h2>
				<p className="mt-2 text-sm text-muted-foreground">
					We designed these Terms & Conditions to protect both you and
					our community. As we continue to expand and evolve, we trust
					that you will join us in maintaining a respectful, secure,
					and innovative environment. Our goal is to empower
					connections, facilitate meaningful collaborations, and
					foster an ecosystem of trust. While these legal terms set
					the groundwork for our operations, our community is the
					heart and soul of {name}, and we are dedicated to ensuring
					that your experience is both productive and enjoyable.
				</p>

				<p className="mt-4 text-muted-foreground text-sm">
					Thank you for choosing {name} as your partner for growth,
					opportunity, and creative collaboration. We look forward to
					supporting your endeavors and contributing to your success.
				</p>

				<p className="mt-4 text-muted-foreground text-sm">
					Please take the time to review these Terms & Conditions
					carefully. Should any questions arise, or should you require
					clarification on any aspect of this document, do not
					hesitate to reach out. Your feedback is vital in helping us
					improve and serve you better.
				</p>

				<p className="mt-4 text-muted-foreground text-sm">
					This document is intended to be a comprehensive agreement
					between you and {name}. We reserve the right to enforce
					these rules to the fullest extent permitted by law and to
					update them as our services evolve. Let&apos;s build
					something epic together, responsibly and transparently.
				</p>

				<p className="mt-4 text-muted-foreground text-sm">
					In summary, by using our Platform, you are acknowledging and
					agreeing to abide by these Terms. Failure to do so may
					result in restricted access or termination of your account.
					We believe in open communication and encourage you to seek
					clarification if anything seems unclear. We&apos;re here to
					help, but we also expect you to take responsibility for your
					actions on our platform.
				</p>

				<p className="mt-4 text-muted-foreground text-sm">
					Welcome aboard, and let&apos;s get to work!
				</p>
			</div>
		</Main>
	)
}
