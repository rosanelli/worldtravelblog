import React from 'react';
import PropTypes from 'prop-types';

const Tags = props => (
	<div>
		{props.tags.map(tag => (
			<span key={tag}>
				<a href={`/tag/${tag}`}>#{tag}</a>	
				{' '}
			</span>		
		))}
	</div>		
)

Tags.propTypes = {	
	tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Tags;