import React from 'react';
import styled from 'styled-components';

const SocialIcons = () => {
  return (
    <StyledWrapper>
      <ul className="example-2">
        <li className="icon-content">
          <a href="https://github.com/KGFCH2" aria-label="GitHub" data-social="github" target="_blank" rel="noopener noreferrer">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">GitHub</div>
        </li>
        <li className="icon-content">
          <a href="https://www.linkedin.com/in/babinbid123" aria-label="LinkedIn" data-social="linkedin" target="_blank" rel="noopener noreferrer">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
        <li className="icon-content">
          <a href="mailto:babinbid05@gmail.com" aria-label="Email" data-social="email">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">Email</div>
        </li>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .example-2 .icon-content {
    margin: 0 8px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -42px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px) scale(1.1);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 24px;
    height: 24px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="linkedin"] .filled,
  .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0274b3;
  }

  .example-2 .icon-content a[data-social="github"] .filled,
  .example-2 .icon-content a[data-social="github"] ~ .tooltip {
    background-color: #24262a;
  }
  .example-2 .icon-content a[data-social="email"] .filled,
  .example-2 .icon-content a[data-social="email"] ~ .tooltip {
    background-color: #ea4335;
  }`;

export default SocialIcons;