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
    path: 'pricing',
    title: 'Buy MCRT Safely | MagicCraft',
    description:
      'Review official MCRT access paths, contract details, network requirements and external exchange risks before choosing a provider.',
  },
]

function replaceRequired(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find ${label} in dist/index.html`)
  }
  return html.replace(pattern, replacement)
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
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`,
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

  return html
}

const baseHtml = await readFile(join(distRoot, 'index.html'), 'utf8')

for (const route of routeShells) {
  const outputPath = join(distRoot, route.path, 'index.html')
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, routeHtml(baseHtml, route))
}

console.log(`Generated ${routeShells.length} route-specific HTML shells.`)
