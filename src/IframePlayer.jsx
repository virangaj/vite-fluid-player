import { useRef, useState, useEffect } from 'react';

function IframePlayer() {
  const iframeRef = useRef();
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    setCurrentVideo({
      // https://vz-6c38baf6-966.b-cdn.net/e7b70fee-bba7-40eb-b472-7c41496d727e/playlist.m3u8
      // https://vz-be062780-4dc.b-cdn.net/13e60d4a-f410-48fa-97bc-d76abe2a0fe2/playlist.m3u8
      url: 'https://cdn.rtmp1.vodhosting.com/hls/SportyStuffTV.m3u8',
      userCurrentTime: 50,
      poster:
        'https://c-1y15z120-t12c.ayozat.com/movies/aacl2KMMV81xmc2rUlU5Ty3WIjnW3w5q80D8oxDe.png',
      vastEnabled: true,
      vast_tag_url: '/static/google.xml',
      pre_ad: '/static/google.xml',
      duration: 10,
      title: 'Beyonce - Beyond the Glam',
      response: {
        question: 'Try your luck today..!',
        responses: [
          {
            key: '1xbet.com',
            value: '1xbet.com',
            link: 'https://1xbet.com/en',
            img: 'https://v2l.traincdn.com/genfiles/cms/pg/70/images/09ef1ad2e0b8613684c2d1cd91f4d3a6.svg',
          },
          {
            key: 'bestbettingsites',
            value: 'bestbettingsites',
            link: 'https://www.bestbettingsites.com/sri-lanka/',
            img: 'https://v2l.traincdn.com/genfiles/cms/pg/70/images/09ef1ad2e0b8613684c2d1cd91f4d3a6.svg',
          },
          {
            key: 'bookmakers',
            value: 'bookmakers',
            link: 'https://www.bookmakers.bet/63009/betting-sites-sri-lanka/',
            img: 'https://v2l.traincdn.com/genfiles/cms/pg/70/images/09ef1ad2e0b8613684c2d1cd91f4d3a6.svg',
          },
        ],
      },
      adList: [
        {
          roll: 'preRoll',
          vastTag: '/static/google.xml',
        },
        // {
        //   roll: 'preRoll', //multiple preRoll Ads
        //   vastTag: '/static/vast_hls.xml',
        //   adText: 'Advertising supports us directly',
        // },
        // {
        //   valign: 'bottom', //only for In-Video
        //   roll: 'preRoll',
        //   vastTag: '/static/vpaid_linear.xml',
        // },
        {
          roll: 'midRoll',
          vastTag: '/static/vast_hls.xml',
          fallbackVastTags: ['/static/google.xml', '/static/vast_hls.xml'],
          timer: 60,
        },
        // {
        //   roll: 'midRoll',
        //   vastTag: '/static/vast_hls.xml',
        //   fallbackVastTags: ['/static/google.xml', '/static/vast_hls.xml'],
        //   timer: 65,
        // },
      ],
    });

    return () => {
      setCurrentVideo(null);
    };
  }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        src={'http://127.0.0.1:5501/index.html'}
        title={'Welcome to'}
        width={'1000px'}
        height={'700px'}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen"
        onLoad={() => {
          const data = {
            source: 'my-video',
            src: currentVideo?.url,
            userCurrentTime: currentVideo?.userCurrentTime,
            poster: currentVideo?.poster,
            vastEnabled: currentVideo?.poster,
            vastTagPreroll: currentVideo?.vast_tag_url,
            pre_ad: currentVideo?.pre_ad,
            vastDuration: currentVideo?.duration ? currentVideo?.duration : 10,
            title: currentVideo?.title,
            adList: currentVideo?.adList,
            response: currentVideo?.response,
          };
          const iframeWindow = iframeRef.current?.contentWindow;
          iframeWindow?.postMessage(JSON.parse(JSON.stringify(data)), '*');
        }}
      />
    </>
  );
}

export default IframePlayer;
