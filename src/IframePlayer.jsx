import { useRef, useState, useEffect } from "react";

function IframePlayer() {
  const iframeRef = useRef();
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    setCurrentVideo({
      // https://vz-6c38baf6-966.b-cdn.net/e7b70fee-bba7-40eb-b472-7c41496d727e/playlist.m3u8
      // https://vz-be062780-4dc.b-cdn.net/13e60d4a-f410-48fa-97bc-d76abe2a0fe2/playlist.m3u8
      url: "https://vz-dda35b68-58b.b-cdn.net/0ef48f18-749d-4e0c-a68e-bdb405fb4be0/playlist.m3u8",
      userCurrentTime: 50,
      poster:
        "https://c-1y15z120-t12c.ayozat.com/movies/aacl2KMMV81xmc2rUlU5Ty3WIjnW3w5q80D8oxDe.png",
      vastEnabled: true,
      vast_tag_url: "/static/google.xml",
      pre_ad: "/static/google.xml",
      duration: 10,
      title: "Beyonce - Beyond the Glam",
      response: {
        question: "Which is your preferred betting site?",
        responses: [
          {
            key: "1xbet",
            value: "1xbet",
            link: "https://1xbet.com/en",
            img: "https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F01%2F1xBet-Esports-968x544.jpg&w=3840&q=75",
          },
          {
            key: "InterBet",
            value: "InterBet",
            link: "https://interbet.co.za/",
            img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd2ebf4327484cf66/654a199bb71592040a4be8f7/interbet.png?format=pjpg&auto=webp&width=3840&quality=60",
          },
          {
            key: "BetWay",
            value: "BetWay",
            link: "https://betway.com/en-lk/",
            img: "https://oddsninja.com/wp-content/uploads/2023/04/betway-featured-image.jpg",
          },
          {
            key: "BetMGM",
            value: "BetMGM",
            link: "https://promo.nj.betmgm.com/en/promo/geolocator?orh=sports.betmgm.com",
            img: "https://1000logos.net/wp-content/uploads/2021/05/Bet-MGM-500x318.png",
          },
        ],
      },
      adList: [
        // {
        //   roll: "preRoll",
        //   vastTag: "/static/google.xml",
        // },
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
        // {
        //   roll: "midRoll",
        //   vastTag: "/static/vast_hls.xml",
        //   fallbackVastTags: ["/static/google.xml", "/static/vast_hls.xml"],
        //   timer: 60,
        // },
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
        src={"http://127.0.0.1:5501/index.html"}
        title={"Welcome to"}
        width={window.innerWidth - 200}
        height={((window.innerWidth - 100) * 9) / 16}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen"
        onLoad={() => {
          const data = {
            source: "Zatlive",
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
          iframeWindow?.postMessage(JSON.parse(JSON.stringify(data)), "*");
        }}
        frameBorder={0}
      />
    </>
  );
}

export default IframePlayer;
