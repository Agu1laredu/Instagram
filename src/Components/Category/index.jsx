/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Anchor, Image } from './styles.jsx';

const DEFAUL_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg';

export const Category = ({ cover = DEFAUL_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt="" />
    {emoji}
  </Anchor>
);
