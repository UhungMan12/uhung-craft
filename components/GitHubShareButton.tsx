import * as React from 'react'

import styles from './styles.module.css'

export const GitHubShareButton: React.FC = () => {
  return (
    <a
      href='https://discord.gg/HZABc48V7j'
      target='_blank'
      rel='noopener noreferrer'
      className={styles.githubCorner}
      aria-label='View source on GitHub'
    >
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        style={{
          fill: '#5865F2',
          color: '#fff',
          position: 'absolute',
          zIndex: 1001,
          top: 0,
          right: 0,
          border: 0,
          transform: 'scale(1, 1)'
        }}
        aria-hidden='true'
      >
        <path d='M0,0l36.8,36.8L40,40l5.4,5.4L80,80V0H0z' />

        <path
          d='M77.7,29.6C76.6,26.2,75,23,73,20c-0.9,0.2-1.8,0.4-2.7,0.6c-2.1-3.2-4.7-6.1-7.6-8.6
          c0.4-0.8,0.7-1.7,0.9-2.6c-2.8-2.3-5.8-4.3-9-5.8C43.7,4.5,36.1,8.9,30.5,15.1l0,0c0.6,4.6,2.1,9.1,4.2,13.3
          c1.6-0.1,3.2-0.3,4.8-0.6c-0.6-1.4-1.1-2.9-1.5-4.4c0.4,0.1,0.8,0.2,1.2,0.3c2.8,8.3,9,15.2,16.9,18.9c0,0.4,0.1,0.8,0.2,1.3
          c-1.5-0.5-2.9-1.2-4.2-2c-0.5,1.5-0.9,3.1-1.1,4.7c4,2.6,8.3,4.5,12.7,5.7l0,0C71.5,46.5,75.9,38.8,77.7,29.6z M45.3,24
          c-1.6-1.8-1.5-4.7,0.4-6.4c1.9-1.7,4.7-1.5,6.4,0.4c1.7,1.9,1.5,4.8-0.4,6.4C49.8,26,47,25.9,45.3,24z M56.4,36.5
          c-1.6-1.8-1.5-4.7,0.4-6.4c1.9-1.7,4.7-1.5,6.4,0.4c1.7,1.9,1.5,4.8-0.4,6.4C60.9,38.4,58.1,38.3,56.4,36.5z'
          fill='currentColor'
          className={styles.octoBody}
        />
      </svg>
    </a>
  )
}
