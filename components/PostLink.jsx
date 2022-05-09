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

export default class PostLink extends React.PureComponent {
  static get propTypes() {
    return {
      postId:()=>{}
    }
  }
  static get defaultProps() {
    return {
      postId:null
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
    const postId = this.props.postId;
    let _href = 'https://instagram.com/p/' + postId + '/';
    if(this.state.iOS) {
      _href = 'instagram://library?LocalIdentifier=' + postId
    }
    return (
      <Link href={_href} passHref>
        {this.props.children}
      </Link>

    )    
  }

}

