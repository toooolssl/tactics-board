import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ball from '../pitch/Ball';

class BallEdit extends Component {

	ballImage() {
		const { imgHref } = this.props;
		console.log("ballImage", imgHref);
		return imgHref ? (
			<g transform="translate(-30 -30)">
				<svg width="60" height="60">
					<image href={imgHref} width="60" height="60" />
				</svg>
			</g>
		) : null;
	}

	render() {
		const b = this.props.ball;
		const editID = this.props.isEdit ? b.id : null;
		const editClassName = this.props.isEdit ? 'draggable' : null;
		const className = 'ball bc' + b.color + (this.props.isPrevFrame ? ' transparent': '');
		const transform = 'translate(' + b.pos.x + ' ' + b.pos.y + ')';
		const ball = b.color === 4 ? this.ballImage() : "";
		// const ball = this.ballImage() ;
		return (
			<g className={className} transform={transform}>
				<circle r="30" className={editClassName} strokeWidth="5" strokeOpacity="0.5" data-ref={editID} />
				{ball}
			</g>
		);
	}
}

BallEdit.defaultProps = {
	ball: null,
	isEdit: true,
	isPrevFrame: false
}

BallEdit.propTypes = {
	ball: PropTypes.instanceOf(Ball),
	isEdit: PropTypes.bool,
	isPrevFrame: PropTypes.bool,
	imgHref: PropTypes.string,
}

export default BallEdit;