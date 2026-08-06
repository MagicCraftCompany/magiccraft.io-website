import type { ReactNode } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  getSafeSanityImageUrl,
  getSafePortableTextLink,
  sanityImageUrlFromReference,
} from '@/lib/sanity/portableText'

export interface SanityMarkDefinition {
  _key: string
  _type: string
  href?: string
}

export interface SanityTextChild {
  _key?: string
  _type: string
  text: string
  marks?: string[]
}

export interface SanityBlock {
  _key?: string
  _type: string
  children?: SanityTextChild[]
  markDefs?: SanityMarkDefinition[]
  style?: string
  listItem?: 'bullet' | 'number'
  level?: number
  alt?: string
  asset?: {
    _ref?: string
    url?: string
  }
}

interface ListNode {
  block: SanityBlock
  key: string
  children: ListNode[]
}

function renderPortableLink(
  definition: SanityMarkDefinition,
  children: ReactNode,
  key: string
) {
  const link = getSafePortableTextLink(definition.href)
  if (!link) return <Fragment key={key}>{children}</Fragment>

  const className =
    'font-semibold text-[#98FFF9] underline decoration-[#98FFF9]/35 underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]'

  if (link.kind === 'internal') {
    return (
      <Link key={key} to={link.href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a
      key={key}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

function renderSpan(child: SanityTextChild, block: SanityBlock) {
  let content: ReactNode = child.text

  for (const [index, mark] of (child.marks || []).entries()) {
    const key = `${child._key || child.text}-${mark}-${index}`
    if (mark === 'strong') {
      content = (
        <strong key={key} className="font-bold text-white">
          {content}
        </strong>
      )
      continue
    }
    if (mark === 'em') {
      content = <em key={key}>{content}</em>
      continue
    }
    if (mark === 'code') {
      content = (
        <code
          key={key}
          className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-[#D8C9FF]"
        >
          {content}
        </code>
      )
      continue
    }
    if (mark === 'underline') {
      content = <span className="underline">{content}</span>
      continue
    }

    const definition = block.markDefs?.find((item) => item._key === mark)
    if (definition?._type === 'link') {
      content = renderPortableLink(definition, content, key)
    }
  }

  return (
    <Fragment key={child._key || `${child.text}-${child.marks?.join('-')}`}>
      {content}
    </Fragment>
  )
}

function renderInlineContent(block: SanityBlock) {
  return block.children?.map((child) => renderSpan(child, block)) || null
}

function listTree(blocks: SanityBlock[]) {
  const roots: ListNode[] = []
  const parents: ListNode[] = []

  blocks.forEach((block, index) => {
    const node: ListNode = {
      block,
      key: block._key || `list-item-${index}`,
      children: [],
    }
    const requestedLevel = Math.max(1, Math.floor(block.level || 1))
    const level = Math.min(requestedLevel, parents.length + 1)

    if (level === 1 || !parents[level - 2]) {
      roots.push(node)
      parents.length = 0
      parents[0] = node
      return
    }

    parents[level - 2].children.push(node)
    parents[level - 1] = node
    parents.length = level
  })

  return roots
}

function renderListGroups(nodes: ListNode[], depth = 0): ReactNode[] {
  const groups: ReactNode[] = []
  let start = 0

  while (start < nodes.length) {
    const type = nodes[start].block.listItem === 'number' ? 'number' : 'bullet'
    let end = start + 1
    while (
      end < nodes.length &&
      (nodes[end].block.listItem === 'number' ? 'number' : 'bullet') === type
    ) {
      end += 1
    }

    const Tag = type === 'number' ? 'ol' : 'ul'
    const group = nodes.slice(start, end)
    groups.push(
      <Tag
        key={`${depth}-${group[0].key}`}
        className={`space-y-2 pl-6 text-[17px] leading-8 text-white/75 ${
          type === 'number' ? 'list-decimal' : 'list-disc marker:text-[#98FFF9]'
        } ${depth > 0 ? 'mt-3' : 'my-6'}`}
      >
        {group.map((node) => (
          <li key={node.key}>
            {renderInlineContent(node.block)}
            {node.children.length > 0
              ? renderListGroups(node.children, depth + 1)
              : null}
          </li>
        ))}
      </Tag>
    )
    start = end
  }

  return groups
}

function renderTextBlock(block: SanityBlock, key: string) {
  const content = renderInlineContent(block)
  if (!content) return null

  switch (block.style) {
    case 'h1':
    case 'h2':
      return (
        <h2
          key={key}
          className="mt-12 font-serif text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl"
        >
          {content}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={key}
          className="mt-10 text-2xl font-bold leading-tight text-white sm:text-3xl"
        >
          {content}
        </h3>
      )
    case 'h4':
      return (
        <h4 key={key} className="mt-8 text-xl font-bold text-white sm:text-2xl">
          {content}
        </h4>
      )
    case 'blockquote':
      return (
        <blockquote
          key={key}
          className="my-8 border-l-2 border-[#98FFF9] bg-white/[0.04] px-5 py-4 text-xl italic leading-8 text-white/85"
        >
          {content}
        </blockquote>
      )
    default:
      return (
        <p key={key} className="text-[17px] leading-8 text-white/75 sm:text-lg">
          {content}
        </p>
      )
  }
}

function renderImageBlock(block: SanityBlock, key: string, index: number) {
  const imageUrl =
    getSafeSanityImageUrl(block.asset?.url) ||
    sanityImageUrlFromReference(block.asset?._ref)
  if (!imageUrl) return null

  return (
    <figure key={key} className="my-10 overflow-hidden rounded-2xl">
      <img
        src={imageUrl}
        alt={block.alt || `MagicCraft article image ${index + 1}`}
        className="h-auto max-h-[680px] w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}

export default function PortableText({ blocks }: { blocks: SanityBlock[] }) {
  const output: ReactNode[] = []

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index]
    const key = block._key || `portable-block-${index}`

    if (block._type === 'block' && block.listItem) {
      const listBlocks: SanityBlock[] = []
      while (
        index < blocks.length &&
        blocks[index]._type === 'block' &&
        blocks[index].listItem
      ) {
        listBlocks.push(blocks[index])
        index += 1
      }
      index -= 1
      output.push(...renderListGroups(listTree(listBlocks)))
      continue
    }

    if (block._type === 'block') {
      output.push(renderTextBlock(block, key))
      continue
    }

    if (block._type === 'image') {
      output.push(renderImageBlock(block, key, index))
    }
  }

  return <div className="space-y-6">{output}</div>
}
