import React from 'react'

const Sidebar = (props) => {
  return (
    <aside
      className="Sidebar"
      style={styles.sidebar}
    >
      <div
        className="UserInfo"
        style={{...styles.children, ...styles.UserInfo}}
      >
        <div className="Avatar" style={styles.Avatar}></div>
        <div className="user"style={styles.user}>
          {props.user.userName}
        </div>
        <a href="#" style={styles.potato}>
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
      <h1
        style={{
          ...styles.children,
          ...styles.h1,
        }}
      >
        XTBC 18
      </h1>
      <nav
        className="RoomList"
        style={styles.children}
      >
        <h2 style={styles.h2}>Rooms</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><a href="#" style={styles.a}>general</a></li>
          <li style={styles.li}><a href="#" style={styles.a}>random</a></li>
        </ul>
      </nav>
    </aside>
  )
}

const styles = {
  sidebar: {
    backgroundColor: '#333344',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  children: {
    padding: '0 1rem',
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
  },

  h2: {
    fontSize: '1rem',
  },
  
  ul: {
    listStyle: 'none',
    marginLeft: '0',
    paddingLeft: '0',
  },
  
  li: {
    marginBottom: '0.5rem',
  },

  a: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',
  },

  UserInfo: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  Avatar: {
    marginRight: '0.5rem',
  },

  user: {
    flex: '1',
  },
  potato: {
    border: '0',
    padding: '0',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1.2rem',
    transition: 'color 0.25s ease-out',
  }

}

export default Sidebar