import HomeButton from "./homeButton"
import styles from "../page.module.css"
import workStyles from "./work.module.css"
import Image from "next/image";
import Grid from '@mui/material/Unstable_Grid2';

interface LabelValue {
    label: string;
    value: string;
    id: number;
}

type Descriptors = LabelValue[]

function WorkLayout({
  title,
  details,
  img_src,
  img_alt,
  children,
}: Readonly<{
  title: string;
  details: Descriptors;
  img_src: string;
  img_alt: string;
  children: React.ReactNode;
}>) {
  return (
    <main className={workStyles.main}>
      <HomeButton />
      <h1>{title}</h1>
      <Image
        src={img_src}
        sizes="100vw"
        width={1600}
        height={900}
        alt={img_alt}
        className={workStyles.headerImg}
      />
      <Grid container rowSpacing={3} className = {workStyles.details} style={{width: "80%"}} justifyContent="space-between" >
        {details.map((detail : LabelValue) => 
          <Grid xs={12} sm={6} md={3} key={detail.id}>
            <h2>{detail.label}</h2>
            <p>{detail.value}</p>
          </Grid>
        )}
      </Grid>
      {children}
    </main>
  );
}

function CaptionedImage({
  img_src,
  img_alt,
  caption,
}: Readonly<{
  img_src: string;
  img_alt: string;
  caption: string;
}>) {
  return (
    <span className={workStyles.imgSection}>
        <Image
            src={img_src}
            sizes="100vw"
            width={800}
            height={400}
            alt={img_alt}
            className={workStyles.bodyImg}
        />
        <p className={workStyles.caption}>
          {caption}
        </p>
    </span>
  );
}

function Video({
  vid_src,
  vid_alt,
}: Readonly<{
  vid_src: string;
  vid_alt: string;
}>) {
  return (
    <span className={workStyles.imgSection}>
        <iframe
            src={vid_src}
            // width={}
            // height={400}
            title={vid_alt}
            className={workStyles.bodyVid}
            allowFullScreen
        />
    </span>
  );
}

export { WorkLayout, CaptionedImage, Video }