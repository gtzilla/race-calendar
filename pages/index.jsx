
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import moment from 'moment';
const DATE_FORMAT = 'MMMM D, YYYY';
import _ from 'underscore';
import Calendar from '../components/Calendar';


function filterFutureForward(posts) {
  const today = moment().startOf('day');
  return _.chain(posts).filter(post=>{
    const parsedDate = moment(post.frontMatter.date, [DATE_FORMAT]);
    return parsedDate.isSameOrAfter(today, 'day')        
  }).sortBy(post=>{
    const parsedDate = moment(post.frontMatter.date, [DATE_FORMAT]);
    return parsedDate.unix();
  }).value();  
}

export default function Home({ posts }) {
  const filteredAndSorted = filterFutureForward(posts);
  return (
    <>
    <div className="mt-5">
      {filteredAndSorted.length ? filteredAndSorted.map((post, index) => (
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
      )) :
      <div>
        <h1>No Upcoming Alleycats</h1>   
        <p>Let&#39;s change that together. 
          Share event details with <a href="https://instagram.com/brokeshutter/">brokeshutter@ig</a> to 
          see your race published here.
        </p>
      </div>
    }
    </div>
    <Calendar startMonth='3' />
    </>
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

