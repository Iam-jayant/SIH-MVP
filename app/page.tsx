import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Shield, QrCode, Sprout, FlaskConical, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-green-100 bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-7 w-7 text-green-600" />
              <h1 className="text-xl font-semibold text-green-800">HerbTrace</h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                Beta v1.0
              </Badge>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span>Verified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-balance mb-4">
              Blockchain Traceability for Ayurvedic Herbs
            </h2>
            <p className="text-lg text-green-600 text-balance mb-8">
              Track your herbs from farm to pharmacy. Ensuring authenticity and quality through transparent supply chain
              management.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8 py-6 border-y border-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">2,847</div>
                <div className="text-sm text-green-600">Herbs Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">156</div>
                <div className="text-sm text-green-600">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">23</div>
                <div className="text-sm text-green-600">Manufacturers</div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/consumer">
                  <QrCode className="mr-2 h-4 w-4" />
                  Verify Product
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                asChild
              >
                <Link href="/farmer">Join as Farmer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-2 text-green-800">Currently Tracked Herbs</h3>
          <p className="text-center text-green-600 mb-12">Live data from our blockchain network</p>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-green-100 hover:shadow-md transition-shadow">
              <div className="h-32 bg-gradient-to-br from-yellow-100 to-orange-100 relative overflow-hidden">
                <img
                  src="/turmeric-root-golden-yellow-ayurvedic-herb.jpg"
                  alt="Turmeric"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-green-600 text-white text-xs">Active: 847</Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-green-800">Turmeric</CardTitle>
                <CardDescription className="text-sm text-green-600">Karnataka, Tamil Nadu</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-100 hover:shadow-md transition-shadow">
              <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <img
                  src="/ashwagandha-root-ayurvedic-adaptogen-herb.jpg"
                  alt="Ashwagandha"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-green-600 text-white text-xs">Active: 623</Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-green-800">Ashwagandha</CardTitle>
                <CardDescription className="text-sm text-green-600">Rajasthan, Madhya Pradesh</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-100 hover:shadow-md transition-shadow">
              <div className="h-32 bg-gradient-to-br from-green-200 to-green-300 relative overflow-hidden">
                <img src="/placeholder-p9fft.png" alt="Neem" className="w-full h-full object-cover" />
                <Badge className="absolute top-2 right-2 bg-green-600 text-white text-xs">Active: 412</Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-green-800">Neem</CardTitle>
                <CardDescription className="text-sm text-green-600">Gujarat, Maharashtra</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-100 hover:shadow-md transition-shadow">
              <div className="h-32 bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
                <img src="/placeholder-frafq.png" alt="Brahmi" className="w-full h-full object-cover" />
                <Badge className="absolute top-2 right-2 bg-green-600 text-white text-xs">Active: 298</Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-green-800">Brahmi</CardTitle>
                <CardDescription className="text-sm text-green-600">Kerala, West Bengal</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-12 text-green-800">Platform Access</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-green-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg text-green-800">Farmers</CardTitle>
                <CardDescription className="text-green-600">Record harvest data and track batches</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/farmer">Access Dashboard</Link>
                </Button>
                <p className="text-xs text-green-500 mt-2 text-center">156 active farmers</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FlaskConical className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg text-green-800">Manufacturers</CardTitle>
                <CardDescription className="text-green-600">Process tracking and quality control</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/manufacturer">Access Portal</Link>
                </Button>
                <p className="text-xs text-green-500 mt-2 text-center">23 registered companies</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg text-green-800">Regulators</CardTitle>
                <CardDescription className="text-green-600">Compliance monitoring and audits</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/regulator">Access Dashboard</Link>
                </Button>
                <p className="text-xs text-green-500 mt-2 text-center">AYUSH certified</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <QrCode className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg text-green-800">Consumers</CardTitle>
                <CardDescription className="text-green-600">Verify product authenticity</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/consumer">Verify Product</Link>
                </Button>
                <p className="text-xs text-green-500 mt-2 text-center">12,847 verifications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Trusted by Industry Leaders</h3>
              <p className="text-green-600">Real feedback from our platform users</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Sprout className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base text-green-800">Rajesh Kumar</CardTitle>
                      <CardDescription className="text-sm">Turmeric Farmer, Karnataka</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm">
                    "HerbTrace helped me get better prices for my organic turmeric. Buyers now trust the quality because
                    of blockchain verification."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FlaskConical className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base text-green-800">Dr. Priya Sharma</CardTitle>
                      <CardDescription className="text-sm">Quality Head, Himalaya Wellness</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm">
                    "The transparency in our supply chain has improved significantly. We can now trace every herb back
                    to its source."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-300" />
                <span className="text-lg font-semibold">HerbTrace</span>
              </div>
              <p className="text-green-100 text-sm">
                Blockchain-powered traceability for Ayurvedic herbs. Ensuring authenticity from farm to pharmacy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-300">Platform</h4>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>
                  <Link href="/farmer" className="hover:text-white">
                    Farmer Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/manufacturer" className="hover:text-white">
                    Manufacturer Portal
                  </Link>
                </li>
                <li>
                  <Link href="/consumer" className="hover:text-white">
                    Consumer Verification
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-300">Support</h4>
              <p className="text-green-100 text-sm">
                For technical support and partnerships:
                <br />
                <span className="text-green-300">support@herbtrace.in</span>
              </p>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200 text-sm">
            <p>&copy; 2024 HerbTrace. Building trust in traditional medicine.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
