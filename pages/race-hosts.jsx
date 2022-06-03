

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import _ from 'underscore';
import moment from 'moment';
import React from 'react'
import ProfileLink from '../components/ProfileLink';
const DATE_FORMAT = 'MMMM D, YYYY';


function countRaces(races) {
	const mapped = {}
	races.forEach(item=>{
		if(!_.isArray(item.host)) {
			if(!_.has(mapped, item.host)) {
				mapped[item.host] = {events:[item.date]};
			} else {
				mapped[item.host].events.push(item.date)
			}
		} else {
			item.host.forEach(host=>{
				if(!_.has(mapped, host)) {
					mapped[host] = {events:[item.date]};
				} else {
					mapped[host].events.push(item.date)
				}
			});
		}
	});
	return mapped;
}

export default function RaceHosts({posts}) {
	const purePost = _.pluck(posts, 'frontMatter');
	const raceCounts = countRaces(purePost);
	const today = moment();
	return (
		<>
		<div className="mt-3">
		<h3>Race Hosts Leaderboard</h3>
		<ul className="race-hosts-grid">
			<li>Host</li>
			<li>Alleycat Races</li>

			{_.chain(_.keys(raceCounts))
				.sortBy(item=>item)
				.sortBy(name=>9999-raceCounts[name].events.length)
				.map((name,idx)=>(
					<React.Fragment key={idx}>
						<li><ProfileLink username={name} /></li>
						<li>{raceCounts[name].events.length}</li>
					</React.Fragment>
				))	
				.value()}
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
