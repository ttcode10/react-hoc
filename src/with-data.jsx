import React from 'react';

const WithData = WrappedComponent => {
  class WithData extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      fetch(this.props.dataSource)
      .then(response => response.json())
      .then(json => this.setState({data: json.slice(0, 3)}));
    }

    render() {
      const { dataSource, ...otherProps } = this.props;

      return (<WrappedComponent data={this.state.data} {...otherProps} />)
    }
  }
  return WithData;
};

export default WithData;