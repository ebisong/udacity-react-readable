import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from './actions/category_actions';
import { Link } from 'react-router-dom';


class CategoryList extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }
  render() {
    return (
      <div className="category-list">
        <h2>Categories</h2>
        <table>
          <tbody>
            {this.props.categories.map((category) => (
              <tr key={category.path}>
                <td>
                  <Link to={`/posts/${category.path}`}>{category.name}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(CategoryList);
