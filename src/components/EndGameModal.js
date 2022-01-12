import Modal from 'react-modal'
import Success from '../data/Success.png'
import Fail from '../data/Cross.png'

Modal.setAppElement('#root')

export const EndGameModal = ({
  isOpen,
  handleClose,
  styles,
  darkMode,
  gameState,
  state,
  currentStreak,
  longestStreak,
  answer,
  definition,
  playAgain,
}) => {
  const PlayAgainButton = () => {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <button
          type="button"
          className="rounded-lg px-6 py-2 mt-8 text-lg nm-flat-background dark:nm-flat-background-dark hover:nm-inset-background dark:hover:nm-inset-background-dark text-primary dark:text-primary-dark"
          onClick={playAgain}
        >
          Jugar otra vez
        </button>
      </div>
    )
  }
  const DefinitionsList = () => {
    return (
      <ol className='text-left text-base text-slate-600 list-decimal'>
        {
          definition.map(d => <li style={{margin:"1rem 0"}}><em>{d}</em></li>)
        }
      </ol>
    )
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={styles}
      contentLabel="Game End Modal"
    >
      <div className={darkMode ? 'dark' : ''}>
        <div className="h-full flex flex-col items-center justify-center max-w-[300px] mx-auto text-primary dark:text-primary-dark">
          {gameState === state.won && (
            <>
              <img src={Success} alt="success" height="auto" width="50%" />
              <h1 className=" text-3xl">¡Felicidades!</h1>
              <p className="mt-3 text-2xl text-center">
                  Has encontrado la palabra <strong>{answer}</strong>
              </p>
              <DefinitionsList />
              <p className="mt-6">
                Racha actual: <strong>{currentStreak}</strong> {currentStreak > 4 && '🔥'}
              </p>
              <p>
                Mejor racha: <strong>{longestStreak}</strong>
              </p>
            </>
          )}
          {gameState === state.lost && (
            <>
              <img src={Fail} alt="success" height="auto" width="50%" />
              <div className="text-primary dark:text-primary-dark text-4xl text-center">
                <p>Ups!</p>
                <p className="mt-3 text-2xl">
                  La palabra que buscabas era <strong>{answer}</strong>
                </p>
                <DefinitionsList />
                <p className="mt-6 text-base">
                  Racha actual: <strong>{currentStreak}</strong> {currentStreak > 4 && '🔥'}
                </p>
                <p className="text-base">
                  Mejor racha: <strong>{longestStreak}</strong>
                </p>
              </div>
            </>
          )}
          <PlayAgainButton />
        </div>
      </div>
    </Modal>
  )
}
