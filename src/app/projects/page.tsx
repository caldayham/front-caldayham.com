import React from 'react'
import styles from './page.module.css'
import { projectPosts } from '@/data/projectPosts'
import Link from 'next/link'


export default async function ProjectsPage() {

    return (
      <>
        {projectPosts.map((post: any) => (
          <Link href={`projects/${post.path}`} key={post.path} className='postWrapper'>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </Link>
        ))}
      </>
    )
  }
  