import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { isDarkishTheme } from '../../helpers/utils';

const HeadTagEditor = ({ profile, theme, googleAnalytics }) => {
  return (
    <Fragment>
      {profile && (
        <Helmet>
          {googleAnalytics?.id && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.id}`}
            ></script>
          )}
          {googleAnalytics?.id && (
            <script>
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalytics.id}');`}
            </script>
          )}
          <meta
            name="theme-color"
            content={isDarkishTheme(theme) ? '#000000' : '#ffffff'}
          />

          <meta
            itemProp="name"
            content={`Portfolio${profile.name && ` of ${profile.name}`}`}
          />
          <meta itemProp="description" content={profile.bio} />
          <meta itemProp="image" content={profile.avatar} />
        </Helmet>
      )}
    </Fragment>
  );
};

HeadTagEditor.propTypes = {
  profile: PropTypes.object,
  theme: PropTypes.string,
  googleAnalytics: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
};

export default HeadTagEditor;
