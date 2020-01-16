import React from 'react';
import PropTypes from "prop-types";

class DevForm extends React.Component {
  state = {
    github_username: '',
    techs: '',
    latitude: '',
    longitude: ''
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({ latitude, longitude });
      },
      (error) => {
        console.log('Erro obtendo posição: ', error);
      },
      {
        timeout: 30000,
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ github_username: '', techs: '' });
  }

  render() {
    const { github_username, techs, latitude, longitude } = this.state;

    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" value={github_username} required
                 onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" value={techs} required
                 onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" name="latitude" id="latitude" value={latitude} required
                   onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" name="longitude" id="longitude" value={longitude} required
                   onChange={this.handleChange.bind(this)}/>
          </div>
        </div>
        <button type='submit'>Salvar</button>
      </form>
    );
  }
}

DevForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default DevForm;
