import React,{Component} from 'react';
import Filter from '../Components/Filter';
import Item from '../Components/Item';

class RecentList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{width:'650px', height:'auto', display:'flex',flexDirection:'column', margin:'auto'}}>
                <Filter/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        )
    }

}
export default RecentList;