export interface PostCategory {
  label: string
  bgColor: string
  textColor: string
}

export interface PostImage {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface PostHeroImage extends PostImage {
  overlayClass?: string
}

export interface PostJapaneseText {
  text: string
  fontFamily: string
  textColor: string
}

export interface PostQuote {
  text: string
  bgClass: string
  textColor: string
}

export interface PostSection {
  title: string
  titleColor: string
  content: string
}

export interface PostMainContent {
  title: string
  titleColor: string
  intro: string
  quote: PostQuote
  sections: PostSection[]
}

export interface PostGallery {
  title: string
  titleColor: string
  images: PostImage[]
}

export interface PostFinalMessage {
  title: string
  titleColor: string
  bgClass: string
  content: string
  japaneseText: PostJapaneseText
}

export interface PostNavigationButton {
  href?: string
  text: string
  className: string
}

export interface PostNavigation {
  backButton: PostNavigationButton
  shareButton: PostNavigationButton
  nextButton: PostNavigationButton
}

export interface PostColors {
  primary: string
  accent: string
  light: string
}

export interface PostContent {
  id: string
  category: PostCategory
  title: string
  subtitle: string
  japaneseText: PostJapaneseText
  heroImage: PostHeroImage
  mainContent: PostMainContent
  gallery: PostGallery
  finalMessage: PostFinalMessage
  navigation: PostNavigation
  colors: PostColors
}
