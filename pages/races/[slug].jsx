import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Button from '../../components/Button.jsx'
import _ from 'underscore';


const PostPage = ({ 
  frontMatter: { 
    title, 
    coverImage, 
    flyerUrl,
    host,
    mapsLink
  }, mdxSource }) => {
  return (
    <div className="mt-4">
      <h1>{title}</h1>
      {coverImage?
        <a href={flyerUrl} rel="noreferrer"  target="new">
          <img
            src={coverImage}
            className="img-fluid mt-1 rounded-start"
            alt="cover-image"
            width={700}
            height={700}
          />
      </a> :null}     
      <MDXRemote {...mdxSource} components={{ Button }} />
      <div> 
        <a href={flyerUrl} rel="noreferrer" target="new">See flyer</a> 
        &nbsp; | &nbsp;
        <a href={'https://www.instagram.com/' + host}>Contact {host}@ig</a>
      </div>
      {!mapsLink ? null : 
        <a rel="noreferrer" target="new" href="https://goo.gl/maps/qwzHGs5SPdo3LiEd6">Start Location</a>}
    </div>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export default PostPage