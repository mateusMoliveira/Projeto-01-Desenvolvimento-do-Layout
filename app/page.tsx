"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Carousel from "@/components/carousel"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchResult(searchQuery)
  }

  const featuredCourses = [
    {
      id: 1,
      title: "UX/UI Design",
      description: "Aprenda a criar interfaces intuitivas e atraentes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Desenvolvimento Web",
      description: "Domine as tecnologias front-end e back-end",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Data Science",
      description: "Análise de dados e machine learning",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Marketing Digital",
      description: "Estratégias para crescimento online",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      role: "UX Designer",
      content: "Os cursos transformaram minha carreira. Recomendo a todos!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Desenvolvedor Full Stack",
      content: "Conteúdo prático e professores excelentes. Valeu cada minuto!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Juliana Costa",
      role: "Product Manager",
      content: "Metodologia incrível que me ajudou a crescer profissionalmente.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Innovation Class</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
              <a href="#" className="hover:text-gray-200">
                Cursos
              </a>
              <a href="#" className="hover:text-gray-200">
                Sobre
              </a>
              <a href="#" className="hover:text-gray-200">
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Transforme seu futuro com nossos cursos online</h2>
              <p className="text-lg mb-6">
                Aprenda as habilidades mais demandadas do mercado com especialistas reconhecidos.
              </p>
              <form onSubmit={handleSearch} className="flex max-w-md">
                <Input
                  type="text"
                  placeholder="O que você quer aprender?"
                  className="rounded-l-md border-0 text-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="rounded-l-none bg-secondary hover:bg-secondary-dark">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
              {searchResult && (
                <div className="mt-4 p-2 bg-white/10 rounded">
                  <p>Você buscou por: &apos;{searchResult}&apos;</p>
                </div>
              )}
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Estudantes aprendendo online"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Cursos em Destaque</h2>
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
                    <Button className="mt-4 w-full">Saiba mais</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Carousel>
              {featuredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden mx-2">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
                    <Button className="mt-4 w-full">Saiba mais</Button>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">O que nossos alunos dizem</h2>
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.content}"</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Carousel>
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6 mx-2">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.content}"</p>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Inscreva-se hoje e tenha acesso a todos os nossos cursos premium por um preço especial.
          </p>
          <Button className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 text-lg">Comece agora</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Innovation Class</h3>
              <p className="text-gray-400">Transformando vidas através da educação online de qualidade.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tecnologia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Negócios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@innovationclass.com</li>
                <li>+55 (11) 99999-9999</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Innovation Class. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

