import { springCard, valentineCard } from '@/mocks'
import { DateCard } from '@/components/common/DateCard'
import { Container } from '@/components/common/Container'

const dateCards = [springCard, valentineCard]

export default function Home() {
  return (
    <Container className="py-16">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1
          className="text-6xl text-turquoise-dark mb-4 drop-shadow-sm"
          style={{ fontFamily: 'var(--font-romantic)' }}
        >
          Fechas Especiales
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Fechas especiales diseñadas para el corazón, la memoria y el
          amor eterno
          <br />
          <span
            className="text-sm text-pink-neutral block mt-2"
            style={{ fontFamily: 'var(--font-gaming)' }}
          >
            永遠の愛 (Eien no ai) - Eternal Love
          </span>
        </p>
      </div>

      {/* Date Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dateCards.map((card) => (
          <DateCard key={card.id} {...card} />
        ))}

        {/* Coming Soon Card */}
        <div className="bg-kawaii-lavender/20 rounded-2xl overflow-hidden shadow-lg border-2 border-dashed border-turquoise-light/50 hover:border-pink-light/50 transition-colors">
          <div className="aspect-square flex items-center justify-center bg-kawaii-lavender/10">
            <div className="text-center">
              <div className="text-6xl mb-4">💖</div>
              <p className="text-turquoise-dark font-medium">
                Próximamente...
              </p>
              <p className="text-pink-neutral text-sm">
                More special dates
              </p>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-turquoise-dark mb-2">
              Nueva Fecha Especial
            </h3>
            <p className="text-gray-600 text-sm">
              Cada momento contigo se convierte en una fecha especial
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center mt-16">
        <p
          className="text-pink-neutral text-sm"
          style={{ fontFamily: 'var(--font-gaming)' }}
        >
          Made with 💕 by Pdro • すべての愛を込めて (Subete no ai wo
          komete - With all my love)
        </p>
      </div>
    </Container>
  )
}
