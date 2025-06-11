import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Mail, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#5271FF] text-[#FAF8EB]">
      {/* Hero Section - No header, just centered title */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#5271FF] px-4 text-center">
        <div className="container relative z-10 mx-auto max-w-5xl space-y-8">
          <h2 className="text-2xl font-bold">Zyrocopy</h2>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We Craft <span className="text-[#FAF8EB]">Digital Experiences</span> That Drive Results
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-[#FAF8EB]/80 sm:text-2xl">
            Elevate your brand with data-driven marketing strategies that convert visitors into loyal customers.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact">
              <Button size="lg" className="bg-[#FAF8EB] text-[#5271FF] hover:bg-[#FAF8EB]/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <Button variant="ghost" size="sm" className="text-[#FAF8EB] hover:bg-[#FAF8EB]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 animate-bounce"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
            <span className="sr-only">Scroll Down</span>
          </Button>
        </div>
      </section>

      {/* CTA Section with Calendar */}
      <section id="contact" className="bg-[#3D5AE3] py-16 text-[#FAF8EB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Marketing?</h2>
              <p className="mb-6 text-lg text-[#FAF8EB]/80">
                Schedule a free 30-minute consultation with our marketing experts to discuss your goals and how we can
                help you achieve them.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#calendar">
                  <Button size="lg" className="bg-[#FAF8EB] text-[#5271FF] hover:bg-[#FAF8EB]/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Meeting
                  </Button>
                </a>
              </div>
            </div>
            <div id="calendar" className="w-full max-w-md rounded-lg bg-[#5271FF] p-6 shadow-lg">
              <h3 className="mb-4 text-center text-xl font-bold text-[#FAF8EB]">Book Your Free Consultation</h3>
              <div className="mb-4 overflow-hidden rounded border border-[#2A47D9] bg-white">
                <iframe
                  src="https://calendly.com/manav-zyrocopy/30min"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                ></iframe>
              </div>
              <p className="mb-4 text-center text-sm text-[#FAF8EB]/80">
                Select a date and time that works for you, and we'll be in touch to confirm your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5271FF] py-12 text-[#FAF8EB]/80">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold text-[#FAF8EB]">Zyrocopy</h3>
              <p className="mb-4">
                Transforming digital marketing with data-driven strategies that deliver real results.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#FAF8EB]/80 hover:text-[#FAF8EB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-[#FAF8EB]/80 hover:text-[#FAF8EB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-[#FAF8EB]">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0 text-[#FAF8EB]" />
                  <span>Remote</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 h-5 w-5 shrink-0 text-[#FAF8EB]" />
                  <span>manav@zyrocopy.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-[#2A47D9] pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Zyrocopy. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="#" className="text-sm hover:text-[#FAF8EB]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-[#FAF8EB]">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-[#FAF8EB]">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
