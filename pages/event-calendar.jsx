import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import _ from 'underscore';

/*
Date: Sun, 13 Mar 2022 20:34:53 GMT
Server: Apache
Location: https://weather-in-calendar.com/cal/weather-cal.php?city=new%20york&units=imperial&temperature=day
Content-Type: text/html; charset=iso-8859-1

HTTP/1.1 200 OK
Date: Sun, 13 Mar 2022 20:34:53 GMT
Server: Apache
Content-Disposition: attachment; filename=weather-cal.ics
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Frame-Options: SAMEORIGIN
X-UA-Compatible: IE=Edge,chrome=1
Content-Type: text/calendar; charset=utf-8
*/

// import Layout from '../components/layout'
// import NestedLayout from '../components/nested-layout'

// examples of ical share
// http://icalshare.com/#
// use "protocol" webcal://
/*
	3/13/2022 
	challenge -- stripping off the HTML page
	structure and returning pure ICS format
*/

export default function Page({posts}) {
	
	return (
		<div>
			Event Calendar, no
			<div>
				{JSON.stringify(posts)}
			</div>			
		</div>

		)
}



Page.getLayout = function getLayout({props}) {
  return (
    <Page {...props} />
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


