export type VideoProps = {
  title: string;
  caption: {
    img: {
      link: string;
    };
  };
  uploadTime: string;
  link: string;
};

export const Videos: VideoProps[] = [
  {
    title: "me has destrozado la moto - bromita #20",
    caption: {
      img: {
        link: "https://i.ytimg.com/vi/53Jg87XT8aY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_ZL_sN_Lt89kyNT2ph9YyIvwmvg",
      },
    },
    uploadTime: "4 horas",
    link: "https://www.youtube.com/watch?v=53Jg87XT8aY&t=1s",
  },
];
