import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { categories } from '../src/data/plants.js'

const here = path.dirname(fileURLToPath(import.meta.url))
const outputDir = path.resolve(here, '../public/plants')

const palettes = [
  { bg1: '#eef7e8', bg2: '#d4e9ce', leaf: '#3d8b5f', dark: '#246540', pot: '#d9825b', rim: '#c36e4b' },
  { bg1: '#f2f6e6', bg2: '#dfe9c8', leaf: '#6a9b4e', dark: '#487533', pot: '#c87452', rim: '#ac603f' },
  { bg1: '#e9f5f1', bg2: '#cde7df', leaf: '#2f8f76', dark: '#1e6a58', pot: '#d39163', rim: '#bb7a50' },
  { bg1: '#f6f0e4', bg2: '#e9ddc6', leaf: '#7a9b52', dark: '#587a38', pot: '#b96a4d', rim: '#9e563c' },
  { bg1: '#edf3ea', bg2: '#d8e8d6', leaf: '#4d9567', dark: '#32724a', pot: '#cf8261', rim: '#b46b4e' },
  { bg1: '#f4f1e8', bg2: '#e5dfcd', leaf: '#5c8f45', dark: '#3f6d30', pot: '#d18a63', rim: '#b6714f' },
]

function hashString(value) {
  let hash = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function seededRandom(seed) {
  let state = seed
  return () => {
    state += 0x6d2b79f5
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function createPlantSvg(plant, index) {
  const palette = palettes[index % palettes.length]
  const random = seededRandom(hashString(plant.id))
  const leafCount = 8 + Math.floor(random() * 4)
  const spread = 130 + Math.floor(random() * 60)
  const firstAngle = -spread / 2

  const leaves = Array.from({ length: leafCount }, (_, leafIndex) => {
    const angle = firstAngle + (spread / (leafCount - 1)) * leafIndex + (random() - 0.5) * 14
    const rx = 19 + random() * 12
    const ry = 55 + random() * 28
    const cy = 148 - random() * 22
    const fill = leafIndex % 2 === 0 ? palette.leaf : palette.dark
    return `    <ellipse cx="200" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" transform="rotate(${angle.toFixed(1)} 200 248)" fill="${fill}" stroke="${palette.dark}" stroke-width="3" />`
  }).join('\n')

  const innerLeaves = Array.from({ length: 3 }, (_, leafIndex) => {
    const angle = -28 + leafIndex * 28 + (random() - 0.5) * 10
    const rx = 13 + random() * 6
    const ry = 38 + random() * 12
    return `    <ellipse cx="200" cy="190" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" transform="rotate(${angle.toFixed(1)} 200 248)" fill="${palette.leaf}" opacity="0.92" />`
  }).join('\n')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="Illustration of ${plant.name}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.bg1}" />
      <stop offset="1" stop-color="${palette.bg2}" />
    </linearGradient>
    <linearGradient id="pot" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${palette.rim}" />
      <stop offset="0.45" stop-color="${palette.pot}" />
      <stop offset="1" stop-color="${palette.rim}" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)" />
  <circle cx="200" cy="186" r="142" fill="#ffffff" opacity="0.35" />
  <g opacity="0.18" fill="${palette.dark}">
    <circle cx="56" cy="64" r="10" />
    <circle cx="342" cy="96" r="7" />
    <circle cx="330" cy="312" r="12" />
  </g>
  <g stroke-linecap="round">
${leaves}
${innerLeaves}
  </g>
  <path d="M200 246 L200 284" stroke="${palette.dark}" stroke-width="9" stroke-linecap="round" />
  <path d="M142 268 H258 L244 350 Q200 366 156 350 Z" fill="url(#pot)" />
  <path d="M158 300 Q200 314 242 300 L244 350 Q200 366 156 350 Z" fill="#000000" opacity="0.07" />
  <rect x="132" y="252" width="136" height="22" rx="9" fill="${palette.rim}" />
  <rect x="140" y="256" width="120" height="5" rx="2.5" fill="#ffffff" opacity="0.25" />
</svg>
`
}

await mkdir(outputDir, { recursive: true })

const plants = categories.flatMap((category) => category.plants)
await Promise.all(
  plants.map((plant, index) =>
    writeFile(path.join(outputDir, `${plant.id}.svg`), createPlantSvg(plant, index), 'utf8'),
  ),
)

console.log(`Generated ${plants.length} plant thumbnails in ${outputDir}`)
