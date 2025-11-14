"use client"

import { Button } from "@/components/ui/button"
import { User, Menu, Download } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Step1() {
  const router = useRouter()

  const handleSelection = (gender: "male" | "female") => {
    // Store selection in localStorage
    localStorage.setItem("selectedGender", gender)
    router.push("/u1") // Assuming u1 is your next step
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Menu className="h-6 w-6" />
        </Button>
        {/* COR ALTERADA: Botão de download com gradiente do Instagram */}
        <Button size="icon" className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white rounded-full h-12 w-12 shadow-lg hover:opacity-90 transition-opacity">
          <Download className="h-6 w-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Protect Your Relationship</h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Discover how to keep your relationship safe and healthy with our exclusive solution.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 w-full max-w-md">
          {/* COR ALTERADA: Botões de ação com gradiente do Instagram */}
          <Button
            onClick={() => handleSelection("male")}
            className="w-full h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-lg font-medium rounded-2xl flex items-center justify-start px-6 gap-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="bg-white rounded-full p-2">
              {/* COR ALTERADA: Ícone agora roxo */}
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-left">
              I Want to Monitor My Partner
              <br />
              (Male)
            </span>
          </Button>

          <Button
            onClick={() => handleSelection("female")}
            className="w-full h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-lg font-medium rounded-2xl flex items-center justify-start px-6 gap-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="bg-white rounded-full p-2">
              {/* COR ALTERADA: Ícone agora roxo */}
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-left">
              I Want to Monitor My Partner
              <br />
              (Female)
            </span>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-8 text-sm">
            <Link href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-500 hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="text-blue-500 hover:underline">
              Email Support
            </Link>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Protect Your Relationship. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
