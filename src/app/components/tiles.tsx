import tileStyles from "./tiles.module.css"
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
      <Stack direction={{md: 'column', lg: 'row'}} justifyContent={{md: "space-between"}}>
        <span className={tileStyles.title}>
          <h2>
            <HyperLink 
              text={org}
              href={link}
            />
          </h2>

          <h3>{position}</h3>
        </span>
        
        <Box className={tileStyles.info} sx={{alignItems: {md: 'flex-start', lg: 'flex-end'}}}>
          <i>{loc}</i>
          <i>{date}</i>
        </Box>
      </Stack>

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
      <Stack direction={{sm: 'column', md: 'row'}} alignItems="center" justifyContent={{md: "space-between"}}>
        <span className={tileStyles.title}>
            <h2>{name}</h2>
        </span>
        
        <span className={tileStyles.info}>
          {ext}
        </span>
      </Stack>
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
    <span style={{display: 'inline-block'}}>
      <a
        href={href}
        target="_blank"
        className={tileStyles.hypertext}
      >
        {/* <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center', whiteSpace: 'initial'}}> */}
          <Typography variant='inherit'>
            {text} <LaunchIcon fontSize="inherit"/>
          </Typography>
        {/* </span> */}
      </a>
    </span>
  )
}

function IconHyperLink({
  text,
  href,
  icon,
}: Readonly<{
  text: React.ReactNode;
  href: string;
  icon: React.ReactNode;
}>) {
  return (
    <a
      href={href}
      target="_blank"
      className={tileStyles.hypertext}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {text} <span className={tileStyles.svg}>{icon}</span>
      </Stack>
    </a>
  )
}

function TextButtonLink({
  href,
  text,
  icon,
}: Readonly<{
  href: string;
  text: string;
  icon: React.ReactNode
}>) {
  return (
   <a 
    className={tileStyles.button}
    href={href}
    target="_blank"
    >
      {icon} <p>{text}</p>
    </a>
  )
}

function GithubProjLink({
  href,
}: Readonly<{
  href: string;
}>) {
  return (
    <TextButtonLink 
      href={href}
      text="Github Link"
      icon={<GitHubIcon />}
    />
  )
}

function ReportLink({
  href,
}: Readonly<{
  href: string;
}>) {
  return (
    <TextButtonLink 
      href={href}
      text="Report"
      icon={<TextSnippetIcon />}
    />
  )
}

function DriveLink({
  href,
}: Readonly<{
  href: string;
}>) {
  return (
    <TextButtonLink 
      href={href}
      text="Google Drive Link"
      icon={<AddToDriveIcon />}
    />
  )
}

export {ExpTile, ProjTile, HyperLink, IconHyperLink, TextButtonLink, GithubProjLink, ReportLink, DriveLink}