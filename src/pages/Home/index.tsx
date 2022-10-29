import { Play } from 'phosphor-react'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">Durant</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} /> Começar
        </button>
      </form>
    </HomeContainer>
  )
}
