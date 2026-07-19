import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = join(projectRoot, 'dist')

const routeShells = [
  {
    path: 'magiccraft',
    title: 'MagicCraft Game | Free PvP & PvE on Mobile and PC',
    description:
      'Play MagicCraft free across mobile and PC. Explore established team PvP, the newer PvE adventure system, heroes and official platform links.',
  },
  {
    path: 'stats',
    title: 'Live Game Stats | MagicCraft',
    description:
      'Review source-backed MagicCraft lobby totals and MCRT market data, with unavailable season fields clearly identified instead of estimated.',
  },
  {
    path: 'whitepaper',
    title: 'MagicCraft Whitepaper v3.3 | Product & System Guide',
    description:
      'Read the dated MagicCraft guide to the live game, AI products, Web3 functions, builder systems, MCRT utility and current limitations.',
  },
  {
    path: 'lobbies',
    title: 'Live Match Schedule | MagicCraft Lobbies',
    description:
      'Browse the live MagicCraft Web3 lobby schedule without connecting a wallet, then review the official entry and reward terms before joining.',
  },
  {
    path: 'buy-mcrt',
    title: 'Buy MCRT Safely | MagicCraft',
    description:
      'Review official MCRT access paths, contract details, network requirements and external exchange risks before choosing a provider.',
  },
  {
    path: 'chooseyourhero',
    title: 'MagicCraft Heroes | Choose Your Hero',
    description:
      'Explore the MagicCraft hero roster and choose a character for the live game.',
  },
  {
    path: 'faq',
    title: 'MagicCraft FAQ | Game, MCRT and Support',
    description:
      'Find clear answers about the MagicCraft game, optional Web3 features, MCRT and official support.',
  },
  {
    path: 'patch',
    title: 'MagicCraft Patch Notes | Game Updates',
    description:
      'Review MagicCraft game updates and patch information from official sources.',
  },
  {
    path: 'news',
    title: 'MagicCraft News | Official Updates',
    description:
      'Read official MagicCraft game, ecosystem and product updates.',
  },
  {
    path: 'build-on-magiccraft',
    title: 'Build on MagicCraft | Developer Resources',
    description:
      'Review MagicCraft builder resources, integrations and official ways to develop with the ecosystem.',
  },
  {
    path: 'server',
    title: 'MagicCraft Service Status',
    description:
      'Check the current availability of MagicCraft game and ecosystem services.',
  },
  {
    path: 'terms',
    title: 'MagicCraft Terms and Conditions',
    description: 'Read the terms and conditions governing MagicCraft services.',
  },
  {
    path: 'privacypolicy',
    title: 'MagicCraft Privacy Policy',
    description:
      'Read how MagicCraft handles personal information and privacy rights.',
  },
  {
    path: 'disclaimer',
    title: 'MagicCraft Disclaimer',
    description:
      'Review important limitations, risks and legal information for MagicCraft services.',
  },
  {
    path: 'leaderboard',
    title: 'MagicCraft Leaderboard',
    description:
      'Open the official MagicCraft leaderboard experience and related game links.',
  },
  {
    path: 'topholders',
    title: 'MCRT Top Holders | MagicCraft',
    description:
      'Review the MagicCraft MCRT holder information presented by the official site.',
  },
  {
    path: 'bounties',
    title: 'MagicCraft Bounties',
    description:
      'Review current MagicCraft builder and community bounty information.',
  },
  {
    path: 'grants',
    title: 'MagicCraft Grants | Build With the Ecosystem',
    description:
      'Review MagicCraft grant criteria and submit a project for consideration.',
  },
  {
    path: 'careers',
    title: 'MagicCraft Careers',
    description:
      'Explore current ways to work with the MagicCraft team and ecosystem.',
  },
  {
    path: 'guilds',
    title: 'MagicCraft Guilds',
    description:
      'Explore MagicCraft guild information and official community paths.',
  },
]

function replaceRequired(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find ${label} in dist/index.html`)
  }
  return html.replace(pattern, replacement)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function routeHtml(baseHtml, route) {
  const canonical = `https://magiccraft.io/${route.path}`
  let html = baseHtml

  html = replaceRequired(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${route.title}</title>`,
    'title'
  )
  html = replaceRequired(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${route.description}" />`,
    'description'
  )
  html = replaceRequired(
    html,
    /<link rel="canonical" href="[^"]*"[^>]*\/>/,
    `<link rel="canonical" href="${canonical}" data-rh="true" />`,
    'canonical'
  )
  html = replaceRequired(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${route.title}" />`,
    'Open Graph title'
  )
  html = replaceRequired(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${route.description}" />`,
    'Open Graph description'
  )
  html = replaceRequired(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonical}" />`,
    'Open Graph URL'
  )
  html = replaceRequired(
    html,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${route.title}" />`,
    'Twitter title'
  )
  html = replaceRequired(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${route.description}" />`,
    'Twitter description'
  )
  html = replaceRequired(
    html,
    /(<h1 data-static-page-title>)[\s\S]*?(<\/h1>)/,
    `$1${escapeHtml(route.title)}$2`,
    'static page heading'
  )
  html = replaceRequired(
    html,
    /(<p data-static-page-description>)[\s\S]*?(<\/p>)/,
    `$1${escapeHtml(route.description)}$2`,
    'static page description'
  )

  return html
}

const baseHtml = await readFile(join(distRoot, 'index.html'), 'utf8')

for (const route of routeShells) {
  const outputPath = join(distRoot, route.path, 'index.html')
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, routeHtml(baseHtml, route))
}

let notFoundHtml = baseHtml
notFoundHtml = replaceRequired(
  notFoundHtml,
  /<title>[\s\S]*?<\/title>/,
  '<title>404 - Page Not Found | MagicCraft</title>',
  '404 title'
)
notFoundHtml = replaceRequired(
  notFoundHtml,
  /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
  '<meta name="description" content="The requested MagicCraft page does not exist." />',
  '404 description'
)
notFoundHtml = replaceRequired(
  notFoundHtml,
  /\s*<link rel="canonical" href="[^"]*"[^>]*\/>/,
  '',
  '404 canonical'
)
notFoundHtml = replaceRequired(
  notFoundHtml,
  /<meta name="robots" content="[^"]*"\s*\/>/,
  '<meta name="robots" content="noindex,nofollow" />',
  '404 robots'
)
await writeFile(join(distRoot, '404.html'), notFoundHtml)

console.log(
  `Generated ${routeShells.length} route-specific HTML shells and 404.html.`
)
