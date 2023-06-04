const serverType = 'python'

const serverConfig = {
  python: {
    logo: 'flaskLogo',
    port: '5000',
    host: 'http://localhost:',
    api: {
      getAllUsers: '/api/entities',
      addPost: '/api/addPost',
      listPostByUsername: '/api/listPostByUsername/', // + username
      login: '/api/login',
      register: '/api/register',
    }
  },
  node: {
    logo: 'nodeLogo',
    port: '3000',
    host: 'http://localhost:',
    api: {
      getAllUsers: '/api/users',
      register: '/api/users',
      login: '/api/users/login',
      addPost: '/api/posts',
      listPostByUsername: '/api/posts/', // + username
    }
  },
  ruby: {
    logo: 'railsLogo',
    port: '3000',
    host: 'http://localhost:',
    api: {
      getAllUsers: '/usuarios',
      register: '/registarUsuario',
      login: '/login',
      addPost: '/addTweet',
      listPostByUsername: '/tweets/', // + username
    }
  }
}

export {
  serverType,
  serverConfig
}