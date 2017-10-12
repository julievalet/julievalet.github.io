import React from 'react';

export class ListSkillDev extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <ul>
                <li>{ item.name }</li>
                <li>{ item.time }</li>
            </ul>
        );
    }
}