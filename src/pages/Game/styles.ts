import styled, { css } from 'styled-components'

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4rem;
`

export const GameContainer = styled.div`
  max-width: 62rem;
  height: 52rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const TopText = styled.div``

export const Title = styled.h1`
  text-align: center;
  font-size: 5rem;
  margin-bottom: 1.2rem;
`

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple[700]};
`

export const Player = styled.div`
  & + & {
    margin-left: 2rem;
  }
`

interface PointsProps {
  player: 'x' | 'circle'
}

export const Points = styled.span<PointsProps>`
  color: ${({ theme, player }) =>
    player === 'x' ? theme.colors.red[400] : theme.colors.blue[500]};
`

export const CurrentPlayer = styled.p`
  text-align: center;
  font-size: 2rem;
  line-height: 1.4;
`

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 8rem);
  grid-template-rows: repeat(3, 8rem);
  gap: 0.8rem;
`

interface CellProps {
  gameEnded: boolean
}

export const Cell = styled.div<CellProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  background-color: #fff;
  transition: all 0.1s;
  font-size: 6rem;

  &::selection {
    background-color: transparent;
  }

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:nth-child(3) {
    border-top-right-radius: 10px;
  }

  &:nth-child(7) {
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-bottom-right-radius: 10px;
  }

  &:hover {
    scale: 1.2;
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.purple[600]};
  }

  &:not(:empty) {
    pointer-events: none;
  }

  ${({ gameEnded }) =>
    gameEnded &&
    css`
      pointer-events: none;
    `}
`

export const ResetButton = styled.button`
  border: 0;
  padding: 16px 30px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.purple[600]};
  background-color: ${({ theme }) => theme.colors.blue[400]};
  border-radius: 10px;
  cursor: pointer;
`
