import React, { Component } from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

import Actions from './Actions';

//data is the json data for free champs
import data from './Actions'


const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

function genPanel(item){
		return(
			<Collapse bordered={false} defaultActiveKey={['0']}>
				<Panel header={item.name} key={item.id} style={customPanelStyle}>
	 				<p>{item.desc}</p>
 				</Panel>
			</Collapse>
		);
}

function iterateData(data){
	return data.map(genPanel);
}

export default class ChampList extends Component {
render (){
	return(
		<div>
         {iterateData(data)}
		</div>
	);
}

}
