import React from 'react';
import NewsStyle from "./NewsContainer.styled";
import SubTitle from "../../Atoms/SubTitle/SubTitle";
import newsData from './../../data/news.json';

const NewsContainer = function () {
	return (
		<NewsStyle>
			<SubTitle title='Latest news'/>
			{
				newsData.map((item) => {
					return(
						<div key={item.id}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					)
				})
			}
		</NewsStyle>
	);
};

export default NewsContainer;