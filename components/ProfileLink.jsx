import Link from 'next/link'
import React from 'react';

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.userAgentData?.platform || navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

export default class ProfileLink extends React.PureComponent {
  static get propTypes() {
    return {
      username:()=>{}
    }
  }
  static get defaultProps() {
    return {
      username:null
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      iOS : null
    }
  }
  componentDidMount() {
    this.setState({
      iOS: iOS()
    });
  }
  render() {
    const isMobile = this.state.isMobile;
    const username = this.props.username;
    let _href = 'https://instagram.com/' + username;
    if(this.state.iOS) {
      _href = 'instagram://user?username=' + username
    }
    return (
      <Link href={_href} passHref>
        {username + '@ig'}
      </Link>

    )    
  }

}

