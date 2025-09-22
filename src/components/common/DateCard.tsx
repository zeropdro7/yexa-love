import Image from 'next/image'
import Link from 'next/link'
import type { DateCardProps } from '@/types'

export const DateCard = ({
  title,
  subtitle,
  description,
  date,
  imageSrc,
  imageAlt,
  href,
  bgGradient,
  textColor,
  dateColor,
}: DateCardProps) => {
  return (
    <Link href={href} className="group">
      <div
        className={`bg-gradient-to-br ${bgGradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col`}
      >
        {/* Image Container */}
        <div className="h-64 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Date Badge */}
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${dateColor} bg-white/80 mb-3`}
          >
            {date}
          </div>

          {/* Title */}
          <h3 className={`text-xl font-bold ${textColor} mb-2`}>
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-gray-600 font-medium mb-2">{subtitle}</p>

          {/* Description */}
          <p className="text-gray-500 text-sm line-clamp-2 flex-1">
            {description}
          </p>

          {/* Action */}
          <div className="mt-4">
            <span
              className={`text-sm font-medium ${textColor} group-hover:underline`}
            >
              Explorar recuerdos →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
