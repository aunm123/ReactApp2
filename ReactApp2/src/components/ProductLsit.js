/**
 * Created by timhuo on 2017/3/10.
 */
'use strict';
import React, {PropType} from 'react';
import {Table, Popconfirm, Button} from 'antd'



const ProductLsit = ({onDelete,products})=>{
	const columns = [{
		title:'Name',
		dataIndex:'name',
	},{
		title:'Actions',
		render:(text,record)=>{
			return (
				<Popconfirm title="Delete?" onConfirm={()=>onDelete(record.id)}>
					<Button>Delete</Button>
				</Popconfirm>
			)
		}
	}];
	
	return (
		<Table
			dataSource={products}
			columns={columns}
		/>
	)
};

ProductLsit.prototype = {
	onDelete: PropType.func.isRequired,
	products: PropType.array.isRequired,
}


export default ProductLsit;