

'use strict';

const e = React.createElement;

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state1 = { produits: Array() };
    this.state2 = { input: document.querySelector('#input')};
    this.state3 = { input: document.querySelector('#shoppingList')};
  }

  addInList(){
    this.state1.produits.push(this.state2.input.value);
    this.state2.input.value="";

    console.log(this.state1.produits);
    
  }
  render() {
    return e(
      'button',
      {className: 'btn btn-primary', onClick: ()=> this.addInList()},
      'Ajouter a la liste'
    );
  }
}

const domContainer = document.querySelector('#addItem');
ReactDOM.render(e(AddButton), domContainer);