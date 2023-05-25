import React from 'react';
import './links.scss';

export default function Links({ fn }) {
  return (
    <ul>
      {fn.links.map((link) => (
        <li key={link.id}>
          <h2>{link.name}</h2>
          <p>{link.description}</p>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            Go to website
          </a>
          <button onClick={() => fn.getUrlByID(link.id)}>edit</button>
          <button onClick={() => fn.deleteUrl(link.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
