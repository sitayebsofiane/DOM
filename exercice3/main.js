

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'element ajouté';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'add'
    );
  }
}
const domContainer = document.querySelector('#addItem');
ReactDOM.render(e(LikeButton), domContainer);