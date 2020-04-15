

'use strict';

const e = React.createElement;

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state1 = { produits: Array() };
    this.state2 = { input: document.querySelector('#input')};
    this.state3 = { shoppingList: document.querySelector('#shoppingList')};
  }

  addInList(){
    let affichage = '';
    this.state1.produits.push(this.state2.input.value);
    this.state2.input.value='';
    affichage = '<li>'+this.state1.produits.join('</li><li>')+'</li>';
    this.state3.shoppingList.innerHTML=affichage;
    //affichage a la console de la liste des produit
    console.log(this.state1.produits);
    
  }
  render() {
    // return( <button className="btn btn-primary" onClick={()=> this.addInList()}> 
    // { 'Ajouter a la liste' }
    // </button>);
    return e(
      'button',
      {className: 'btn btn-primary', onClick: ()=> this.addInList()},
      'Ajouter a la liste'
     );
  }
}

const domContainer = document.querySelector('#addItem');
ReactDOM.render(e(AddButton), domContainer);