import Header from '~/components/Navbar'
import NavButtons from '~/components/ui/NavButtons'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-customGray text-white">
      <div className="flex w-full items-start justify-between p-4">
        <Header />
        <NavButtons />
      </div>
    </main>
  )
}
