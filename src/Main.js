import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {

  state = {
    channels: [
      'general',
      'random',
    ],
    currentChannel: 'general',
  }

  changeArea = (channel) => {
    const currentChannel = channel
    this.setState({currentChannel}) 
    console.log (currentChannel)
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar 
        user={this.props.user} 
        signOut={this.props.signOut}
        channels={this.state.channels}
        changeArea={this.changeArea}
        />
        <Chat user={this.props.user} />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main