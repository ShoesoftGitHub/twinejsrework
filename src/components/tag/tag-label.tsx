import * as React from 'react';
import {TagColors} from '../../store/stories';
import './tag-label.css';

export interface TagLabelProps {
	tagColors: TagColors;
	tags: string[];
}

export const TagLabel: React.FC<TagLabelProps> = React.memo(props => {
	return (
		<div className="tag-label">
			{props.tags.map(tag => (
				<span
					className={`color-${props.tagColors[tag]}`}
					key={tag}
					title={tag}
				/>
			))}
		</div>
	);
});
