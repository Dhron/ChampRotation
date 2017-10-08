import React, { Component } from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

import Actions from './Actions';

const Panel = Collapse.Panel;

const text = `
	There have always been those within Noxus who did not 
	agree with the evils perpetrated by the Noxian High Command. 
	The High Command had just put down a coup attempt from the self-proclaimed 
	Crown Prince Raschallion, and a crackdown on any form of...
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

export default class ChampList extends Component {
	initialState(){
		return{
			data: {}
		}
	}

	getFreeChamps(){

	}

	render(){
		return(
			<Collapse bordered={false} defaultActiveKey={['0']}>
			    <Panel header="Annie" key="1" style={customPanelStyle}>
			      <p>{text}</p>
			    </Panel>
			</Collapse>
		);
	}
}