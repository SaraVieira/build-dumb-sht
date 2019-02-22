import React, { useEffect, useState } from 'react';
import urls from '../websites';

const getData = async () => {
  const results = urls.map(async url => {
    const f = await fetch(`https://open-data-api.now.sh/?url=${url}`);
    const data = await f.json();
    return data;
  });
  const a = await Promise.all(results);
  return a;
};

export default () => {
  const [websites, setWebsites] = useState(null);

  useEffect(() => {
    getData().then(a => setWebsites(a));
  }, []);

  return <div>{websites && websites.map(website => website.title)}</div>;
};
