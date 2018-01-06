import React from 'react';
import PropTypes from 'prop-types';

/**
 * Star Rating Component
 * props : level (array with 5 binary elements)
 * return a rating of 5 stars
 */
const StarLevel = props => {
    return (
        <span>
            {props.level.map(
                (star, index) =>
                    star === 1 ? (
                        <i key={'star-' + index} className="material-icons">
                            star
                        </i>
                    ) : (
                        <i key={'star-' + index} className="material-icons">
                            star_border
                        </i>
                    )
            )}
        </span>
    );
};

StarLevel.propTypes = {
    level: PropTypes.array.isRequired
};

export default StarLevel;
