import React, { Component } from 'react';
import Filter from '../Components/Filter';
import Item from '../Components/Item';

class RecentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Filter />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
    );
  }
}
export default RecentList;
