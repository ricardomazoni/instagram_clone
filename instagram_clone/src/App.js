import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header'
import Post from './components/post/post'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

class App extends Component {
  render() {
    return (
      <ApolloClient client={client}>
        <div>
          <Header />
          <div>
            <Post />
          </div>
        </div>
      </ApolloClient>
    )
  }
}

export default App;
