import { useEffect, useState } from 'react'
import { FiX, FiCircle } from 'react-icons/fi'
import {
  GameContainer,
  Main,
  TopText,
  Title,
  CurrentPlayer,
  Board,
  Cell,
  ResetButton,
} from './styles'

const INITIAL_BOARD_STATE = ['', '', '', '', '', '', '', '', '']
const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
]

export const Game = () => {
  const [board, setBoard] = useState(INITIAL_BOARD_STATE)
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [gameEnded, setGameEnded] = useState(false)

  const changeCurrentPlayer = () => {
    setCurrentPlayer((player) => (player === 'x' ? 'circle' : 'x'))
  }

  const checkForWinner = () => {
    let thereIsAWinner = false

    WIN_COMBINATIONS.forEach((combination) => {
      const first = board[combination[0]]
      const second = board[combination[1]]
      const third = board[combination[2]]

      if ([first, second, third].includes('')) return

      if (first === second && second === third) {
        thereIsAWinner = true
      }
    })

    if (thereIsAWinner) {
      setTimeout(() => {
        window.alert(`${currentPlayer} is the winner`)
      }, 10)

      return setGameEnded(true)
    }

    if (!board.includes('')) {
      setTimeout(() => {
        window.alert(`DRAW`)
      }, 10)

      return setGameEnded(true)
    }

    changeCurrentPlayer()
  }

  const handlePlayerClick = (position: number) => {
    if (gameEnded) return

    const isCellAlreadyTaken = board[position]

    if (isCellAlreadyTaken) return

    const newBoard = [...board]
    newBoard[position] = currentPlayer

    setBoard(newBoard)
  }

  const resetBoard = () => {
    setBoard(INITIAL_BOARD_STATE)
    setCurrentPlayer('x')
    setGameEnded(false)
  }

  useEffect(() => {
    if (board.every((player) => player === '')) return

    checkForWinner()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board])

  return (
    <Main>
      <GameContainer>
        <TopText>
          <Title>Tic Tac Toe</Title>

          <CurrentPlayer>
            Current Player: <br />
            {currentPlayer}
          </CurrentPlayer>
        </TopText>

        <Board>
          {board.map((player, index) => (
            <Cell
              key={index}
              onClick={() => handlePlayerClick(index)}
              {...{ player, gameEnded }}
            >
              {player === 'x' && <FiX />}
              {player === 'circle' && <FiCircle />}
            </Cell>
          ))}
        </Board>

        <ResetButton onClick={resetBoard}>Reset Board</ResetButton>
      </GameContainer>
    </Main>
  )
}
