import React from 'react';
import Immutable from 'immutable';

export const MakeMultiSelectable = (Component) => {
  class composed extends Component {

    static displayName = `MultiSelectable${Component.displayName}`;

    static propTypes = {
      children: React.PropTypes.node
    };

    constructor() {
      super();

      this.state = {
        selected: Immutable.Set()
      };
    }

    extendChild(child) {
      if (child) {
        const selected = this.isChildSelected(child);

        return React.cloneElement(child, {
          onTouchTap: event => {
            this.handleItemTouchTap(event, child);
            if (child.props.onTouchTap) {
              child.props.onTouchTap(event);
            }
          },
          selected
        });
      }

      return child;
    }

    isChildSelected(child) {
      const childKey = child.key;

      return this.state.selected.contains(childKey);
    }

    handleItemTouchTap(event, item) {
      const itemKey = item.key;

      const selected = this.state.selected;

      const newSelected = selected.contains(itemKey) ?
        selected.remove(itemKey) :
        selected.add(itemKey);

      this.setState({
        selected: newSelected
      });
    }

    render() {
      const { children } = this.props;

      const newChildren = React.Children.map(children, child => this.extendChild(child));

      return (
        <Component {...this.props} {...this.state}>
          {newChildren}
        </Component>
      );
    }
  }

  return composed;
};

export default MakeMultiSelectable;
