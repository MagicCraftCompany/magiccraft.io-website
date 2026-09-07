import { fireEvent, render, screen, act } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import HeroSection from '@/components/Home/HeroSection'
import { openGameByDevice } from '@/lib/gameActions'
vi.mock('@/lib/gameActions', () => ({ openGameByDevice: vi.fn() }))
afterEach(() => vi.restoreAllMocks())

describe('cinematic homepage decision', () => {
  it('uses real media events for playback state and keeps the game handoff', async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue()
    vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})
    const { container } = render(<HeroSection />)
    const video = container.querySelector('video')!
    expect(play).toHaveBeenCalled()
    fireEvent.play(video)
    expect(screen.getByRole('button', { name: 'Pause background video' })).toBeInTheDocument()
    fireEvent.pause(video)
    expect(screen.getByRole('button', { name: 'Play background video' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Play MagicCraft' }))
    expect(openGameByDevice).toHaveBeenCalled()
    fireEvent.error(video)
    expect(screen.getByRole('button', { name: 'Background video unavailable' })).toBeDisabled()
    expect(container.querySelector('.mc-cinema-poster')).toHaveAttribute('src', '/gameplay/magiccraft-triple-kill.webp')
    await act(async () => {})
  })
  it('does not autoplay for reduced motion and tolerates blocked autoplay', async () => {
    vi.spyOn(window, 'matchMedia').mockImplementation(query => ({ matches: true, media: query, onchange: null, addListener: vi.fn(), removeListener: vi.fn(), addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn() }))
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play').mockRejectedValue(new Error('Autoplay blocked'))
    const pause = vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})
    render(<HeroSection />)
    expect(play).not.toHaveBeenCalled()
    expect(pause).toHaveBeenCalled()
    await act(async () => fireEvent.click(screen.getByRole('button', { name: 'Play background video' })))
    expect(screen.getByRole('button', { name: 'Play background video' })).toBeInTheDocument()
  })
})
