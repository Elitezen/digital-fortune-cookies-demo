import { useEffect, useState } from "react";
import $ from 'jquery';
import './Cookie.css';

const API_LINK = 'https://digital-fortune-cookies-api.herokuapp.com/fortune';

export default function Cookie() {
  function generateCookie() {
    fetch(API_LINK)
      .then(res => res.json())
      .then(data => setCookie(data.cookie))
      .catch(console.error);
  }

  const [cookie, setCookie] = useState(null);
  
  const fortune = cookie?.fortune || 'Your cookie awaits';
  const luckyNumbers = cookie?.luckyNumbers 
    ? `Lucky Numbers: ${cookie.luckyNumbers.join(', ')}`
    : 'Click the button below';

  return (
    <div id="cookie">
      <span id="fortune-text">{fortune}</span>
      <span id="fortune-numbers">{luckyNumbers}</span>

      <button onClick={() => generateCookie()}>
        Generate a Cookie!
      </button>
    </div>
  );
}