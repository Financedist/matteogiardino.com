'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/utils/dates'

import { BlogPostPreview } from '@/types/blog'

import { Badge } from '../ui/badge'

export function PostCard({ post }: { post: BlogPostPreview }) {
    return (
        <Link
            key={post.id}
            href={post.url}
            className='flex flex-col rounded-lg p-4 transition-all duration-150 hover:bg-muted'>
            <Image
                src={post.image ?? '/static/images/blog-post-placeholder.webp'}
                width={1280}
                height={720}
                alt={post.title}
                className='aspect-video rounded-sm object-cover object-center'
            />

            <div className='mt-4 grow items-start space-y-2'>
                <h2 className='text-xl font-bold'>{post.title}</h2>
                <div className='text-muted-foreground'>
                    {post.summary.slice(0, 120)}
                    {post.summary.length > 120 && '...'}
                </div>
            </div>

            <div className='mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm'>
                <div>{formatDate(post.date)}</div>
                {post.tags && (
                    <>
                        <div className='text-muted-foreground'>•</div>
                        <div className='flex gap-1'>
                            {post.tags.map((t) => (
                                <Badge key={t} variant={'outline'}>
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}
