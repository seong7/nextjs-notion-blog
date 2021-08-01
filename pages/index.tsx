import React, { useEffect } from 'react';
import { replaceCover, cleanUp } from 'utils/canvas';
import { domain } from 'lib/config';
import { resolveNotionPage } from 'lib/resolve-notion-page';
import { NotionPage } from 'components';

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain);

    return { props, revalidate: 10 };
  } catch (err) {
    console.error('page error', domain, err);

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err;
  }
};

export default function NotionDomainPage(props) {
  useEffect(() => {
    replaceCover();
    return cleanUp;
  }, []);

  return (
    <>
      <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/188512/codepen-utilities.min.js'></script>
      <script src='http://cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.3/dat.gui.min.js'></script>
      <NotionPage {...props} />
    </>
  );
}
