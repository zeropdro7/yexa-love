'use client'

import { Post } from '@/components/common/Post'
import { springPostContent } from '@/mocks/spring/constants'

export const SpringContent = () => {
  return <Post content={springPostContent} />
}
