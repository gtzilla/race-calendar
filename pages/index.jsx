
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import moment from 'moment';
const DATE_FORMAT = 'MMMM D, YYYY';
import _ from 'underscore';




export default function Home({ posts }) {
  const today = moment().startOf('day');

  return (
    <div className="mt-5">
      {_.chain(posts).filter(post=>{
        const parsedDate = moment(post.frontMatter.date, [DATE_FORMAT]);
        return parsedDate.isSameOrAfter(today, 'day')        
      }).sortBy(post=>{
        const parsedDate = moment(post.frontMatter.date, [DATE_FORMAT]);
        return parsedDate.unix();
      }).map((post, index) => (
        <Link href={'/races/' + post.slug} passHref key={index}>
          <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{post.frontMatter.date}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <img
                  src={post.frontMatter.thumbnailUrl}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </Link>
      )).value()}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}

