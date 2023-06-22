import React from 'react'
import styles from './page.module.css'
import { lessonPosts } from '@/data/lessonPosts'
import Link from 'next/link'


export default async function LessonsPage() {

    return (
      <>
        {lessonPosts.map((post: any) => (
          <Link href={`lessons/${post.path}`} key={post.path} className='postWrapper'>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </Link>
        ))}
      </>
    )
  }
  