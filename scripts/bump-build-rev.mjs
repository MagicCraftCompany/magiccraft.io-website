import fs from 'node:fs'
import path from 'node:path'

const versionFile = path.resolve(process.cwd(), 'src', 'version.ts')

const src = fs.readFileSync(versionFile, 'utf8')
const match = src.match(/export const BUILD_REV = (\d+)/)

if (!match) {
  console.error(`Could not find BUILD_REV in ${versionFile}`)
  process.exit(1)
}

const current = Number(match[1])
if (!Number.isFinite(current)) {
  console.error(`Invalid BUILD_REV value: ${match[1]}`)
  process.exit(1)
}

const next = current + 1
const out = src.replace(/export const BUILD_REV = \d+/, `export const BUILD_REV = ${next}`)
fs.writeFileSync(versionFile, out, 'utf8')

console.log(`BUILD_REV bumped: ${current} -> ${next}`)

