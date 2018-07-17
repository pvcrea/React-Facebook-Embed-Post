import React from 'react';
import PropTypes from 'prop-types';

class EmbeddedFacebookPost extends React.Component {
  componentDidMount() {
    const { applicationId } = this.props;

    if (!window.FB) {
      (function(d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.async = true;
        js.src = `//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.7&appId=${applicationId}`;
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    } else {
      window.FB.XFBML.parse();
    }
  }

  render() {
    const { href, width, showText } = this.props;

    return (
      <div
        className="fb-post"
        data-href={href}
        data-show-text={showText}
        data-width={width}
      >
        <blockquote
          cite={this.props.facebook}
          className="fb-xfbml-parse-ignore"
        />
      </div>
    );
  }
}

EmbeddedFacebookPost.propTypes = {
  /** The Facebook's SDK application ID for your developer account */
  applicationId: PropTypes.string.isRequired,

  /** The URL of the Facebook Post to embed */
  href: PropTypes.string.isRequired,

  // TODO: write description for this one
  width: PropTypes.string,

  // TODO: write description for this one
  showText: PropTypes.bool,
};

EmbeddedFacebookPost.defaultProps = {
  showText: true,
  width: '',
};

export default EmbeddedFacebookPost;
