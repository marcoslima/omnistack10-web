import React from 'react';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from "./components/DevForms";

import "./global.css";
import "./sidebar.css";
import "./Main.css";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      devs: []
    }
  }

  componentDidMount() {
    api.get('/devs')
      .then(response => {
        this.setState({devs: response.data})
      })
  }

  handleAddDev(data) {
    api.post('/devs', data)
      .then(response => {
        this.setState({devs: [...this.state.devs, response.data]})
      });
  }

  render() {
    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={this.handleAddDev.bind(this)}/>
        </aside>
        <main>
          <ul>
            {this.state.devs.map((dev, i) => (
              <DevItem key={i} dev={dev}/>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
