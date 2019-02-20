import React from 'react';

export default ({ children, title, ...props }) => (
  <div>
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1372}
      height={780}
      viewBox="0 0 1372 780"
      {...props}
    >
      <defs>
        <rect id="b" width={1280} height={688} y={32} rx={8} />
        <filter
          id="a"
          width="110.8%"
          height="120.1%"
          x="-5.4%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={8}
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={15}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.12 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(46 14)">
        <use fill="#000" fillRule="nonzero" filter="url(#a)" xlinkHref="#b" />
        <rect
          width={1280}
          height={720}
          fill="#202124"
          fillRule="nonzero"
          rx={8}
        />
        <polygon
          fill="#9AA0A6"
          fillRule="nonzero"
          points="340 25 340 20 342 20 342 25 347 25 347 27 342 27 342 32 340 32 340 27 335 27 335 25"
        />
        <g transform="translate(0 9)">
          <path
            fill="#323639"
            fillRule="nonzero"
            d="M0 34h71a8 8 0 0 0 8-8V8a8 8 0 0 1 8-8h224a8 8 0 0 1 8 8v18a8 8 0 0 0 8 8h953v36H0V34z"
          />
          <path
            fill="#F2F3F3"
            fillRule="nonzero"
            d="M1258.5 59a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
          />
          <circle cx={1225} cy={52} r={10} fill="#202124" fillRule="nonzero" />
          <g transform="translate(110 38)">
            <rect
              width={1093}
              height={28}
              fill="#282C2E"
              fillRule="nonzero"
              rx={14}
            />
            <path
              fill="#F2F3F3"
              fillOpacity=".8"
              fillRule="nonzero"
              d="M1072.025 13.392h-2.548l1.94 2.009-.68 2.814 2.763-1.43 2.762 1.43-.679-2.814 1.94-2.01h-2.548l-1.475-3.055-1.475 3.056zM1073.5 7l2.366 4.9H1081l-3.822 3.958L1078.42 21l-4.919-2.548-4.92 2.548 1.242-5.142L1066 11.9h5.134L1073.5 7z"
            />
            <text
              fill="#FFF"
              fontFamily="Roboto-Medium, Roboto"
              fontSize={12}
              fontWeight={400}
            >
              <tspan x={27} y={18}>
                {title.url}
              </tspan>
            </text>
            <path
              fill="#F2F3F3"
              fillRule="nonzero"
              d="M16 12h4v-1a2 2 0 1 0-4 0v1zm5 0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1v-1a3 3 0 0 1 6 0v1z"
            />
          </g>
          <g fillRule="nonzero" transform="translate(78 43)">
            <rect width={18} height={18} />
            <path
              fill="#F2F3F3"
              d="M13.95 4.05L16 2v6h-6l2.536-2.536A5 5 0 1 0 13.9 10h2.03A7.002 7.002 0 0 1 2 9a7 7 0 0 1 11.95-4.95z"
            />
          </g>
          <g fillRule="nonzero" transform="translate(46 43)">
            <rect width={18} height={18} />
            <polygon
              fill="#848889"
              points="12.381 8 8 3.4 9.333 2 16 9 9.333 16 8 14.6 12.381 10 2 10 2 8"
            />
          </g>
          <g fillRule="nonzero" transform="translate(14 43)">
            <rect width={18} height={18} />
            <polygon
              fill="#F2F3F3"
              points="5.619 8 16 8 16 10 5.619 10 10 14.6 8.667 16 2 9 8.667 2 10 3.4"
            />
          </g>
          <g transform="translate(91 7)">
            <polygon
              fill="#9AA0A6"
              fillRule="nonzero"
              points="210.667 9 208 6.333 209.333 5 212 7.667 214.667 5 216 6.333 213.333 9 216 11.667 214.667 13 212 10.333 209.333 13 208 11.667"
            />
            <text
              fill="#FFF"
              fontFamily="Roboto-Medium, Roboto"
              fontSize={12}
              fontWeight={400}
            >
              <tspan x={23} y={14}>
                {title.title}
              </tspan>
            </text>
            <text
              fill="#FFF"
              fontFamily="AppleColorEmoji, Apple Color Emoji"
              fontSize={12}
            >
              <tspan x={0} y={15}>
                🎉
              </tspan>
            </text>
          </g>
        </g>
        <g fillRule="nonzero" transform="translate(14 16)">
          <circle cx={6} cy={6} r={6} fill="#FF5F57" />
          <circle cx={26} cy={6} r={6} fill="#FFBD2E" />
          <circle cx={46} cy={6} r={6} fill="#27C940" />
        </g>
        <rect width={1279} height={719} x=".5" y=".5" stroke="#202124" rx={8} />
      </g>
    </svg>
    {children}
  </div>
);
