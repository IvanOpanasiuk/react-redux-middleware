import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSeriesRequest } from './actionCreators/actions';
import { getSeries, getIsLoading, getError } from './reducers/episodes';


class App extends Component {
  componentDidMount() {
    const { getSeriesRequest } = this.props;
    getSeriesRequest();
  }
  render() {
    const { series, isLoading, error } = this.props;

    if (isLoading) return <p> Data is loading</p>
    if (error) return <p> Data was came with error</p>
    return (
      <div>
        <p>Firefly</p>
        {series.map(ep => (
          <div key={ep.id}>
            {ep.image && <img src={ep.image.original} alt={ep.name} />}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  series: getSeries(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

const mapDispatchToProps = {
  getSeriesRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(App);