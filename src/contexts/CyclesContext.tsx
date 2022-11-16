import { createContext, ReactNode, useReducer, useState } from "react";
import {
  Cycle,
  CycleActionTypes,
  cyclesReducer,
} from "../reducers/cycles.reducer";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextData {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPast: number;
  markCurrentCycleAsFinished: () => void;
  interruptCurrentCycle: () => void;
  setSecondsPast: (seconds: number) => void;
  createNewCycle: (cycle: CreateCycleData) => void;
}

export const CyclesContext = createContext({} as CyclesContextData);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  });

  const [amountSecondsPast, setAmountSecondsPast] = useState(0);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFinished() {
    dispatch({
      type: CycleActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      },
    });
  }

  function setSecondsPast(seconds: number) {
    setAmountSecondsPast(seconds);
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch({
      type: CycleActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    });
    setAmountSecondsPast(0);
  }

  function interruptCurrentCycle() {
    dispatch({
      type: CycleActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    });
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPast,
        setSecondsPast,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
