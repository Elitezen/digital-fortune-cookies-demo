import './Links.css';

const links = {
  GITHUB_API: 'https://github.com/Elitezen/digital-fortune-cookies-api',
  GITHUB_WEBSITE: 'https://github.com/Elitezen/digital-fortune-cookies-demo',
  NPM_PACKAGE: 'https://www.npmjs.com/package/fortune-cookie-generator'
};

export default function Links() {
  return (
    <div id="links">
      <ul>
        <li>
          <a href={links.GITHUB_API}>API GitHub</a>
        </li>
        <li>
          <a href={links.GITHUB_WEBSITE}>Website GitHub</a>
        </li>
        <li>
          <a href={links.NPM_PACKAGE}>NPM Package</a>
        </li>
      </ul>
    </div>
  );
}