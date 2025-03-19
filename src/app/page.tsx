import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Share2,
  BarChart3,
  Calendar,
  Clock,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Share2 className="h-6 w-6 text-primary" />
            <span>SocialSync</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary">
              Log in
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Manage All Your Social Media From One Place
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Schedule, publish, and analyze your content across multiple social platforms with our powerful
                    all-in-one tool.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Dashboard preview"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Platforms */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Connect With All Your Favorite Platforms
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Seamlessly integrate with the most popular social media networks
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 py-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-blue-100 p-4">
                    <Facebook className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="font-medium">Facebook</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-blue-50 p-4">
                    <Twitter className="h-8 w-8 text-blue-400" />
                  </div>
                  <span className="font-medium">Twitter</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-pink-50 p-4">
                    <Instagram className="h-8 w-8 text-pink-600" />
                  </div>
                  <span className="font-medium">Instagram</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-blue-50 p-4">
                    <Linkedin className="h-8 w-8 text-blue-700" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-red-50 p-4">
                    <Youtube className="h-8 w-8 text-red-600" />
                  </div>
                  <span className="font-medium">YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need to Succeed on Social Media
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform provides all the tools you need to create, schedule, and analyze your social media
                  content
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Content Calendar</h3>
                <p className="text-center text-muted-foreground">
                  Plan and visualize your content strategy with our intuitive drag-and-drop calendar interface
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Auto-Scheduling</h3>
                <p className="text-center text-muted-foreground">
                  Our AI determines the best times to post for maximum engagement based on your audience
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="text-center text-muted-foreground">
                  Track performance metrics across all platforms with comprehensive reports and insights
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Powerful, and Efficient</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get started in minutes and transform your social media workflow
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Connect Your Accounts</h3>
                <p className="text-center text-muted-foreground">
                  Link all your social media profiles with just a few clicks
                </p>
                {/* Arrow for desktop */}
                <div className="absolute right-0 top-12 hidden lg:block">
                  <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M99.0607 10.0607C99.6464 9.47487 99.6464 8.52513 99.0607 7.93934L89.5147 -1.60658C88.9289 -2.19237 87.9792 -2.19237 87.3934 -1.60658C86.8076 -1.02079 86.8076 -0.0710427 87.3934 0.514749L95.8787 9L87.3934 17.4853C86.8076 18.0711 86.8076 19.0208 87.3934 19.6066C87.9792 20.1924 88.9289 20.1924 89.5147 19.6066L99.0607 10.0607ZM-1.31134e-07 10.5L98 10.5L98 9.5L1.31134e-07 9.5L-1.31134e-07 10.5Z"
                      fill="currentColor"
                      className="text-muted-foreground/40"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Create & Schedule Content</h3>
                <p className="text-center text-muted-foreground">
                  Design posts and schedule them to publish automatically at optimal times
                </p>
                {/* Arrow for desktop */}
                <div className="absolute right-0 top-12 hidden lg:block">
                  <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M99.0607 10.0607C99.6464 9.47487 99.6464 8.52513 99.0607 7.93934L89.5147 -1.60658C88.9289 -2.19237 87.9792 -2.19237 87.3934 -1.60658C86.8076 -1.02079 86.8076 -0.0710427 87.3934 0.514749L95.8787 9L87.3934 17.4853C86.8076 18.0711 86.8076 19.0208 87.3934 19.6066C87.9792 20.1924 88.9289 20.1924 89.5147 19.6066L99.0607 10.0607ZM-1.31134e-07 10.5L98 10.5L98 9.5L1.31134e-07 9.5L-1.31134e-07 10.5Z"
                      fill="currentColor"
                      className="text-muted-foreground/40"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Analyze & Optimize</h3>
                <p className="text-center text-muted-foreground">
                  Track performance and refine your strategy based on detailed analytics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Choose the Perfect Plan for Your Needs
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Flexible options to support businesses of all sizes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">Perfect for individuals and small businesses</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>5 social profiles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>30 scheduled posts per profile</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>1 user</span>
                  </li>
                </ul>
                <Button className="mt-8">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-muted-foreground">Ideal for growing businesses</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>15 social profiles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited scheduled posts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>3 users</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Content calendar</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="default">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For large organizations and agencies</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited social profiles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited scheduled posts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom analytics & reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>API access</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Thousands of Marketers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See what our customers have to say about our platform
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    width={50}
                    height={50}
                    alt="User avatar"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-4 border-primary pl-4 italic">
                  "This platform has completely transformed our social media strategy. We've seen a 40% increase in
                  engagement since we started using it."
                </blockquote>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    width={50}
                    height={50}
                    alt="User avatar"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Social Media Manager</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-4 border-primary pl-4 italic">
                  "The analytics dashboard gives us insights we never had before. Now we can make data-driven decisions
                  about our content strategy."
                </blockquote>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    width={50}
                    height={50}
                    alt="User avatar"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-4 border-primary pl-4 italic">
                  "As a small business owner, I don't have time to manage multiple social accounts. This tool has saved
                  me hours every week while improving our online presence."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Transform Your Social Media Strategy?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join thousands of marketers who are saving time and improving results with our platform
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Start Your Free Trial
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2 font-bold">
            <Share2 className="h-6 w-6 text-primary" />
            <span>SocialSync</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} SocialSync. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

