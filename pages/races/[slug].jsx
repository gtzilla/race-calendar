import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Button from '../../components/Button.jsx'
import ProfileLink from '../../components/ProfileLink'
import _ from 'underscore';


function showFlyerArtist(flyerArtist) {
  if(flyerArtist && _.isArray(flyerArtist)) {
    return <div> Artwork by <ul>{flyerArtist.map((item,idx)=>{
      return <li key={idx}><ProfileLink username={item} /></li>  
    })}
    </ul>
    </div>
  } else if(flyerArtist) {
    return <div>Artwork by <ProfileLink username={flyerArtist} /></div>  
  }
  return null
}

const PostPage = ({ 
  frontMatter: { 
    title, 
    date,
    coverImage, 
    flyerUrl,
    flyerArtist,
    host,
    mapsLink,
    tags
  }, mdxSource }) => {
  return (
    <div className="mt-4">
      <h1>{title}</h1>
      <div><span className="text-muted">{date}</span></div>
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
        Race Host &nbsp; 
        { _.isArray(host) ? 
          host.map((name, idx)=><span key={idx}><ProfileLink username={name} /> </span>  ) 
          : <span><ProfileLink username={host} /></span>
        }
        
      </div>
      { !tags.length ? null :
        tags.map((item,idx)=><span key={'tags-'+idx}>{item} </span> )
      }
      
      {
        !mapsLink ? null : 
        <p><a rel="noreferrer" target="new" href={mapsLink}>Start Location</a></p>
      }
      {showFlyerArtist(flyerArtist)}
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
  console.log("matter(markdownWithMeta)", matter(markdownWithMeta))
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