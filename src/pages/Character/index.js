import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Zoom } from 'react-reveal';
import NotFound from '../NotFound';
import Gallery from '../../components/Gallery';
import { Avatar, Description, Images, Links } from './styles';
import characters from './data.json';

const ZOOM_DURATION = 750;

const SocialIconLink = (props) => {
  let Icon;
  if (props.type === 'twitch') {
    Icon = FaIcons.FaTwitch;
  } else if (props.type === 'twitter') {
    Icon = FaIcons.FaTwitter;
  } else if (props.type === 'youtube') {
    Icon = FaIcons.FaYoutube;
  } else {
    return null;
  }
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      title={props.title}
    >
      <Icon />
    </a>
  );
};

const Character = () => {
  const { id } = useParams();
  const character = characters[id];
  if (!character) {
    return <NotFound />;
  }
  return (
    <Zoom cascade duration={ZOOM_DURATION}>
      <Avatar src={character.avatar} />
      <h1>{character.name}</h1>
      <Description>{character.description}</Description>
      <Links>
        {Object.keys(character.links).map((type, i) => (
          <SocialIconLink
            key={i}
            type={type}
            url={character.links[type]}
            title={type}
          />
        ))}
      </Links>
      <Images>
        <Gallery items={character.gallery} />
      </Images>
    </Zoom>
  );
};

export default Character;
