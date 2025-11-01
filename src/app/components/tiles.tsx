import tileStyles from "./tiles.module.css"
import LaunchIcon from '@mui/icons-material/Launch';
import Stack from '@mui/material/Stack';
import React from "react";


function ExpTile({
  org,
  link,
  loc,
  position,
  date,
  children,
}: Readonly<{
  org: string;
  link: string;
  loc: string;
  position: string;
  date: string;
  children: React.ReactNode;
}>) {
  return (
    <span className={tileStyles.tile}>
      <span className={tileStyles.split}>
        <span className={tileStyles.title}>
            <HyperLink 
              text=<h2>{org}</h2>
              href={link}
            />

          <h3>{position}</h3>
        </span>
        
        <span className={tileStyles.info}>
          <i>{loc}</i>
          <i>{date}</i>
        </span>
      </span>

      {children}

    </span>
  );
}

function ProjTile({
  name,
  ext,
  children,
}: Readonly<{
  name: string;
  ext: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <span className={tileStyles.tile}>
      <span className={tileStyles.split}>
        <span className={tileStyles.title}>
            <h2>{name}</h2>
        </span>
        
        <span className={tileStyles.info}>
          {ext}
        </span>
      </span>
      {children}
    </span>
  );
}

function HyperLink({
  text,
  href,
}: Readonly<{
  text: React.ReactNode;
  href: string;
}>) {
  return (
    <a
      href={href}
      target="_blank"
      className={tileStyles.hypertext}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {text} <LaunchIcon className={tileStyles.svg}/>
      </Stack>
    </a>
  )
}

export {ExpTile, ProjTile, HyperLink}