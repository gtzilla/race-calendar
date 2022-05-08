

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import _ from 'underscore';
import moment from 'moment';
import React from 'react'
import ProfileLink from '../components/ProfileLink';
const DATE_FORMAT = 'MMMM D, YYYY';

export default function RaceHosts({posts}) {
	const purePost = _.pluck(posts, 'frontMatter')
	const hostGrouped = _.groupBy(purePost, 'host')
	// console.log("hostGrouped",hostGrouped)
	const hosts = _.keys(hostGrouped);
	const today = moment();
	return (
		<>
		<div className="mt-3">
		<h3>Race Hosts Glossary</h3>
		<ul className="race-hosts-grid">
			<li>Host</li>
			<li>{today.format('YYYY')} Races</li>

		{_.chain(hosts)
			.sortBy(item=>item)
			.sortBy(name=>9999-hostGrouped[name].length)
			.map((name,idx)=>(
			<React.Fragment key={idx}>
				<li><ProfileLink username={name} /></li>
				<li>{
					_.chain(hostGrouped[name]).filter(item=>{
						const _date = moment(item.date, [DATE_FORMAT]);
						return _date.isSame(today, 'year')
					}).reduce((memo, num)=>{
						memo += 1;
						return memo;
					}, 0).value()
				}</li>
				
			</React.Fragment>
			)).value()}
		</ul>
		</div>
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
