import React, { FC, useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import leviajere from "../assets/leviajere.png";
import portfolio from "../assets/portfolio.png";
import kaan from "../assets/kaan.png";
import glapp from "../assets/glapp.png";
import "swiper/css";
import "swiper/css/pagination";
import { LanguageContext } from "../contexts/LanguageContext";

const works = [
  {
    img: leviajere,
    href: "https://leviajere.z20.web.core.windows.net",
    title: "Le Viajere App",
    subtitle: "Landing page",
  },
  {
    img: kaan,
    href: "https://www.kaantechnologies.com/",
    title: "Ka'an Technologies",
    subtitle: "Landing page",
  },
  {
    img: glapp,
    title: "Glapp",
    subtitle: "Web application",
  },
  {
    img: portfolio,
    href: "https://erik-developer.vercel.app",
    title: "Erik's Portfolio",
    subtitle: "Landing page",
  },
];

SwiperCore.use([Pagination, Autoplay]);

const WorksContainer = styled(Box)(({ theme }) => ({
  /*   backgroundColor: "lightblue", */
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: 350,
  height: 350,
  overflow: "hidden",
  borderRadius: 20,
  margin: "auto",
  filter: "grayscale(100%)",
  transition: "all 500ms",
  "& span": {
    height: "100% !important",
    width: "100% !important",
    "& img": {
      objectFit: "cover",
      objectPosition: "left",
      transition: "all 500ms",
    },
  },
  "&:hover": {
    filter: "grayscale(0%)",
    "& img": {
      transform: "scale(1.1)",
    },
  },
  [theme.breakpoints.down(1200)]: {
    width: 300,
    height: 300,
  },
  [theme.breakpoints.down(1050)]: {
    width: 250,
    height: 250,
  },
  [theme.breakpoints.down(880)]: {
    width: 280,
    height: 280,
  },
  [theme.breakpoints.down(670)]: {
    width: 240,
    height: 240,
  },
  [theme.breakpoints.down(670)]: {
    width: 280,
    height: 280,
  },
  [theme.breakpoints.down(450)]: {
    width: 250,
    height: 250,
  },
  [theme.breakpoints.down(350)]: {
    width: 220,
    height: 220,
  },
}));

interface WorkSlideProps {
  href?: string;
  img: string | StaticImageData;
  title: string;
  subtitle: string;
}

const WorkSlide: FC<WorkSlideProps> = (props) => {
  return (
    <>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <ImageContainer>
          <Image src={props.img} priority />
        </ImageContainer>
      </a>
      <Typography
        mt={1}
        variant="subtitle2"
        align="center"
        color="text.disabled"
      >
        {props.subtitle}
      </Typography>
      <Typography variant="h6" align="center">
        {props.title}
      </Typography>
    </>
  );
};

export const WorksSection = () => {
  const theme = useTheme();
  const langContext = useContext(LanguageContext);
  return (
    <WorksContainer
      id="works"
      className={
        theme.palette.mode !== "light"
          ? "works-container-light"
          : "works-container-dark"
      }
    >
      <Typography
        align="center"
        variant="h2"
        sx={{ marginBottom: { xs: 5, sm: 9 } }}
      >
        {langContext.state.content.worksSection.title}
      </Typography>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        spaceBetween={50}
        slidesPerView={3}
        style={{ paddingBottom: 50 }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          "100": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "650": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "880": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {works.map((w: any) => (
          <SwiperSlide key={w.title}>
            <WorkSlide
              img={w.img}
              href={w.href}
              title={w.title}
              subtitle={w.subtitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </WorksContainer>
  );
};
