import React, {Component} from 'react';
import RCPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

class LkPagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pagination pull-right">
        <RCPagination
          {...this.props}
          hideOnSinglePage
          showQuickJumper
          // showTotal
        />
      </div>
    );
  }
}

export default LkPagination;