import React from 'react';
import PropTypes from "prop-types";
import FormField from "../FormField";
import "./styles.css";

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
    const hc = this.handleChange.bind(this);
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <FormField label='Usuário do Github' name='github_username' value={github_username} onChange={hc} required={true}/>
        <FormField label='Tecnologias' name='techs' value={techs} onChange={hc} required={true}/>

        <div className="input-group">
          <FormField label='Latitude' name={'latitude'} value={latitude} onChange={hc} required={true} type='number'/>
          <FormField label='Longitude' name={'longitude'} value={longitude} onChange={hc} required={true} type='number'/>
        </div>
        <button type='submit'>Salvar</button>
      </form>
    );
  }
}

DevForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default DevForm;
