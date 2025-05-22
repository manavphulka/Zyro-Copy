import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Star,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section - No header, just centered title */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
        <div className="container relative z-10 mx-auto max-w-5xl space-y-8">
          <h2 className="text-2xl font-bold">Zyrocopy</h2>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We Craft <span className="text-white">Digital Experiences</span> That Drive Results
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300 sm:text-2xl">
            Elevate your brand with data-driven marketing strategies that convert visitors into loyal customers.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
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

      {/* What We Do Section */}
      <section id="services" className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What We Do</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              We specialize in creating engaging digital marketing solutions that help businesses grow and thrive.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden border-none bg-black shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">Pop Forms</h3>
                <p className="text-gray-300">
                  Capture leads with engaging, high-converting pop-up forms strategically designed to appear at the
                  perfect moment.
                </p>
                <ul className="mt-4 space-y-2 text-white">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>Exit-intent technology</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>A/B testing capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>Mobile-optimized designs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-black shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">Email Flows & Campaigns</h3>
                <p className="text-gray-300">
                  Craft personalized email journeys that nurture leads and drive conversions with targeted messaging.
                </p>
                <ul className="mt-4 space-y-2 text-white">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>Personalized content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>Behavior-triggered emails</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>Performance analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-black shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">Email Automation</h3>
                <p className="text-gray-300">
                  Set up intelligent automation workflows that deliver the right message at the right time, every time.
                </p>
                <ul className="mt-4 space-y-2 text-white">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>Drip campaign setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>Customer journey mapping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-white" />
                    <span>Segmentation strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Client Testimonials</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="testimonial1" className="w-full">
              <TabsList className="mx-auto grid w-full max-w-md grid-cols-3 bg-zinc-900">
                <TabsTrigger value="testimonial1" className="data-[state=active]:bg-zinc-800">
                  Acme Inc
                </TabsTrigger>
                <TabsTrigger value="testimonial2" className="data-[state=active]:bg-zinc-800">
                  TechFlow
                </TabsTrigger>
                <TabsTrigger value="testimonial3" className="data-[state=active]:bg-zinc-800">
                  GreenLife
                </TabsTrigger>
              </TabsList>
              <TabsContent value="testimonial1" className="mt-8">
                <Card className="border-none bg-zinc-900 shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-white text-white" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="mb-8 text-center text-lg italic text-gray-300">
                      "Zyro-Copy transformed our email marketing strategy. Their pop forms increased our lead generation
                      by 150%, and their email automation workflows have saved us countless hours while boosting our
                      conversion rates."
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Kenny"
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Kenny</p>
                        <p className="text-sm text-white">English Coach</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="testimonial2" className="mt-8">
                <Card className="border-none bg-zinc-900 shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-white text-white" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="mb-8 text-center text-lg italic text-gray-300">
                      "Working with Zyro-Copy has been a game-changer for our tech startup. Their email campaigns
                      consistently deliver a 30% open rate and have helped us establish a strong relationship with our
                      user base."
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Michael Chen"
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Michael Chen</p>
                        <p className="text-sm text-white">CEO, TechFlow</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="testimonial3" className="mt-8">
                <Card className="border-none bg-zinc-900 shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-white text-white" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="mb-8 text-center text-lg italic text-gray-300">
                      "The team at Zyro-Copy understands our eco-friendly brand values and has created email content
                      that resonates deeply with our audience. Our customer engagement has never been higher."
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Emma Rodriguez"
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Emma Rodriguez</p>
                        <p className="text-sm text-white">Founder, GreenLife</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <div className="mt-8 text-center">
              <a href="/zyrocopy-case-study.txt" download="ZyroCopy-Case-Study.pdf">
                <Button className="bg-white text-black hover:bg-gray-200">
                  <Download className="mr-2 h-4 w-4" />
                  Download Case Studies
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              We bring a unique approach to digital marketing that sets us apart from the competition.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-900 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Data-Driven Approach</h3>
              <p className="text-gray-300">
                We make decisions based on real data, not guesswork. Every strategy is backed by analytics and
                continuously optimized.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-900 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Conversion-Focused</h3>
              <p className="text-gray-300">
                We don't just drive traffic—we create strategies that convert visitors into leads and leads into loyal
                customers.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-900 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Dedicated Support</h3>
              <p className="text-gray-300">
                Our team is always available to answer questions, provide insights, and help you navigate your marketing
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Calendar */}
      <section id="contact" className="bg-zinc-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Marketing?</h2>
              <p className="mb-6 text-lg text-gray-300">
                Schedule a free 30-minute consultation with our marketing experts to discuss your goals and how we can
                help you achieve them.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#calendar">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Meeting
                  </Button>
                </a>
              </div>
            </div>
            <div id="calendar" className="w-full max-w-md rounded-lg bg-black p-6 shadow-lg">
              <h3 className="mb-4 text-center text-xl font-bold text-white">Book Your Free Consultation</h3>
              <div className="mb-4 overflow-hidden rounded border border-zinc-800 bg-white">
                <iframe
                  src="https://calendly.com/manav-zyrocopy/30min"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                ></iframe>
              </div>
              <p className="mb-4 text-center text-sm text-gray-300">
                Select a date and time that works for you, and we'll be in touch to confirm your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Zyrocopy</h3>
              <p className="mb-4">
                Transforming digital marketing with data-driven strategies that deliver real results.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white">
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
                <Link href="#" className="text-gray-300 hover:text-white">
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
              <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0 text-white" />
                  <span>Remote</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 h-5 w-5 shrink-0 text-white" />
                  <span>manav@zyrocopy.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Zyrocopy. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="#" className="text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
